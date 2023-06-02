// THIRD PARTY IMPORTS
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

// INNER IMPORTS
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { CreateSubscriptionDto, UpdateSubscriptionDto } from '../dto';
import { CustomRequest, Query as IQuery } from 'src/shared/interfaces';
import { SubscriptionService } from '../services/subscriptions.service';

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

    return { subscription: data };
  }

  @Get(['/', '/:uid'])
  async getSubscriptions(@Param('uid') uid: string, @Query() query: IQuery) {
    const parsedQuery = this.subscriptionService.getParsedQuery(query);

    if (uid) {
      parsedQuery.uid = [uid];
    }

    const docs = await this.subscriptionService.getAllSubscriptions(
      parsedQuery,
    );

    const retObj: any = { subscriptions: docs };

    if (query.count) {
      retObj.count = retObj.subscriptions.length;
    }

    return retObj;
  }

  @Patch('/:uid')
  @UseGuards(AuthGuard)
  async editSubscriptions(
    @Param('uid') uid: string,
    @Body() payload: UpdateSubscriptionDto,
    @Req() req: CustomRequest,
  ) {
    if (req.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: 'users cannot edit subscription plans',
      });
    }

    if (!uid) {
      throw new BadRequestException({ message: 'please provide uid' });
    }

    const data = await this.subscriptionService.editSubscriptions(
      { uid },
      payload,
    );

    if (!data) {
      throw new BadRequestException({
        message: `no subscription found with given uid: ${uid}`,
      });
    }

    return { subscription: data };
  }

  @Delete('/:uid')
  @UseGuards(AuthGuard)
  async deleteProfile(@Req() req: CustomRequest, @Param('uid') uid: string) {
    if (req.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: 'users cannot delete subscription plans',
      });
    }

    return await this.subscriptionService.editSubscriptions(
      { uid },
      { deleted_at: new Date(), deleted_by: req.user.uid, active: false },
    );
  }
}
