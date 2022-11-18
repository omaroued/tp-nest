import { Controller, Get, Post, Put, Patch } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  nameG(): string {
    console.log('Get');
    return 'this is get method';
  }
  @Post()
  namePo(): string {
    console.log('POST');
    return 'this is Post method';
  }
  @Put()
  namePu(): string {
    console.log('Put');
    return 'this is Put method';
  }
  @Patch()
  namePa(): string {
    console.log('Patch');
    return 'this is Patch method';
  }
}
