import {
  User
} from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean
}

const initialState: State = {
  user: null,
  authError: '',
  loading: false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user: user,
          authError: '',
          loading: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false
      };

    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: '',
        loading: true
      };

    case AuthActions.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
