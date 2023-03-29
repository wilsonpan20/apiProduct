import { Controller, Get } from '@nestjs/common';
import { ProductService } from './Product.service';

@Controller('products')
export class PorductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async findAll(): Promise<any> {
    return this.productService.findAll();
  }
}
