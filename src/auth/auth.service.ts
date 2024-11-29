import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  private readonly username = 'aprovame';
  private readonly password = 'aprovame';

  constructor(private jwtService: JwtService) {}

  async validateUser(login: string, password: string): Promise<boolean> {
    if (login === this.username && password === this.password) {
      return true;
    }
    return false;
  }

  async login(login: string, password: string) {
    const isValid = await this.validateUser(login, password);

    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const payload = { login };
    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '1m' }),
    };
  }
}
