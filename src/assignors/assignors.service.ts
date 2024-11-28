import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssignorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.assignor.create({ data });
  }

  async findOne(id: string) {
    return this.prisma.assignor.findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return this.prisma.assignor.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.assignor.delete({ where: { id } });
  }

  async findAll() {
    return this.prisma.assignor.findMany();
  }
}
