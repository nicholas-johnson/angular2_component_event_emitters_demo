
var heroModel = {
  name: "LLars Bunderchump",
  x: 0,
  y: 0,
  moveNorth: function() {
    this.x++;
  },
  moveSouth: function() {
    this.x--;
  },
  moveEast: function() {
    this.y--
  },
  moveWest: function() {
    this.y++
  }
}

var LocationModel = {
  name: "Nondescript Corridor",
  description: "It is very dark. To the north you can just make out a faint glimmer of golden light.",
  exits: "North",
  removeItem: function(item) {
    this.items.splice(this.items.indexOf(item), 1)
  },
  items: [
    {
      name: "rusty_sword",
      type: "weapon",
      damage: 1,
      description: "A Rusty old Sword, knocked and well used"
    },
    {
      name: "cheese",
      type: "food",
      health: 0.5,
      description: "A Piece of Mouldy Cheese"
    }
  ]
}

var inventoryModel = {
  addItem: function(item) {
    this.items.push(item)
  },
  items: [
    {name: "Rusty Sword"}
  ]
}

var ProtagonistComponent = ng.core
  .Component({
    selector: "protagonist",
    inputs: ['hero'],
    template:
    `

      <h1>{{hero.name}}</h1>
      <pre>{{hero | json}}</pre>
    `
  })
  .Class({
    constructor: function() {
    }
  });

var LocationComponent = ng.core
  .Component({
    selector: "location",
    inputs: ['location'],
    outputs: ['pickUpItem'],
    template:
    `

      <h2>Location</h2>
      <pre>{{location | json}}</pre>
      <h2>Items at this location</h2>
      <ul>
        <li *ngFor="let item of location.items">
          {{item.name}}
          <a (click)="handlePickUpItem(item)">Pick up</a>
        </li>
      </ul>
    `
  })
  .Class({
    constructor: function() {
      this.pickUpItem = new ng.core.EventEmitter();
      this.handlePickUpItem = function(item) {
        console.log('item', item)
        this.pickUpItem.emit(item)
      }
    }
  });

var InventoryComponent = ng.core
  .Component({
    selector: "inventory",
    inputs: ['inventory'],
    template:
    `
      <h2>Inventory</h2>
      <li *ngFor="let item of inventory.items">
        <pre>{{item | json}}</pre>
      </li>
    `
  })
  .Class({
    constructor: function() {
    }
  });

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
    <protagonist [hero]="hero"></protagonist>
    <inventory [inventory]="inventory"></inventory>
    <location [location]="location" (pickUpItem)="handlePickUpItem($event)"></location>
    <button *ngIf="location.exits.north" (click)="hero.moveNorth()">North</button>
    <button *ngIf="location.exits.south" (click)="hero.moveSouth()">South</button>
    <button *ngIf="location.exits.east" (click)="hero.moveEast()">East</button>
    <button *ngIf="location.exits.west" (click)="hero.moveWest()">West</button>
    `
  })
  .Class({
    constructor: function() {
      this.hero = heroModel;
      this.location = LocationModel;
      this.inventory = inventoryModel;
      this.handlePickUpItem = function(item) {
        console.log('item picked up', item);
        this.inventory.addItem(item);
        this.location.removeItem(item);
      }
    }
  })

/**
  * The App Module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent, ProtagonistComponent, InventoryComponent, LocationComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
