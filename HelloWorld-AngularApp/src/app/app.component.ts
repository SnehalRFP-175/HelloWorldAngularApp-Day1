import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imgUrl="../assets/BridgeLabzLogo.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";  //Ading username as typescripting
  nameError: string = ""; 

  ngOnInit(): void{
    this.title = "Hello From Bridgelabz";
  } //using interpolation data binding


  /* UC5-Using the Input Event Binding for the Validation Purpose */
  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  } // using event binding
onInput($event:any)
  {
    console.log("change event occured!",$event.data);
    const nameRegex=RegExp('[A-Z]{1}[a-z]{2}');
    if(nameRegex.test(this.userName))
    {
      this.nameError="";
      this.title=this.userName;
      return;
    }
    this.nameError="Name Is Incorrect";
  }
}