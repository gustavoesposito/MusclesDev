import { createAction } from '@reduxjs/toolkit';

export const setWeight = createAction<number>('SET_WEIGHT');
export const setHeight = createAction<number>('SET_HEIGHT');
export const setYears = createAction<number>('SET_YEARS');
