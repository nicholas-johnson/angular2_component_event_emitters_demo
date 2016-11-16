// Exercise - like counter

// Extend the code so that we can count the number of likes. When the like counter emits a like event, have the counter in the parent template increase by one.
// A user can like as many times as they want to.

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <like (liked)="handleLike()">Hello</like>
      {{message}}
    `
  })
  .Class({
    constructor: function() {
      this.handleLike = function() {
        this.message = "Thanks for liking us"
      }
    }
  });


var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
