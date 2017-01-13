// * events: ['liked']
// * this.liked = new ng.core.EventEmitter();
// * this.liked.next();

var LikeButtonComponent = ng.core
  .Component({
    selector: "like",
    outputs: ['liked'],
    template:
    `
      <a (click)="handleClick()">
        Like?
      </a>
    `
  })
  .Class({
    constructor: function() {
      this.liked = new ng.core.EventEmitter();
      this.status = false;
      this.handleClick = function() {
        this.status = !this.status;
        this.liked.emit({
          status: this.status
        });
        console.log('clicked', this.status);
      }
    }
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <like (liked)="handleLike($event)"></like>
      <div>{{message | json}}</div>
    `
  })
  .Class({
    constructor: function() {
      this.handleLike = function(evt) {
        this.message = evt;
      }
    }
  })

var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent, LikeButtonComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);



// Initial State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     template:
//     `
//       <a>
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       this.handleClick = function() {
//         console.log('clicked');
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like></like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {}
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });





// Goal State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     events: ["liked"],
//     template:
//     `
//       <a (click)="handleClick()">
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.liked = new ng.core.EventEmitter();
//       vm.handleClick = function() {
//         console.log('clicked');
//         vm.liked.next();
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like on-liked="handleLike()"></like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       this.handleLike = function() {
//         this.message = "Thanks for liking us"
//       }
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });








// Initial State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     // events: ["liked"],
//     template:
//     `
//       <a (click)="handleClick()">
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // vm.liked = new ng.core.EventEmitter();
//       vm.handleClick = function() {
//         console.log('clicked');
//       //   vm.liked.next();
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like></like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // this.handleLike = function() {
//       //   this.message = "Thanks for liking us"
//       // }
//     }
//   })
//
// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });



// Final State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     events: ["liked"],
//     template:
//     `
//       <a (click)="handleClick()">
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.liked = new ng.core.EventEmitter();
//       vm.handleClick = function() {
//         console.log('clicked');
//         vm.liked.next();
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like on-liked="handleLike()">Hello</like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // this.handleLike = function() {
//       //   this.message = "Thanks for liking us"
//       // }
//     }
//   })



// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });








// initial state
// var UserDisplayComponent = ng.core
//   .Component({
//     selector: "user",
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [UserDisplayComponent],
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });











// Goal State
// var UserDisplayComponent = ng.core
//   .Component({
//     selector: "user",
//     template:
//     `
//       <div>
//         {{profile | json}}
//         <a (click)="onSelect()">
//           Select
//         </a>
//       </div>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.select = new ng.core.EventEmitter();
//       vm.onSelect = function() {
//         // console.log('selected', vm.profile);
//         vm.select.next(vm.profile);
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [UserDisplayComponent],
//     template:
//     `
//       <user bind-profile="{name:'dave'}" on-select="setEditing($event)"></user>
//       <user bind-profile="{name:'martha'}" on-select="setEditing($event)"></user>
//       <p>
//         Currently Selected:
//         <user bind-profile="profile"></user>
//       </p>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       this.setEditing = function(profile) {
//         console.log(profile)
//         vm.profile = profile
//       }
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });
