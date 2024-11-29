import { Module } from '@nestjs/common';
import { AssignorsController } from './assignors.controller';
import { AssignorsService } from './assignors.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AssignorsController],
  providers: [AssignorsService],
  imports: [AuthModule],
})
export class AssignorsModule {}
