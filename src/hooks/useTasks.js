import {
  doc,
  addDoc,
  collection,
  setDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useTasks = () => {
  const collectionRef = collection(db, "Tasks");
  const createTask = async (data) => {
    try {
      const response = await addDoc(collectionRef, {
        ...data,
        createdAt: Timestamp.now(),
      });
      return response;
    } catch (error) {
      console.log(error.message, "erro create task");
      throw error;
    }
  };

  const updateTask = async (id, data) => {
    try {
      const response = await updateDoc(doc(db, "Tasks", id), data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteDoc(doc(db, "Tasks", id));
      return response;
    } catch (error) {
      throw error;
    }
  };

  // const getAllTasks = async () => {
  //   try {
  //     const response = await getDocs(
  //       query(collectionRef, orderBy("createdAt"))
  //     );
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  //   // console.log("alltasks");
  // };

  return { createTask, deleteTask, updateTask };
};
