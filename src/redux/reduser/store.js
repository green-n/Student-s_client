import { configureStore } from '@reduxjs/toolkit';
import sideBarToggle from './sideBarToggleReduser';
import setNewUser from './setNewUserReduser';
import { setLogInState } from './logInReduser'; 
import AllStudents from './allStudentsReduser';

// Define your Redux state and reducers here

const store = configureStore({
  reducer: {
    // Add your reducers here
    sideBarToggle: sideBarToggle,
    setUser: setNewUser,
    loggedState: setLogInState,
    all_students: AllStudents
  },
});

export default store;