import { Module } from '@nestjs/common';
import { MysqlProvider } from '../../database/mysql.provider';
import { PorductController } from './product.controller';
import { ProductService } from './Product.service';

@Module({
  controllers: [PorductController],
  providers: [MysqlProvider, ProductService],
})
export class ProductModule {}
