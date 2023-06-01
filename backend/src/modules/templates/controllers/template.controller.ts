// THIRD PARTY IMPORTS
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { TemplateService } from '../services/templates.service';
import { CreateTemplateDto, UpdateTemplateDto } from '../dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { CustomRequest, TemplateQuery } from 'src/shared/interfaces';

@Controller('template')
export class TemplateController {
  constructor(private templateService: TemplateService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  async createTemplate(
    @Body() payload: CreateTemplateDto,
    @Req() req: CustomRequest,
  ) {
    if (req.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: 'users cannot create new templates',
      });
    }

    payload.created_by = req.user.uid;

    const data = await this.templateService.createTemplate(payload);

    return { template: data };
  }

  @Get(['/', '/:uid'])
  async getTemplates(@Param('uid') uid: string, @Query() query: TemplateQuery) {
    const parsedQuery = this.templateService.getParsedQuery(query);

    if (uid) {
      parsedQuery.uid = [uid];
    }

    const docs = await this.templateService.getAllTemplates(parsedQuery);

    return { templates: docs };
  }

  @Patch('/:uid')
  @UseGuards(AuthGuard)
  async editTemplates(
    @Param('uid') uid: string,
    @Body() payload: UpdateTemplateDto,
    @Req() req: CustomRequest,
  ) {
    if (req.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: 'users cannot edit existing templates',
      });
    }

    if (!uid) {
      throw new BadRequestException({ message: 'please provide uid' });
    }

    const data = await this.templateService.editTemplates({ uid }, payload);

    if (!data) {
      throw new BadRequestException({
        message: `no template found with given uid: ${uid}`,
      });
    }

    return { template: data };
  }
}
