import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenantsModule } from './tenants/tenants.module';

@Module({
  imports: [TenantsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
