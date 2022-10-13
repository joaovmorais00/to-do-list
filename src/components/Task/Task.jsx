import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TasksContext from "../../context/TasksContext";
import { useTasks } from "../../hooks/useTasks";

const Task = ({ edit = false, task = {}, toggleEdit = () => {} }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useContext(TasksContext);
  const { createTask, updateTask } = useTasks();

  const clear = () => {
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (edit) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, []);

  // //   useEffect(() => {
  // //     if(task){
  // //         setTitle
  // //     }

  //     return () => {
  //       second
  //     }
  //   }, [third])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      createTask({ title, description, concluded: false }).then(
        (response) => {
          clear();
          console.log("criou task");
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      let updatedTask = {};
      if (task.title != title) updatedTask = { title };
      if (task.description != description)
        updatedTask = { ...updatedTask, description };
      if (Object.keys(updatedTask).length > 0) {
        updateTask(task.id, updatedTask).then(
          (response) => {
            console.log("Editou task");
            toggleEdit();
          },
          (error) => {
            console.log(error, "error no update aqui");
          }
        );
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{ margin: "1.5rem 0 0 0 " }}
      onSubmit={handleSubmit}
    >
      <Grid container direction="column" rowSpacing={2}>
        <Grid item>
          <TextField
            sx={{ width: "100%" }}
            label="Título"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: "100%" }}
            label="Descrição"
            multiline
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Grid>
        <Grid item>
          {!edit ? (
            <Button type="submit" variant="contained">
              Cadastrar
            </Button>
          ) : (
            <Grid container columnSpacing={2}>
              <Grid item>
                <Button variant="contained" onClick={toggleEdit}>
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained">
                  Atualizar
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Task;
