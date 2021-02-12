import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody, ConnectedSocket } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

  @WebSocketGateway()
  export class MessagesGateway {
    @WebSocketServer()
    server: Server;
    
    @SubscribeMessage("message")
    handleMessage(
      @MessageBody() data: string,
      @ConnectedSocket() client: Socket
    ) {
      console.log(data)
      return data
    }
  }