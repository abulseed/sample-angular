import { User } from '../user.model';

export interface UserStore {
  selectUser: {
    selectedUser: User;
    editingUser: User;
  };
}
