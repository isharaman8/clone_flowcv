// THIRD PARTY IMPORTS
import {
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
import { PurchaseDto, UpdatePurchaseDto } from '../dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { PurchaseService } from '../services/purchase.service';
import { CustomRequest, Query as IQuery } from 'src/shared/interfaces';

@Controller('purchases')
@UseGuards(AuthGuard)
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Get('/')
  async getAllPurchases(@Query() query: IQuery, @Req() req: CustomRequest) {
    const parsedQuery = this.purchaseService.getParsedQuery(query);
    const data = await this.purchaseService.getPurchases(parsedQuery, req.user);
    const retObj: any = { purchases: data };

    if (query.count) {
      retObj.count = retObj.purchases.length;
    }

    return { purchases: retObj };
  }

  @Post('/create')
  async makePurchase(@Body() payload: PurchaseDto, @Req() req: CustomRequest) {
    const data = await this.purchaseService.makePurchase(payload, req.user);

    return { purchase: data };
  }

  @Patch('/:uid')
  async editPurchase(
    @Body() payload: UpdatePurchaseDto,
    @Req() req: CustomRequest,
    @Param('uid') uid: string,
  ) {
    if (!uid) {
      throw new UnauthorizedException({ message: 'purchase uid not provided' });
    }

    if (req?.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: 'only admins can edit purchases',
      });
    }

    const doc = await this.purchaseService.updatePurchase(payload, uid);

    return { purchases: doc };
  }

  @Delete('/:uid')
  async deletePurchase(@Req() req: CustomRequest, @Param('uid') uid: string) {
    if (!uid) {
      throw new UnauthorizedException({ message: 'purchase uid not provided' });
    }

    if (req?.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: 'only admins can delete purchases',
      });
    }

    return await this.purchaseService.updatePurchase({ active: false }, uid);
  }
}
