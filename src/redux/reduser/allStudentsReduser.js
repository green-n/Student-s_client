const AllStudents = (state = [],action) =>{
    switch(action.type){
        case 'REQUEST_ALL_STUDENTS':
            return state = action.students;
        default:
            return state;
    }
}

export default AllStudents;