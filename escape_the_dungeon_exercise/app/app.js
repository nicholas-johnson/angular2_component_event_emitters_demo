
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

var locationModel = {
  name: "Nondescript Corridor",
  description: "It is very dark. To the north you can just make out a faint glimmer of golden light.",
  exits: {north: true, east: true}
}

var inventoryModel = {
  addItem: (item) => {
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
      <p>{{hero.x}}, {{hero.y}}</p>
    `
  })
  .Class({
    constructor: function() {
      this.hero = heroModel;
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
        {{item | json}}
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
    <button *ngIf="location.exits.north" (click)="hero.moveNorth()">North</button>
    <button *ngIf="location.exits.south" (click)="hero.moveSouth()">south</button>
    <button *ngIf="location.exits.east" (click)="hero.moveEast()">east</button>
    <button *ngIf="location.exits.west" (click)="hero.moveWest()">west</button>
    `
  })
  .Class({
    constructor: function() {
      this.hero = heroModel;
      this.location = locationModel;
      this.inventory = inventoryModel;
    }
  })

/**
  * The App Module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent, ProtagonistComponent, InventoryComponent ],
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
