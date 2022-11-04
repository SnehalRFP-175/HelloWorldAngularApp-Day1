import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld-AngularApp';

  /* Initializing title when ngOnInit lifecycle event is fired.*/
  ngOnInit(): void{
    this.title = "Hello From BridgeLabz."
  }
}
