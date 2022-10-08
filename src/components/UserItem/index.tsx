import React, {FC} from 'react';
import {IUser} from "../../types/types";

interface UserItemProps {
  user: IUser;
}

const Index: FC<UserItemProps> = ({user}) => {
  return (
    <div>
      <div
        key={user.id}
        style={{
          padding: 15,
          border: "1px solid lightgreen"
        }}
      >
        {user.id}. {user.name} lives in {user.address.city} at street {user.address.street}.
      </div>
    </div>
  );
};

export default Index;