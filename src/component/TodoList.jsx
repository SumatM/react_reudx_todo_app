import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import TodoCard from "./TodoCard";

export const TodoList = () => {
  const todoStore = useSelector((s) => s.todoReducer);
  return (
    <Box>
      {todoStore.todo?.map((item) => {
        return <TodoCard key={item.task} {...item} />;
      })}
    </Box>
  );
};


