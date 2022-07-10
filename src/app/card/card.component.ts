import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  // selector: ".app-card", // APP CARD AS CLASS
  templateUrl: "./card.component.html",
  styles: [
    `
      h2 {
        color: green;
      }
    `
  ]
})
export class CardComponent {
  component = "Card Component";
}
