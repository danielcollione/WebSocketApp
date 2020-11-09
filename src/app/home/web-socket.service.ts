import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }

  webSocket: WebSocket;

  public openWebSocket(): Promise<boolean> {
    this.webSocket = new WebSocket('ws://172.16.106.118/ws');

    return new Promise(resolve => {
      this.webSocket.onopen = event => {
        console.log('open: ', event);
        resolve(true);
      };

      this.webSocket.onmessage = event => {
        console.log('Mensagem recebida do servidor: ', event.data);
      };

      this.webSocket.onclose = event => {
        console.log('Close: ', event);
      };
    });
  }

  public sendComandWhoAreYou(msg: string) {
    this.webSocket.send(JSON.stringify(msg));
    console.log('Mensagem enviada para o servidor: ', msg);
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
