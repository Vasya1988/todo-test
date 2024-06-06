import { createContext, ReactNode, useState } from "react";

interface Task {
    title: string, 
    status: string
}

interface contextType {
    tasksArray: Task[],
    setTasksArray: React.Dispatch<React.SetStateAction<Task[]>>
    taskStatus: string
    setTaskStatus: React.Dispatch<React.SetStateAction<string>>
}

const MyContext = createContext<contextType>({
    tasksArray: [],
    setTasksArray: () => {},
    taskStatus: 'All',
    setTaskStatus: () => {}
});

const MyProvider = ({children}: {children: ReactNode}) => {

    const [tasksArray, setTasksArray] = useState<Task[]>([])
    const [taskStatus, setTaskStatus] = useState<string>('All')

    return (
        < MyContext.Provider 
            value={{tasksArray, setTasksArray, taskStatus, setTaskStatus}}
        >
            {children}
        </MyContext.Provider>
    )
};

export {MyContext, MyProvider}