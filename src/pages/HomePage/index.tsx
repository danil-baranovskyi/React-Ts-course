import React, {useEffect, useState} from 'react';

import Card, {CardVariant} from "../../components/Card";
import EventsExample from "../../components/EventsExample";
import {Link} from "react-router-dom";


function Index() {
  return (
    <div className="App">
      <Card
        onClick={(num) => console.log("click", num)}
        width='200px'
        height='200px'
        variant={CardVariant.outlined}>
        <button>Button</button>
      </Card>
      <EventsExample/>
      <div style={{
        display: "flex",
        gap: 20
      }}>
        <Link to={"/users"}>
          Users page
        </Link>
        <Link to={"/todos"}>
          Todos page
        </Link>
      </div>
    </div>
  );
}

export default Index;
