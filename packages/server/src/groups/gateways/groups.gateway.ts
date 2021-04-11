import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway()
export class GroupsGateway {
    @WebSocketServer()
    server: Server
    @SubscribeMessage('group add')
    async groupAdded(@MessageBody() group) {
        this.server.sockets.emit("group add", group)
    }
}