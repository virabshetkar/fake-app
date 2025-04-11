import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TenantsService {
  /**
   *
   */
  constructor(private readonly prisma: PrismaService) {}

  async create(createTenantDto: CreateTenantDto) {
    return await this.prisma.tenants.create({ data: createTenantDto });
  }

  findAll() {
    return `This action returns all tenants`;
  }

  findOne(id: string) {
    return `This action returns a #${id} tenant`;
  }

  async update(id: string, updateTenantDto: UpdateTenantDto) {
    return this.prisma.tenants.update({
      where: { id },
      data: updateTenantDto,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} tenant`;
  }
}
