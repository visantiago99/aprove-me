import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { login: string; password: string }) {
    const { login, password } = body;
    return this.authService.login(login, password);
  }

  @Post('register')
  async register(@Body() body: { login: string; password: string }) {
    const { login, password } = body;
    return this.authService.createPermission(login, password);
  }
}
