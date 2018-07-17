
// TYPES

export const types = {
  SELECT_CONTACT: "CONTACTS/SELECT_CONTACT",
  DESELECT_CONTACT: "CONTACTS/DESELECT_CONTACT"
};

// REDUCER

export const initialState = {
  selectedContact: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_CONTACT:
      return {
        ...state,
        selectedContact: action.data.contact
      };
    case types.DESELECT_CONTACT:
      return {
        ...state,
        selectedContact: null
      };
    default:
      return state;
  }
};

// ACTIONS
export const selectContact = contact => ({
  type: types.SELECT_CONTACT,
  data: { contact }
});

export const deselectContact = () => ({
  type: types.DESELECT_CONTACT,
  data: {}
});

// SELECTORS

export const getSelectedContact = state => state.app.contacts.selectedContact;
export default reducer;
