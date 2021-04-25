import {Coordination} from './Coordination';
import {CoordinationState} from './CoordinationState';
import {Router} from '@angular/router';


class Battleground implements Coordination {

  revealed = false;
  ship: boolean;

  constructor(ship: boolean) {
    this.ship = ship;
  }

  getCoordinationState(): CoordinationState {
    if (!this.revealed) {
      return CoordinationState.HIDDEN;
    } else if (this.ship) {
      return CoordinationState.SHIP;
    } else {
      return CoordinationState.WATER;
    }
  }
}

export class BattleState {

  private sunkenShip = 0;
  private ships = 6;
  public field: Battleground[][] = [

    [new Battleground(false), new Battleground(true), new Battleground(false),
      new Battleground(false), new Battleground(false), new Battleground(true),
      new Battleground(false), new Battleground(false), new Battleground(false),
      new Battleground(false), new Battleground(true), new Battleground(true),
      new Battleground(true), new Battleground(false), new Battleground(false),
      new Battleground(false), new Battleground(false), new Battleground(true)],

  ];

  getField(): Coordination[][] {
    return this.field;
  }

  reveal(shot: Coordination): void {
    (shot as Battleground).revealed = true;
    if ((shot as Battleground).ship) {
      this.sunkenShip++;
      this.won();
    }
  }

  private won(): void {
    if (this.sunkenShip >= this.ships) {
      this.sunkenShip = 0;
      for (const row of this.field) {
        for (const state of row) {
          state.revealed = true;
        }
      }
      this.reset();
    }
  }

  private reset(): void {
    this.sunkenShip = 0;
    for (const row of this.field) {
      for (const state of row) {
        state.revealed = false;
      }
    }
  }
}
