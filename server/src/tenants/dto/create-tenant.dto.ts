import { Prisma } from '@prisma/client';

export class CreateTenantDto implements Prisma.TenantsCreateInput {
  name: string;
}
