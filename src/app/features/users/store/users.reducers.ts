import * as SelectUserActions from './users.actions';
import { UserStore } from './users-store.model';

const initialState = {
    selectedUser: null,
    editingUser: null
};

export function selectedUserReducer(state = initialState, action: SelectUserActions.SelectUserActions) {
    switch (action.type) {
        case SelectUserActions.SELECT_USER:
            return {
                ...state,
                selectedUser: action.payload
            };
            break;

        case SelectUserActions.EDIT_USER:
            return {
                ...state,
                editingUser: action.payload
            };
            break;

        default:
            return state;
    }
}
