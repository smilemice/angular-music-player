import { Action } from '@ngrx/store';
import { ControlActionTypes } from '../actions';

export interface ControlStateData {
  loading?: boolean;
  status: string,
  playList: any[],
  miniPlayer: boolean,
  player: boolean
}

export const initialState: ControlStateData = {
  loading: false,
  status: 'pause',
  playList: [],
  miniPlayer: true,
  player: false
};

export function controlStore(state = initialState, action: Action): ControlStateData {
  switch (action.type) {
    case ControlActionTypes.ToggleSong:
      console.log(action);
      return state;

    case ControlActionTypes.ToggleStatus:
      console.log(action);
      return state;

    case ControlActionTypes.RestControlData:
      console.log(action);
      return state;

    default:
      return state;
  }
}