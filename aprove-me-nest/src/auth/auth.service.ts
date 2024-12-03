import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateUser(login: string, password: string) {
    const user = await this.prisma.permission.findUnique({
      where: { login },
    });

    if (user && user.password === password) { // Considere usar hashing aqui!
      return user;
    }

    throw new UnauthorizedException('Login ou senha inválidos.');
  }

  async login(login: string, password: string) {
    const user = await this.validateUser(login, password);

    const payload = { login: user.login, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload, { expiresIn: '1m' }),
    };
  }

  async createPermission(login: string, password: string) {
    const existingUser = await this.prisma.permission.findUnique({
      where: { login },
    });

    if (existingUser) {
      throw new Error('Login já cadastrado.');
    }

    return this.prisma.permission.create({
      data: { login, password },
    });
  }
}
