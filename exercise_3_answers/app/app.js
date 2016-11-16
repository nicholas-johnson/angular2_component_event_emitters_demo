
var UserDisplayComponent = ng.core
  .Component({
    selector: "user",
    inputs: ['profile'],
    outputs: ['selected'],
    template:
    `
      <div>
        {{profile.name}}
        <a on-click="selectUser()">select</a>
      </div>
    `
  })
  .Class({
    constructor: function() {
      this.selected = new ng.core.EventEmitter();
      this.selectUser = () => {
        this.selected.emit(this.profile);
      }
    }
  });

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [UserDisplayComponent],
    template:
    `
      <h2>Users</h2>
      <div *ngFor="let user of users">
        <user [profile]="user" (selected)="setSelectedUser($event)"></user>
      </div>


      <h2>Selected User</h2>
      <user [profile]="selectedUser"></user>
    `
  })
  .Class({
    constructor: function() {
      this.users = [
        {name: "Tom"},
        {name: "Mikey"},
        {name: "Howard"},
      ]
      this.selectedUser = {}
      this.setSelectedUser = (user) => {
        this.selectedUser = user;
      }
    }
  })

var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent, UserDisplayComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {
    }
  });


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
