// THIRD PARTY IMPORTS
import { Module } from '@nestjs/common';

// INNER IMPORTS
import { MongooseModule } from '@nestjs/mongoose';
import { Template, TemplateSchema } from './schemas/templates.schema';
import { TemplateService } from './services/templates.service';
import { TemplateController } from './controllers/template.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Template.name, schema: TemplateSchema },
    ]),
  ],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
