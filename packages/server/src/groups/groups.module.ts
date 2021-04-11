import {Module} from "@nestjs/common"
import { GroupsGateway } from "./gateways/groups.gateway";
import { MessagesGateway } from "./gateways/messages.gateway";
import { GroupsController } from "./groups.controller";

@Module({
    imports: [],
    providers: [MessagesGateway, GroupsGateway],
    controllers: [GroupsController],
})
export class GroupsModule {}