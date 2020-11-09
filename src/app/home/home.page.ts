import { Component, OnInit, OnDestroy } from "@angular/core";
import { WebSocketService } from "./web-socket.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit, OnDestroy {
  msg: string;

  constructor(private WebSocketService: WebSocketService) {}

  ngOnInit() {
    this.WebSocketService.openWebSocket().then((res) =>
      console.log("Servidor WebSocket aberto na porta 9898.")
    );
  }

  ngOnDestroy() {
    this.WebSocketService.closeWebSocket();
  }

  onClick(msg: string) {
    this.WebSocketService.sendComandWhoAreYou(msg);
  }
}
