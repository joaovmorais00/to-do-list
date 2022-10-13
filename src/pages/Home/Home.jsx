import { Button, Grid } from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTask from "../../components/CreateTask/CreateTask";
import ListTasks from "../../components/ListTasks/ListTasks";
import AuthContext from "../../context/AuthContext";
import TasksContext from "../../context/TasksContext";
import { db } from "../../firebase/config";
import { useAuthentication } from "../../hooks/useAuthentication";
import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const { logout } = useAuthentication();

  useEffect(() => {
    const collectionRef = collection(db, "Tasks");

    const q = query(collectionRef, orderBy("createdAt"));

    onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot, "snapshot");
      const auxTasks = [];
      querySnapshot.forEach((doc) =>
        auxTasks.push({ id: doc.id, ...doc.data() })
      );
      setTasks(auxTasks);
    });
  }, []);

  const handleLogout = () => {
    logout();
  };
  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      <Grid direction="row" container>
        <Grid item md={11}>
          <Grid container columnSpacing={5}>
            <Grid item>
              <CreateTask />
            </Grid>
            <Grid item>
              <ListTasks tasks={tasks} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item textAlign="end">
          <Button variant="contained" onClick={handleLogout}>
            Sair
          </Button>
        </Grid>
      </Grid>
    </TasksContext.Provider>
  );
};

export default Home;
