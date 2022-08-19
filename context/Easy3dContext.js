import { collection,getDocs,setDoc,doc } from "firebase/firestore";
import { createContext,useEffect,useState} from "react";
import { db } from "../utils/firebase";

const Easy3DContext = createContext();

const Easy3DProvider = ({children}) => {
    const [users,setUsers] = useState([]);
    const [models,setModels] = useState([]);
    useEffect(()=>{
        getModels();
    },[]);
    const getModels = async () => {
        const querySnapshot= await getDocs(collection(db,"models"));
        setModels(querySnapshot.docs.map(doc => doc.data()));

    }
    return(
        <Easy3DContext.Provider value={{models,users}}>
            {children}
        </Easy3DContext.Provider>
    )
}



export{Easy3DContext,Easy3DProvider};
