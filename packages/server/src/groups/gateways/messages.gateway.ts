import { SubscribeMessage, WebSocketGateway, MessageBody, ConnectedSocket, WebSocketServer } from "@nestjs/websockets"
import { Socket, Server } from "socket.io";
import { Group } from "src/entity/Group";
import { Message } from "src/entity/Message";
import { User } from "src/entity/User";
import { NewMessageDto } from "../dto/new-message.dto";

@WebSocketGateway()
export class MessagesGateway {
    @WebSocketServer()
    server: Server

    @SubscribeMessage('message')
    async handleMessage(
        @MessageBody() messageDto: NewMessageDto, 
    ) {
        const message = new Message()
        const group = await Group.findOne(messageDto.groupId, {relations: ["users"]})
        message.text = messageDto.text
        message.author = await User.findOne(messageDto.authorId)
        message.group = group
        await message.save()
        const event = `message in group: ${group.id}`
        const data = {message, groupId: messageDto.groupId}
        this.server.sockets.emit(event, data)
    }
}