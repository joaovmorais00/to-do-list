import { Box, Typography } from "@mui/material";

import React from "react";
import Task from "../Task/Task";

const CreateTask = () => {
  return (
    <Box className="section" textAlign="center">
      <Typography variant="h6">Criar tarefa</Typography>
      <Task />
    </Box>
  );
};

export default CreateTask;
