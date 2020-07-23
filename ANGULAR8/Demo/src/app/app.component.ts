import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Welcome o the class </h1>
            <h3 [class] = "successClass"> Angular 8 </h3>
            <h3 class = "text-special"> Angular 8 </h3>
            <h3 [class.text-danger]="hasError"> Hello World! </h3>
            <h3 [ngClass] = "messageClass">Hello World</h3>
            `,
  styles: [`
  .text-success{
    color:green;
  },
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic
  }
  `]
})
export class AppComponent {
  public successClass = "text-success"
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial

  }
  title = 'Angular 8 Application';
}
