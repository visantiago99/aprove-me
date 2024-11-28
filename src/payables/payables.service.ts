import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePayableDto } from './dto/create-payable.dto';

@Injectable()
export class PayablesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePayableDto) {
    return this.prisma.payable.create({ data });
  }

  async findOne(id: string) {
    return this.prisma.payable.findUnique({ where: { id } });
  }

  async findAll() {
    return this.prisma.payable.findMany();
  }

  async update(id: string, data: any) {
    return this.prisma.payable.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.payable.delete({ where: { id } });
  }
}
