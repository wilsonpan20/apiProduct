import { Injectable } from '@nestjs/common';
import { MysqlProvider } from '../../database/mysql.provider';

@Injectable()
export class ProductService {
  constructor(private readonly mysql: MysqlProvider) {}
  async findAll(): Promise<any> {
    console.log(this.mysql.getValue());
    return [{ id: 1 }, { id: 2 }];
  }
}
