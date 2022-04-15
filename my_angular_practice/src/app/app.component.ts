import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']

  // template:
  // `
  // <tr><td [attr.colspan]="1 + 1">one-two</td></tr>
  // `,

  // template:
  // `
  // <div [class.sale]="onSale"></div>
  // `,

  // template:
  // `
  // <div [class]="{
  //   classOne: true,
  //   classTwo: false
  // }"></div>
  // `,

  // template:
  // `
  // <div [style]="'width: 200px; height: 200px; background: red;'"></div>
  // `,

  // template:
  // `
  // <div 
  // [style]="{
  //   width: '50px',
  //   height: '100px', 
  //   background: 'green'
  // }"></div>
  // `,

  // template:
  // `
  // <button (click)="onSave()">Save</button>
  // `,

  // template:
  // `
  // <div [style.background-color]="expression"></div>
  // <div [style.background-color]="expression"></div>
  // `,


  template:
  `
  <app-item-details (deleteRequest)="deleteItem($event)">Delete</app-item-details>
  `,

  styleUrls: ['./app.component.css']

})


export class AppComponent{
    // title = 'Hello World!';

    // getMin(a,b){
    //   if(a < b){
    //     return a;
    //   }
    //   return b;
    // }

    // showText = false;
    // toggleText(event): void {
    //   this.showText = !this.showText;
    //   console.log(event);
    // }

    // todaysDate = new Date();
    // itemImageUrl = '../assets/avatar.jpg';
    // onSale = false;

    //  onSave(){
    //    console.log('click on save');
    //  } 

     deleteItem(item){
      // console.log('click on delete');
      console.log(item);
     }
}

// export class AppComponent {
//   title = 'my_angular_practice';
// }
