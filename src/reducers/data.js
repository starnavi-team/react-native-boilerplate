// @flow
import { DATA_AVAILABLE } from '../actions/types';

type State = {
    +technologies: Array<?string>
};

const dataState: State = { technologies: [] };

export default (state: State = dataState, action: { type: string, payload: Array<string> }) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return { ...state, technologies: action.payload };
    default:
      return state;
  }
};
