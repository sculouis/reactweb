import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react"
import TodoItems from './components/TodoItems';
import { Container } from "@material-ui/core"

function App() {
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
      <TodoItems todoItems={todoItems}></TodoItems>
    </Container>
  );
}

export default App;
