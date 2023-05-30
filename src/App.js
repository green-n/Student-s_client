import * as React from 'react';
import { useState } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { AppBar } from '@mui/material';
import TopBar from './component/appbar/appbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import IndividualChatRoute from './component/IndividualChat.jsx/IndividualChatRoute';
import LogInForm from './component/logIn/logIn';
import AddStudentsPage  from './component/AddStudentsPage/AddStudentsPage';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc,getDoc, onSnapshot, collection } from 'firebase/firestore';
import { db } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setConsent } from 'firebase/analytics';
import { LogInAction, setCurrentUser, setStudents } from './redux/action/action';
import { Profile } from './component/profile/Profile';
import { useEffect } from 'react';
import SheduleViewer from './component/shedule/sheduleViewer';
import { ProfShedule } from './component/ProfesorsShedule/ProfShedule';

const theme = createTheme({
    palette: {
      primary: {
        main: '#010057',
        light: '#6ec6ff',
        dark: '#01002B',
      },
      secondary: {
        main: '#f44336',
        light: '#ff7961',
        dark: '#ba000d',
      }
      }
    });




function App() {
  const dispatch = useDispatch();
  const [CurrenUser, SetCurrentUser] = useState({});
  const isLoggedIn = useSelector(state => state.loggedState)
  const currentUser = useSelector(state => state.setUser) 
  onAuthStateChanged(auth,async (user) =>{
    if(user){
      if(user.uid != CurrenUser.uid){
        SetCurrentUser(user)
        const docRef = doc(db,"Students", user.uid)
        let res = await getDoc(docRef)
        console.log(res.data()) 
        dispatch(setCurrentUser(res.data()))
        dispatch(LogInAction())
      }
    }
    else{}
  })

  useEffect(() => {
    const getStudents = () => {
      const unsub = onSnapshot(collection(db, "Students"), (querySnapshot) => {
        const all_users = []

        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          all_users.push(doc.data())
        });
        dispatch(setStudents(all_users))
      });
  
      return () => {
        unsub();
      };
    };
  
    getStudents();
  }, []);


return(
<ThemeProvider theme={theme}>
  <div>
      <Box sx={{ flexGrow: 1 }}>
        {isLoggedIn && <TopBar/>}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/profile"/> : <Navigate to="/login"/> }/>
          <Route path="/login" element={<LogInForm/>}/>
          <Route path="/shedule" element = {<SheduleViewer/>}/>
          <Route path="/profShedule" element = {<ProfShedule/>}/>
          <Route path="/admin_add_student" element={<AddStudentsPage/>}/>
        </Routes>

      </Box>
  </div>
</ThemeProvider>
)
}

export default App;
