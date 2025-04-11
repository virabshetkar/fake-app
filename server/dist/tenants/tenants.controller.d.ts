import { TenantsService } from './tenants.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
export declare class TenantsController {
    private readonly tenantsService;
    constructor(tenantsService: TenantsService);
    create(createTenantDto: CreateTenantDto): Promise<{
        id: string;
        name: string;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTenantDto: UpdateTenantDto): Promise<{
        id: string;
        name: string;
    }>;
    remove(id: string): string;
}
