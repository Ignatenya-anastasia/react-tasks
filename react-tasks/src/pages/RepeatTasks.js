// 1. Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /

import { use, useCallback, useEffect, useMemo, useReducer, useState } from "react";

// function RepeatTasks(){
//     const calculator = (state, action) => {
//         const n1 = +num1;
//         const n2 = +num2;
//         switch(action){
//             case '+':
//                 return n1 + n2;
//             case '-':
//                 return n1 - n2;
//             case '*':
//                 return n1 * n2;
//             case '/': 
//                 return n2 !== 0 ? n1 / n2 : 'Error';
//             default:
//                 return;
//         }
//     }

//     const [num1, setNum1] = useState(0);
//     const [num2, setNum2] = useState(0);
//     const [result, setResult] = useReducer(calculator , 0);

    
//     return(
//         <>
//         <input onChange={(e) => {
//             setNum1(e.target.value)
//         }} placeholder="Первое число"></input>

//         <input onChange={(e) => {
//             setNum2(e.target.value)
//         }} placeholder="Второе число"></input>

//         <button onClick={() => setResult('+')}>+</button>
//         <button onClick={() => setResult('-')}>-</button>
//         <button onClick={() => setResult('*')}>*</button>
//         <button onClick={() => setResult('/')}>/</button>

//         <p>{`Результат: ${result}`}</p>
//         </>
//     )
// }

// export default RepeatTasks;


// 2. Изменение размера шрифта с использованием useState: Создайте компонент, который
// предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на эти кнопки
// значение font-size изменяется соответствующим образом на +/– 1px.


// function RepeatTasks(){
//     const [fnSize, setFnSize] = useState(14);

//     return(
//         <>
//         <p style={{fontSize: fnSize}}>Размер шрифта</p>

//         <button onClick={() => setFnSize(fnSize - 1)}>Уменьшить</button>
//         <button onClick={() => setFnSize(fnSize + 1)}>Увеличить</button>
//         </>
//     )
// }

// export default RepeatTasks;


// 3. Сделайте счётчик от 1 до 5. Блокируйте кнопку, если предел достигнут. Пределы: 10, -10

// function RepeatTasks(){
//     const [num, setNum] = useState(1);

//     return(
//         <>
//         <p>{num}</p>
//         <button onClick={() => num < 10 ? setNum(num + 1) : 0} disabled={num >= 10}>Вперед</button>
//         <button onClick={() => num > -10 ? setNum(num - 1) : 0} disabled={num <= -10}>Назад</button>
//         </>
//     )
// }
// export default RepeatTasks;



// 4. При вводе в поле снизу отображаются подходящие имена из массива. useReducer

// function RepeatTasks(){
//     const arrName = ['Катя', 'Коля', 'Света', 'Саша', 'Оля'];
//     const findName = (state, action) => {       //state - текущее состояние строка '', action - обьект действий с полями type
//         switch(action.type){
//             case 'inputValue':
//                 return action.value;
//             default:
//                 return state;  //возвр текущее
//         }
//     }

    
//     const [name, setName] = useReducer(findName, '');

//     const fillterName = arrName.filter((el) => el.includes(name))
//     return(
//         <>
//         <input onChange={(e) => setName({type: 'inputValue', value: e.target.value})} placeholder="Имя"></input>
//         <ul>{fillterName.map((el, index) => <li key={index}>{el}</li>)}</ul>
//         </>
//     )
// }

// export default RepeatTasks;




// 5. При отображении страницы запускается расчёт факториал по вводимому значению в поле
// для ввода. Используйте мемоизацию.

// function RepeatTasks(){
//     const [num, setNum] = useState(1);
//     const [inpNum, setInpNum] = useState(0)

//     const factorialNum = useMemo(() => {
//         let result = 1;
//         for(let i = 1; i < inpNum; i++){
//             result *= i
//         }
//         return result;
//     }, [inpNum]) 
//     return(
//         <>
//         <input onChange={(e) => setInpNum(+e.target.value)}></input>
//         <p>{`Факториал: ${factorialNum}`}</p>
//         </>
//     )
// }

// export default RepeatTasks;



// 6. Создайте простейший калькулятор с кнопками операций. Мемоизируйте обработчики.
// useState,

// function RepeatTasks(){
//     const [num1, setNum1] = useState(0);
//     const [num2, setNum2] = useState(0);
//     const [res, setRes] = useState(0)

//     const calculator = useCallback((operations) => {
//         const n1 = +num1;
//         const n2 = +num2;

