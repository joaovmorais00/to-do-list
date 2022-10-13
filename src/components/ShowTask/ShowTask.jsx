import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Task from "../Task/Task";
import { useTasks } from "../../hooks/useTasks";
import TasksContext from "../../context/TasksContext";

const ShowTask = ({ task }) => {
  const [edit, setEdit] = useState(false);

  const { deleteTask } = useTasks();

  const handleToggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleDelete = (id) => {
    deleteTask(id).then(
      (response) => {
        console.log("Deletou task");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <Grid item>
      <Box
        sx={{
          border: "1px solid rgba(184, 184, 184)",
          borderRadius: "4px",
          padding: "1rem",
        }}
      >
        {!edit ? (
          <>
            <Typography sx={{ fontWeight: "bold" }}>{task.title}</Typography>

            <Typography textAlign="justify">{task.description}</Typography>
            <Button
              variant="contained"
              sx={{ margin: "1rem" }}
              onClick={handleToggleEdit}
            >
              Editar
            </Button>
            <Button variant="contained" onClick={() => handleDelete(task.id)}>
              Excluir
            </Button>
          </>
        ) : (
          <Task edit={true} task={task} toggleEdit={handleToggleEdit} />
        )}
      </Box>
    </Grid>
  );
};

export default ShowTask;
