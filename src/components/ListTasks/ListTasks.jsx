import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import TasksContext from "../../context/TasksContext";

import ShowTask from "../ShowTask/ShowTask";

import "./ListTasks.css";

const ListTasks = () => {
  const [tasks, setTasks] = useContext(TasksContext);

  // useEffect(() => {
  //   console.log(tasks, "show tasks");
  // }, [tasks]);

  return (
    <Box className="section" textAlign="center">
      <Typography variant="h6">Tarefas a fazer</Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
        rowSpacing={2}
        sx={{ margin: "1rem 0 0 0" }}
      >
        {tasks && tasks.map((task) => <ShowTask task={task} key={task.id} />)}
      </Grid>
    </Box>
  );
};

export default ListTasks;
