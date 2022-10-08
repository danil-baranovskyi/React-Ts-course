import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../../types/types";
import axios from "axios";
import UserItem from "../../components/UserItem";
import List from "../../components/List";
import TodoItem from "../../components/TodoItem";

const Index: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, [])


  const fetchTodos = async () => {
    try {
      const res = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
      setTodos(res.data)
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
    </div>
  );
};

export default Index;