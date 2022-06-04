import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export const UsersList = (user) => {
  return (
    <>
      <Stack p={4} backgroundColor="#322659" color="white" borderRadius="10px">
        <Text fontSize="25px">{user.name}</Text>
        <Text color="grey" fontSize="18px">
          {user.email}
        </Text>
        {/* <Text>City: {user.address.city}</Text>
        <Text>Company: {user.company.name}</Text> */}
      </Stack>
    </>
  );
};
