import { useEffect } from "react";
import { useAppState } from "./AppContext";
import { BOOKS } from "./constants";

export default function useLocal() {
  let [state, dispatch] = useAppState();

  useEffect(() => {
    let toReadLocal = localStorage.getItem("to_read_list");
    let completedLocal = localStorage.getItem("completed_list");
    dispatch({
      type: "GET_FROM_LOCAL_STATE",
      toRead: toReadLocal ? toReadLocal.split(",") : BOOKS,
      completed: completedLocal ? completedLocal.split(",") : [],
    });
  }, [dispatch]);
}
