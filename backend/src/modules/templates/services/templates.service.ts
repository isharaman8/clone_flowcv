import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { Template } from '../schemas/templates.schema';
import { CreateTemplateDto, UpdateTemplateDto } from '../dto';
import { _getIdAggregationFilter } from 'src/shared/helpers/aggregations';
import { TemplateQuery } from 'src/shared/interfaces';
import { TEMPLATE_ENUM } from 'src/shared/constants';

@Injectable()
export class TemplateService {
  constructor(
    @InjectModel('Template')
    private readonly templateModel: Model<Template>,
  ) {}

  async createTemplate(payload: CreateTemplateDto) {
    payload.uid = nanoid();

    const data = await this.templateModel.create(payload);

    return data;
  }

  async getAllTemplates(query: TemplateQuery) {
    const baseQuery = [
      {
        $match: {
          $and: [..._getIdAggregationFilter(query)],
        },
      },
    ];

    const templates = this.templateModel.aggregate(baseQuery);

    return templates;
  }

  getParsedQuery(query: TemplateQuery) {
    let { type, uid } = query;

    type = TEMPLATE_ENUM.includes(type) ? type : 'free';
    uid = uid ? (Array.isArray(uid) ? uid : [uid]) : null;

    return {
      type,
      uid,
    };
  }

  async editTemplates(filter = {}, payload: UpdateTemplateDto = {}) {
    return this.templateModel.findOneAndUpdate(filter, payload, {
      new: true,
    });
  }
}
