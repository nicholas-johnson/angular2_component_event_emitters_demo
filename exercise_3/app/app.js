// Integration Exercise - Select a user

// Add a select button to the user component. Make it so that when I click the select button, an event fires and returns the user. Save this user on the parent component and display it nicely.
// Bonus points: Create a component that displays the currently selected user. This will need to receive the user from the parent component as a property binding.

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
    `
  })
  .Class({
    constructor: function() {
    }
  })


document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
