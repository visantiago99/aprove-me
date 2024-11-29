import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { AssignorsService } from './assignors.service';
import { CreateAssignorDto } from './dto/create-assignor.dto';
import { UpdateAssignorDto } from './dto/update-assignor.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('integrations/assignor')
@UseGuards(JwtAuthGuard)
export class AssignorsController {
  constructor(private readonly assignorsService: AssignorsService) {}

  @Post()
  async create(@Body() createAssignorDto: CreateAssignorDto) {
    return this.assignorsService.create(createAssignorDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.assignorsService.findOne(id);
  }

  @Get()
  async findAll() {
    return this.assignorsService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAssignorDto: UpdateAssignorDto) {
    return this.assignorsService.update(id, updateAssignorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.assignorsService.delete(id);
  }
}
