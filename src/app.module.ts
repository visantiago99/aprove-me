import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayablesModule } from './payables/payables.module';
import { AssignorsModule } from './assignors/assignors.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PayablesModule, AssignorsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
