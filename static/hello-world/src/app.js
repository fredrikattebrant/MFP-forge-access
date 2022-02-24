import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";

function App() {
  const [filters, setFilters] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    invoke("getFilter", { id: "10000" }).then((response) => {
      setFilters("It worked");
    });
  }, []);

  useEffect(() => {
    invoke("getUsers").then((users) => {
      console.log("Users => ", users);
      try {
          setUsers(users);
      } catch (error) {
          console.error("Error in getUsers:", error);
      }
    });
  }, []);

  return (
    <div>
      <div>{filters ? filters : "Loading filters..."}</div>
      <div>{users ? users : "Loading users..."}</div>
    </div>
  );
}

export default App;
