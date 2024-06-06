import { useContext, FormEvent, useEffect } from 'react';
import Styles from './TodoEnter.module.sass';
import { MyContext } from '../../context/Context';

const TodoEnter = () => {

    // Массив задач
    const {tasksArray, setTasksArray} = useContext(MyContext);

    const changeHandle = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // Добираемся до введенного текста
        const target = event.target as HTMLFormElement;
        const targetValue = target.querySelector('input[type="text"]') as HTMLInputElement;
        
        await setTasksArray(prev => [...prev, {title: targetValue.value, status: 'Active'}]);
        
        // Возвращаем поле пустым
        targetValue.value=''
    }

    useEffect(() => console.log(tasksArray), [tasksArray])

    return (
        <form 
            className={Styles.TodoEnter}
            onSubmit={changeHandle}
        
        >
            <input className={Styles.InputText} type="text" />
            <input className={Styles.Button}  type="submit" value="Go" />
        </form>
    )
}
export default TodoEnter;