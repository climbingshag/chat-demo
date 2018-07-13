export const types = {
  LOGIN_REQUEST: "AUTH/LOGIN_REQUEST", // Triggers a saga that 1) triggers login HTTP requests 2) updates other reducers
  LOGIN_SUCCESS: "AUTH/LOGIN_SUCESS",
  LOGIN_FAIL: "AUTH/LOGIN_FAIL",
  SIGNUP_REQUEST: "AUTH/SIGNUP_REQUEST", // Triggers a saga that 1) triggers login HTTP requests 2) updates other reducers
  SIGNUP_SUCCESS: "AUTH/SIGNUP_SUCESS",
  SIGNUP_FAIL: "AUTH/SIGNUP_FAIL",
  LOGOUT_REQUEST: "AUTH/LOGOUT_REQUEST", // Triggers a saga that 1) triggers login HTTP requests 2) updates other reducers
  LOGOUT_SUCCESS: "AUTH/LOGOUT_SUCESS",
  LOGOUT_FAIL: "AUTH/LOGOUT_FAIL"
};

export const initialState = {
  isLoggedIn: false,
  authPending: false,
  authFailed: false,
  authError: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        authPending: true,
        authFailed: false,
        authError: null
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        authPending: false,
        token: action.data.token,
        isLoggedIn: true
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        authPending: false,
        authFailed: true,
        authError: action.error,
        isLoggedIn: false
      };

    case types.SIGNUP_REQUEST:
      return {
        ...state,
        authPending: true,
        authFailed: false,
        authError: null
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        authPending: false,
        token: action.data.token,
        isLoggedIn: true
      };

    case types.SIGNUP_FAIL:
      return {
        ...state,
        authPending: false,
        authFailed: true,
        authError: action.error,
        isLoggedIn: false
      };

    case types.LOGOUT_REQUEST:
      return {
        ...state,
        authPending: true,
        authFailed: false,
        authError: null
      };

    case types.LOGOUT_SUCCESS:
      return { ...state, authPending: false, token: null, isLoggedIn: false };

    case types.LOGOUT_FAIL:
      return {
        ...state,
        authPending: false,
        authFailed: true,
        authError: action.error
      };
    default:
      return state;
  }
};

export const actions = {
  login: (username, password) => ({
    type: types.LOGIN_REQUEST,
    data: { username, password }
  }),
  signup: (username, password, avatarUrl) => ({
    type: types.SIGNUP_REQUEST,
    data: { username, password, avatarUrl }
  }),
  logout: () => ({ type: types.LOGOUT_REQUEST })
};
