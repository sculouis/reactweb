import './App.css';
import {useEffect,useState} from "react"
import TodoItems from './components/TodoItems';
import { Container,Button } from "@material-ui/core"
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


function App() {
  const classes = useStyles();
  const [todoItems,settodoItems] = useState([]);

  useEffect(async () => {
    var response = await fetch("http://localhost:5000/api/TodoItems");
    var data = await response.json();
    settodoItems(data);
    console.log(data);
  },[]);

  return (
    <Container>
      <header>
      </header>
      <h1>測試待辦事項</h1>
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
    </form>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <TodoItems todoItems={todoItems}></TodoItems>
    </Container>
  );
}

export default App;
