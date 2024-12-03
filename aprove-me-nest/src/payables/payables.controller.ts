import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CreatePayableDto } from './dto/create-payable.dto';
import { PayablesService } from './payables.service';
import { UpdatePayableDto } from './dto/update-payable.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('integrations/payable')
@UseGuards(JwtAuthGuard)
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

  @Get()
  async findAll() {
    return this.payablesService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePayableDto: UpdatePayableDto) {
    return this.payablesService.update(id, updatePayableDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.payablesService.delete(id);
  }
}
