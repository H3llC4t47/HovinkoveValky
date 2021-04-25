import {CoordinationState} from './CoordinationState';

export interface Coordination {
  getCoordinationState(): CoordinationState;
}
