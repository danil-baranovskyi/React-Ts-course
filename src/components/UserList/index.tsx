import React, {FC} from 'react';
import {IUser} from "../../types/types";
import UserItem from "../UserItem";

interface UserListProps {
 users: IUser[]
}

const Index:FC<UserListProps> = ({users}) => {
  return (
    <div>
      {users.map((user, i) =>
        <UserItem user={user} key={i}/>
      )}
    </div>
  );
};

export default Index;