import { AppService } from './app.service';
import { User } from './user.schema';
export declare class AppController {
    private readonly appservice;
    constructor(appservice: AppService);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    update(user: Partial<User>, id: string): Promise<string | User>;
    delete(id: string): Promise<String>;
}
