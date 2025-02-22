import { Controller, Post, Get, Body } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post('buy-now')
  async handlePurchase(@Body() purchaseData: any): Promise<{ message: string }> {
    await this.purchaseService.handlePurchase(purchaseData);
    return { message: 'Purchase successful, email sent!' };
  }

  @Get('buy-now')
  async getPurchasedPets(): Promise<any[]> {
    return this.purchaseService.getPurchasedPets();
  }
}