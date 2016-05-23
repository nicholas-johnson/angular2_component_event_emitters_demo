
var UserDisplayComponent = ng.core
  .Component({
    selector: "user",
    inputs: ['profile'],
    events: ['selected'],
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
      var vm = this;
      vm.selected = new ng.core.EventEmitter();
      vm.selectUser = function() {
        vm.selected.emit(vm.profile);
      }
    }
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [UserDisplayComponent],
    template:
    `
      <user bind-profile="{name:'tom'}" on-selected="setSelectedUser($event)"></user>
      <user [profile]="{name:'dick'}" (selected)="setSelectedUser($event)"></user>
      <user [profile]="{name:'marigold'}" on-selected="setSelectedUser($event)"></user>

      <h1>Selected User</h1>
      <user [profile]="selectedUser"></user>
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      vm.selectedUser = {}
      vm.setSelectedUser = function(user) {
        vm.selectedUser = user;
      }
    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});







