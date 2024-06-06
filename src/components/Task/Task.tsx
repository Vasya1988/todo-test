import React, { useContext, useState } from 'react';
import Styles from './Task.module.sass';
import { MyContext } from '../../context/Context';

interface TaskProps {
    title: string,
    status?: string,
    check?: boolean
}
const Task: React.FC<TaskProps> = ({ title, check }) => {

    // Массив из контекста
    const {setTasksArray} = useContext(MyContext);

    // Флаг, что бы избежать двойного срабатывания
    // функции cheking(на label и на Input)
    const [clickStatus, setClickStatus] = useState(false)

    // Изменение статуса задачи
    const checking = (event: React.MouseEvent<HTMLLabelElement>) => {

        // если на label была вызвана ф-я, второй раз, на input она уже не сработает
        if (clickStatus) {
            setClickStatus(false) 
            return
        } 

        setClickStatus(true) 

        const inpCheck = event.currentTarget.firstChild as HTMLInputElement
        const taskName = event.currentTarget.innerText

        // Меняем статус задачи
        setTasksArray(
            prev => prev.map((task) =>
                task.title === taskName 
                    ? {title: task.title, status: task.status === 'Active' ? 'Completed' : 'Active'}
                    : task
            )   
        )
    }
    
    return (
        <label onClick={checking} className={Styles.Task}>
            <input defaultChecked={check} data-check='check' type="checkbox" name="" id="" />
            <span></span>
            <span>{title}</span>
        </label>
    )
};

export default Task;