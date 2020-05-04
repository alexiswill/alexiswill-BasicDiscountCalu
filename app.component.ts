import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

  
})
export class AppComponent {
  title = 'Discount Calculator';

public num1: number;
public num2: number;
public result: number;



percent(){
  this.result = this.num2 - ((this.num1 / 100) * this.num2);
  
}


}