//         let result = 0;

//         switch(operations){
//             case '+':
//                 result = n1 + n2; break;
//             case '-':
//                 result = n1 - n2; break;
//             case '*':
//                 result = n1 * n2; break;
//             case '/':
//                 result = n1 / n2; break;
//             default:
//                 return;
//         }

//         setRes(result);
//     }, [num1, num2])
//     return(
//         <>
//         <input onChange={(e) => setNum1(+e.target.value)}></input>
//         <input onChange={(e) => setNum2(+e.target.value)}></input>

//         <button onClick={() => calculator('+')}>+</button>
//         <button onClick={() => calculator('-')}>-</button>
//         <button onClick={() => calculator('*')}>*</button>
//         <button onClick={() => calculator('/')}>/</button>

//         <p>{`Резульат: ${res}`}</p>
//         </>
//     )
// }
// export default RepeatTasks;





// 7. Форма добавлеuseCallbackния заметки. У каждой — кнопка «Редактировать» и «Сохранить».
// Заметки хранить в массиве объектов

// function RepeatTasks(){
//     const objNotes = [
//         {id: 1, text: 'Купить продукты', isEdit: false},
//         {id: 2, text: 'Съездить в путешествие', isEdit: false}
//     ]
//     const [notes, setNotes] = useState(objNotes);

//     const [newNote, setNewNote] = useState('');

//     const addNote = useCallback(() => {
//         setNotes([...notes, {id: Date.now(), text: newNote, isEdit: false}]);
//         setNewNote('')
//     }, [newNote]);

//     const editNote = useCallback((id) => {
//         setNotes((el) => el.map((note) => note.id === id ? {...note, isEdit: true} : note))
//     }, []);

//     const saveNote = useCallback((id, newText) => {
//         setNotes((el) => el.map((note) => note.id === id ? {...note, text: newText, isEdit: false} : note))
//     }, [])
//     return(
//         <>
//         <input onChange={(e) => setNewNote(e.target.value)}></input>
//         <button onClick={() => addNote()}>Добавить</button>

//         <ul>{notes.map((el) => (
//             <li key={el.id}>
//             {el.isEdit ? 
//             (<>
//             <input defaultValue={el.text} id={el.id}></input>
//             <button onClick={() => {
//                 const input = document.getElementById(el.id)
//                 saveNote(el.id, input.value)
//             }}>Сохранить</button>
//             </>
//             ) : 
//             (<>
//                 <p>{el.text}</p>
//                 <button onClick={() => editNote(el.id)}>Редактировать</button>
//                 </>
//             )
//             }
            
//             </li>
//         ))}</ul>
//         </>
//     )
// }

// export default RepeatTasks;



// 8. Сделайте заголовок с числом и кнопки: «Старт», «Стоп», «Сброс». Управляйте числом как
// секундомером.

// function RepeatTasks(){
//     const [time, setTime] = useState(0);
//     const [start, setStart] = useState(false);

//     useEffect(() => {
//         let interval;
//         if(start){
//             interval = setInterval(() => setTime((el) => el += 1), 1000)
//         }
//         return () => clearInterval(interval);
//     }, [start]);
//     return(
//         <>
//         <p>{time}</p>
//         <button onClick={() => setStart(true)}>Старт</button>
//         <button onClick={() => setStart(false)}>Стоп</button>
//         <button onClick={() => {setStart(false); setTime(0)}}>Сброс</button>
//         </>
//     )
// }

// export default RepeatTasks;



// 9. Отобразите список из 50 элементов по 10 на страницу. Массив из 50 элементов хранится в
// items . Добавьте пагигацию на страницу. Где для каждой кнопки свои 10 элементов

function RepeatTasks(){
    const items = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Элемент ${i + 1}`, description: `Описание элемента ${i + 1}` }));

    const [page, setPage] = useState(1);
    const itemsNumPage = 10;

    const indexOfLastItem = page * itemsNumPage;
    const indexOfFirstItem = indexOfLastItem - itemsNumPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(items.length / itemsNumPage);


    return(
        <>
        <ul>{currentItems.map((el) => (
            <li key={el.id}>{el.name} - {el.description}</li>
        ))}</ul>

        <p>Page {page} from {totalPages}</p>

        <button onClick={() => setPage((el) => el - 1)} disabled={page === 1}>Back</button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => setPage(page)}>{page}</button>
        ))}

        <button onClick={() => setPage((el) => el + 1)} disabled={page === totalPages}>Up</button>
        </>
    )
}

export default RepeatTasks;