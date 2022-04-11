//-----------------------------------------------------------------
//
// There are eight lifecycle hooks in Angular:
//
// ngOnChanges()
// ngOnInit()
// ngDoCheck()
// ngAfterContentInit()
// ngAfterContentChecked()
// ngAfterViewInit()
// ngAfterViewChecked()
// ngonDestroy()
//
//-----------------------------------------------------------------

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'my_angular_practice';
// }

export class AppComponent implements OnInit, OnDestroy{

  //  tsconfig.json : Add "noImplicitAny": false,
  intervalSub

  ngOnInit(){
      this.intervalSub = setInterval(() => {
        console.log('Hello from ngOnInit');
      }, 1000);
  }

  ngOnDestroy(){
      if (this.intervalSub){
        clearInterval(this.intervalSub);
      }
  }
}