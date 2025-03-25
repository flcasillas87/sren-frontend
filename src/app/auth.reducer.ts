import { createReducer, on } from '@ngrx/store';
import { login, logout, loginSuccess, loginFailure } from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  error: any;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state) => ({ ...state, isLoggedIn: true, error: null })),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(logout, (state) => ({ ...state, isLoggedIn: false, error: null }))
);