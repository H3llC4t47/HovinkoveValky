import {Component, OnInit} from '@angular/core';
import {BattleState} from './BattleState';
import {CoordinationState} from './CoordinationState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'battleshits';
  BattleState = new BattleState();

  hidden = CoordinationState.HIDDEN;
  water = CoordinationState.WATER;
  ship = CoordinationState.SHIP;
}
