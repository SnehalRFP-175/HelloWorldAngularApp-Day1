import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld-AngularApp';

  imgUrl="../assets/BridgeLabzLogo.jpg";
  url = "https://www.bridgelabz.com";
  userName : String = "";

  /* Initializing title when ngOnInit lifecycle event is fired.*/
  ngOnInit(): void{
    this.title = "Hello From BridgeLabz."
  }

  /* UC3- Launching BridgeLabz Site in a new Tab on clicking BridgeLabz Logo*/
  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
