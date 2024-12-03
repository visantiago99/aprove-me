import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAssignorDto } from './dto/create-assignor.dto';

@Injectable()
export class AssignorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAssignorDto) {
    const [existingAssignorDocument, existingAssignorEmail] = await Promise.all([
      this.prisma.assignor.findUnique({
        where: { document: data.document },
      }),
      this.prisma.assignor.findFirst({
        where: { email: data.email },
      }),
    ]);

    if (existingAssignorDocument) {
      throw new ConflictException('O documento já está cadastrado.');
    }

    if (existingAssignorEmail) {
      throw new ConflictException('O email já está cadastrado.');
    }

    return this.prisma.assignor.create({
      data,
    });
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
