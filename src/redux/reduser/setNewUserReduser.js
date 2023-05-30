const setNewUser = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NEW_USER': {
            console.log(action.user);
            state = action.user; return state;}
        default: return state;
    
    }
}

export default setNewUser
