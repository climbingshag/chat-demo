export const types = {
  SELECT_CONTACT: "CONTACTS/SELECT_CONTACT",
};

export const initialState = {
  contactSelected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_CONTACT:
      return {
        ...state,
        contactSelected: action.data.contact.id,
        authFailed: false,
        authError: null
      };
    default:
      return state;
  }
};

export const actions = {
  selectContact: (contact) => ({
    type: types.LOGIN_REQUEST,
    data: { username, password }
  }),
  signup: (username, password, avatarUrl) => ({
    type: types.SIGNUP_REQUEST,
    data: { username, password, avatarUrl }
  }),
  logout: () => ({ type: types.LOGOUT_REQUEST })
};