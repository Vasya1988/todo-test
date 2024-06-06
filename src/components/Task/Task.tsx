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

    // Изменение статуса задачи
    const checking = (event: React.MouseEvent<HTMLInputElement>) => {

        const inpCheck = event.currentTarget.firstChild as HTMLInputElement
        const taskName = event.currentTarget.nextElementSibling?.textContent

        // Меняем статус задачи
        setTasksArray(
            prev => prev.map((task) => task.title === taskName 
                    ? {title: task.title, status: task.status === 'Active' ? 'Completed' : 'Active'}
                    : task
            )   
        )
    }
    
    return (
        <div className={Styles.Task}>
            <input onClick={checking} defaultChecked={check} data-check='check' type="checkbox" name="" id="" />
            <span>{title}</span>
        </div>
    )
};

export default Task;