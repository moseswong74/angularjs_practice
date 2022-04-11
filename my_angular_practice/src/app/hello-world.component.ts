import { Component } from "@angular/core";

// Add component decorator
@Component({

    // Choose css selector, this will render your component defined the 
    // HTML template that the component uses to display info.
    selector: 'app-hello-world',
    template: '<h1>{{title}}</h1>',
    styles:[`
    h1{
        color: blue;
    }`]
})

export class HelloWorldComponent{
    title = 'Hello World!';
}