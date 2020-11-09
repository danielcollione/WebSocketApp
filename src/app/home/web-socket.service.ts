import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }

  webSocket: WebSocket;

  public openWebSocket(): Promise<boolean> {
    this.webSocket = new WebSocket('ws://localhost:9898');

    return new Promise(resolve => {
      this.webSocket.onopen = event => {
        console.log('open: ', event);
        resolve(true);
      };

      this.webSocket.onmessage = event => {
        console.log(event.data);
      };

      this.webSocket.onclose = event => {
        console.log('Close: ', event);
      };
    });
  }

  public sendComandWhoAreYou(msg: string) {
    console.log(msg);
    this.webSocket.send(msg);
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
