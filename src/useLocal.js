import {useEffect} from 'react';
import {useAppState} from './AppContext';
import {BOOKS} from './dataBooks';

export default function useLocal(){
    let [state, dispatch] = useAppState();
    console.log(state, dispatch);
    useEffect(() => {
        let toReadLocal = localStorage.getItem("to_read_list");
        let completedLocal = localStorage.getItem("completed_list");
        dispatch({
            type: "GET_FROM_LOCAL_STATE",
            toRead: toReadLocal ? toReadLocal.split(",") : BOOKS,
            completed: completedLocal ? completedLocal.split(",") : [],
        })
    }, []);
}