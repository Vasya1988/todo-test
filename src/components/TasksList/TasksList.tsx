import Styles from './TasksList.module.sass';
import Task from '../Task/Task';
import { useContext, useState } from 'react';
import { MyContext } from '../../context/Context';
import Button from '../ui/button/Button';

const TasksList = () => {

    // Массив из контекста
    const {tasksArray, setTasksArray, taskStatus, setTaskStatus} = useContext(MyContext)

    return (
        <>
            <div className={Styles.TasksList}>
                <span>Что нужно сделать</span>
                {
                    // Рендерим задачи
                    tasksArray.map((task, index) => {
                        // В условии находим вкладку, какие задачи отобразить
                        if (taskStatus === 'All' || taskStatus === task.status) 
                            return <Task
                                key={index}
                                check={task.status === 'Completed' ? true : false}
                                title={task.title}
                            />
                    })
                }
            </div>
            <nav className={Styles.Navigate}>
                <div className={Styles.Buttons}>

                    <Button
                        eventClick={() => {setTaskStatus('All')}}
                        name={'All'}
                    />

                    <Button
                        eventClick={() => { setTaskStatus('Active') }}
                        name={'Active'}
                    />

                    <Button
                        eventClick={() => { setTaskStatus('Completed') }}
                        name={'Completed'}
                    />

                </div>
                <Button
                    eventClick={() => { 
                        setTasksArray([]); setTaskStatus('All') }}
                    name={'Clear'}
                />
            </nav>
        </>
    )
};

export default TasksList;