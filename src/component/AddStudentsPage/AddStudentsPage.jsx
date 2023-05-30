import { Box, Grid, TextField, Button } from '@mui/material';
import React from 'react';
import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { StudentElements } from './StudentElements';


// Initialize Firebase

const AddStudentsPage = () => {
  const padding_left = 3;
  const padding_top = 3;
  



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const student_data = {
      student_id: data.get('student_id'),
      student_name: data.get('student_name'),
      group_name: data.get('group_name'),
      students_year: data.get('students_year'),
    };
    console.log(student_data);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        student_data.student_id + '@mail.com',
        student_data.student_id + '@mail.com'
      );
      await setDoc(doc(db, 'Students', res.user.uid), {
        uid: res.user.uid,
        student_id: student_data.student_id,
        student_name: student_data.student_name,
        group_name: student_data.group_name,
        students_year: student_data.students_year,
        status: "student"
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={3} sx={{ borderRight: '2px solid #01002B', paddingRight: '10px', height: '100vh' }}>
              <Box sx={{ pt: 5, pl: padding_left }}>
                <TextField hiddenLabel name="student_id" type="student_id" id="student_id" label="ID студента" variant="outlined" fullWidth />
              </Box>
              <Box sx={{ pt: padding_top, pl: padding_left }}>
                <TextField hiddenLabel name="student_name" type="student_name" id="student_name" label="Имя студента" variant="outlined" fullWidth />
              </Box>
              <Box sx={{ pt: padding_top, pl: padding_left }}>
                <TextField hiddenLabel name="group_name" type="group_name" id="group_name" label="группа студента" variant="outlined" fullWidth />
              </Box>
              <Box sx={{ pt: padding_top, pl: padding_left }}>
                <TextField hiddenLabel name="students_year" type="students_year" id="students_year" label="курс студента" variant="outlined" fullWidth />
              </Box>
              <Box sx={{ textAlign: 'center', pt: padding_top }}>
                <Button type="submit" variant="contained">
                  Добавить студента
                </Button>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <StudentElements/>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default AddStudentsPage;