import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class MysqlProvider {
  private readonly logger: Logger;
  constructor() {
    this.logger = new Logger('MysqlProvider');
    this.logger.log('Initialized!');
  }
  getValue(): string {
    return 'Value from provider!';
  }
}
