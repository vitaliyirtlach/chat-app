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
    @SubscribeMessage('group add')
    async groupAdded(@MessageBody() group: {personWithCommunicationId: string, group: Group}) {
        console.log(group.group)
        this.server.sockets.emit(group.personWithCommunicationId, group.group)
    }

    @SubscribeMessage('message')
    async handleMessage(
        @MessageBody() messageDto: NewMessageDto, 
        @ConnectedSocket() socket: Socket
    ) {
        const message = new Message()
        message.text = messageDto.text
        message.author = await User.findOne(messageDto.authorId)
        message.group = await Group.findOne(messageDto.groupId)
        await message.save()
        this.server.sockets.in(`room ${messageDto.groupId}`).emit("message", message)
    }

    @SubscribeMessage('joinToRoom')
    joinToRoom(@MessageBody() roomId: string, @ConnectedSocket() socket: Socket) {
        socket.join(`room ${roomId}`)
    }
}