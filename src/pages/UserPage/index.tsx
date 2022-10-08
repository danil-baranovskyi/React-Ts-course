import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

type UserItemPageParams  = "id";

const Index: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();
  const params = useParams<UserItemPageParams>();

  useEffect(() => {
    fetchUser();
  }, [])

  const fetchUser = async () => {
    try {
      const res = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id);
      setUser(res.data)
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <div>
        <button onClick={() => navigate("/users")}>Back</button>
      </div>
      <h1>Page of user {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        City: {user?.address.city}
      </div>
      <div>
        Street: {user?.address.street}
      </div>
    </div>
  );
};

export default Index;