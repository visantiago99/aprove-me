import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CreatePayableDto } from './dto/create-payable.dto';
import { PayablesService } from './payables.service';

@Controller('integrations/payable')
export class PayablesController {
  constructor(private readonly payablesService: PayablesService) {}

  @Post()
  async createPayable(@Body() createPayableDto: CreatePayableDto) {
    return this.payablesService.create(createPayableDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.payablesService.findOne(id);
}
}
