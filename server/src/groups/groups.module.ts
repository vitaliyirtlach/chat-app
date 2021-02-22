import {Module} from "@nestjs/common"
import { MessagesGateway } from "./gateways/messages.gateway";
import { GroupsController } from "./groups.controller";

@Module({
    imports: [],
    providers: [MessagesGateway],
    controllers: [GroupsController],
})
export class GroupsModule {}