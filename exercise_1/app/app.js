// Exercise - like counter

// Extend the code so that we can count the number of likes. When the like counter emits a like event, have the counter in the parent template increase by one.
// A user can like as many times as they want to.

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [LikeButtonComponent],
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


document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
