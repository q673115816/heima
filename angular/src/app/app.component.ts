import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular";
  car = ["五菱宏光", "AE86", "法拉利", "迈凯伦"];

  sayHello() {
    alert("hello");
  }
  logHello(e) {
    console.log(e);
    if(e.keyCode===13) {
      alert('updata')
    }
  }
}
