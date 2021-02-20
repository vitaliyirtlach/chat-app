import { Req } from "@nestjs/common";
import { SubscribeMessage, WebSocketGateway, MessageBody, ConnectedSocket } from "@nestjs/websockets"
import { Request } from "express";
import { Socket } from "socket.io";
import { Group } from "src/entity/Group";
import { Message } from "src/entity/Message";
import { User } from "src/entity/User";
import { NewMessageDto } from "./dto/new-message.dto";

@WebSocketGateway()
export class MessagesGateway {
    @SubscribeMessage('message')
    async handleMessage(
        @MessageBody() messageDto: NewMessageDto, 
        @ConnectedSocket() client: Socket,
        @Req() req: Request
    ) {
        const message = new Message()
        message.text = messageDto.text
        message.author = await User.findOne(messageDto.authorId)
        message.group = await Group.findOne(messageDto.groupId)
        await message.save()
        client.emit("message", message)
    }

    @SubscribeMessage('joinToRoom')
    joinToRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
        client.join(roomId)
    }
}