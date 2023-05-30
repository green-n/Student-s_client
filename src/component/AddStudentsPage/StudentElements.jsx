import { Divider, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const StudentElements = () => {
  const students = useSelector(state => state.all_students)
  console.log(students)

  return (
    <>
      <List sx={{}}>
        <Divider  component="li" />
        {students.map(el => (
          <>
            <ListItem key={el.id} sx ={{
              pl:2,
              pt:2
            }}>
              <ListItemText primary={`Имя: ${el.student_name}  Группа: ${el.group_name}`}  secondary={`курс: ${el.students_year} номер зачетки: ${el.student_id}`}/>
            </ListItem> 
            <Divider  component="li" />      
          </> 
        ))}
      </List>
    </>
  )
}