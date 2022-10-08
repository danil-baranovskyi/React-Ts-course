import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../../types/types";
import axios from "axios";
import UserItem from "../../components/UserItem";
import List from "../../components/List";
import {Link} from "react-router-dom";

const Index: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(res.data)
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <List items={users}
            renderItem={(user: IUser) => <Link to={`/users/${user.id}`}><UserItem user={user} key={user.id}/></Link>}/>
    </div>
  );
};

export default Index;