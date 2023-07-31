import { combineReducers } from 'redux';

interface MeasuresState {
  selectedWeight: number;
  selectedHeight: number;
  selectedYears: number;
}

const initialState: MeasuresState = {
  selectedWeight: 0,
  selectedHeight: 0,
  selectedYears: 0,
};

const measureReducer = (
  state: MeasuresState = initialState,
  action: any,
): MeasuresState => {
  switch (action.type) {
    case 'SET_WEIGHT':
      return { ...state, selectedWeight: action.payload };
    case 'SET_HEIGHT':
      return { ...state, selectedHeight: action.payload };
    case 'SET_YEARS':
      return { ...state, selectedYears: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  measures: measureReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
