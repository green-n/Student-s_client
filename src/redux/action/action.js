export const sideBarToggleState = () => {
    return { 
        type: 'TOGGLE_SIDEBAR'
    }
    
}


export const setCurrentUser = (user) => {
    return { 
        type: 'SET_NEW_USER',
        user: user
    }
    
}
export const setStudents = (students) => {
    return { 
        type: 'REQUEST_ALL_STUDENTS',
        students: students
    }
    
}

export const LogInAction = () =>{
    return {
        type: 'LOG_IN'
    }
}


export const LogOutAction = () =>{
    return {
        type: 'LOG_OUT'
    }
}

