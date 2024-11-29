import { Module } from '@nestjs/common';
import { PayablesController } from './payables.controller';
import { PayablesService } from './payables.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PayablesController],
  providers: [PayablesService],
  imports: [AuthModule],
})
export class PayablesModule {}
