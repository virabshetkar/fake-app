import { Prisma } from '@prisma/client';

export class UpdateTenantDto implements Prisma.TenantsUpdateInput {
  name: string;
}
