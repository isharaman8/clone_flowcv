import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { SubscriptionService } from '../services/subscriptions.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { CreateSubscriptionDto } from '../dto';
import { CustomRequest, Query as IQuery } from 'src/shared/interfaces';

@Controller('subscription')
export class SubscriptionController {
  constructor(private subscriptionService: SubscriptionService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  async createSubscription(
    @Body() payload: CreateSubscriptionDto,
    @Req() req: CustomRequest,
  ) {
    if (req.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: 'users cannot create subscription plans',
      });
    }

    payload.created_by = req.user.uid;

    const data = await this.subscriptionService.createSubscription(payload);

    return data;
  }

  @Get(['/', '/:uid'])
  async getSubscriptions(@Param('uid') uid: string, @Query() query: IQuery) {
    const parsedQuery = this.subscriptionService.getParsedQuery(query);

    if (uid) {
      parsedQuery.uid = [uid];
    }

    const docs = await this.subscriptionService.getAllSubscriptions(query);

    return docs;
  }
}
