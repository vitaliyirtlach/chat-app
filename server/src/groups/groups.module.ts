import {Module} from "@nestjs/common"
import { GroupsController } from "./groups.controller";

@Module({
    imports: [],
    providers: [],
    controllers: [GroupsController],
})
export class GroupsModule {}