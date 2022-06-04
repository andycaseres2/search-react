import { Box, Stack, Text, Input, FormControl } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "./App.css";
import * as API from "./service/index";
import { UsersList } from "./components/UsersList";

function App() {
  //aca agregamos los usuarios para iterarlos en las cards
  const [users, setUsers] = useState([]);

  //aca agregamos la entrada del cliente al input
  const [keyword, setKeyword] = useState("");

  //aca agregamos la data de los usuarios para filtrar la busqueda
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.getAllUsers().then(setUsers).catch(console.error);
    API.getAllUsers().then(setSearch).catch(console.error);
  }, []);

  //aca agregamos el filtro de busqueda
  function searchInput(string) {
    let result = "";
    result = search.filter((user) => {
      if (user.name.toLowerCase().includes(string.toLowerCase())) {
        return user;
      }
    });
    setUsers(result);
  }

  function handleChange(e) {
    setKeyword(e.target.value);
    searchInput(e.target.value);
  }
  return (
    <div className="App">
      <Stack pt="50px" pl="100px" pr="100px">
        <Box>
          <Text fontSize="30px" fontWeight="bold">
            Search React
          </Text>
        </Box>
        <FormControl pt="20px" pb="20px">
          <Input
            padding="22px"
            placeholder="Search..."
            width={400}
            value={keyword}
            onChange={handleChange}
          />
        </FormControl>

        <dev className="userList">
          {users.map((user) => (
            <UsersList key={user.id} {...user} />
          ))}
        </dev>
      </Stack>
    </div>
  );
}

export default App;
