import { createContext, ReactNode, useState } from "react";

interface Task {
    title: string, 
    status: string
}

interface contextType {
    tasksArray: Task[],
    setTasksArray: React.Dispatch<React.SetStateAction<Task[]>>
}

const MyContext = createContext<contextType>({
    tasksArray: [],
    setTasksArray: () => {}
});

const MyProvider = ({children}: {children: ReactNode}) => {

    const [tasksArray, setTasksArray] = useState<Task[]>([])

    return (
        < MyContext.Provider 
            value={{tasksArray, setTasksArray}}
        >
            {children}
        </MyContext.Provider>
    )
};

export {MyContext, MyProvider}