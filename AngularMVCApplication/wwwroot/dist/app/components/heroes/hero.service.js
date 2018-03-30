"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
class Hero {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.Hero = Hero;
const HEROES = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];
let HeroService = class HeroService {
    getHeroes() {
        return Observable_1.Observable.of(HEROES);
    }
    getHero(id) {
        return this.getHeroes()
            .map(heroes => heroes.find(hero => hero.id === +id));
    }
};
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map