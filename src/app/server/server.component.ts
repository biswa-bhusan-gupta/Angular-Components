import { Component } from "@angular/core";

@Component({
  // selector: "[app-server]", // [app-server] AS ATTRIBUTE
  selector: "app-server",
  templateUrl: "./server.component.html",
  // template: "<app-card></app-card>",
  styleUrls: ["./server.component.css"]
  // styles: [
  //   `
  //     h2 {
  //       color: green;
  //     }
  //   `
  // ]
})
export class ServerComponent {
  component = "Server Component";
}
