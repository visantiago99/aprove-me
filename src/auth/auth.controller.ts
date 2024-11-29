import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('integrations/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() body: { login: string; password: string }) {
    const { login, password } = body;
    return this.authService.login(login, password);
  }
}
