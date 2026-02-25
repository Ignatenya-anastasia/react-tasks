// Сделать кнопку, которая при клике показывает alert("Привет!").

import { use } from "react";
import { useState } from "react";

// function Index2(){
//     function show(){
//         alert('Привет!')
//     }
//     return(
//         <div>
//             <button onClick={show}></button>
//         </div>
//     )
// }
// export default Index2;



// 2. Кнопка, которая при двойном клике (onDoubleClick) выводит alert("Привет!").
// function Index2(){
//     function show(){
//         alert('Привет!')
//     }
//     return(
//         <div>
//             <button onDoubleClick={show}></button>
//         </div>
//     )
// }
// export default Index2;

// 3. Поле ввода, которое при каждом изменении (onChange) пишет введённое значение в
// консоль.

// function Index2(){
    
//     return(
//         <div>
//             <input onChange={(event) =>{
//                 console.log(event.target.value);
                
//             }}></input>
//         </div>
//     )
// }
// export default Index2;

// 4. Кнопка, которая при клике меняет свой цвет с помощью e.target.style = "background-color:
// red".

// function Index2(){
    
//     return(
//         <div>
//             <button onClick={(event) =>{
//                 event.target.style.backgroundColor = 'red';
                
//             }}></button>
//         </div>
//     )
// }
// export default Index2;



// 5. Создайте компонент с input. По изменению значения input отображайте количество
// символов в input в консоль используя event.target.value.

// function Index2(){
    
//     return(
//         <div>
//             <input onChange={(event) =>{
//                 const value = event.target.value
//                 console.log(value.length);
                
                
//             }}></input>
//         </div>
//     )
// }
// export default Index2;


// 6. Поле ввода, которое при нажатии клавиши (onKeyDown) выводит в консоль название
// клавиши (event.key).


// function Index2(){
    
//     return(
//         <div>
//             <input onKeyDown={(event) =>{
//                 console.log(event.key);
//             }}></input>
//         </div>
//     )
// }
// export default Index2;


// 7. Поле ввода, которое при отпускании клавиши (onKeyUp) показывает alert("Клавишу
// отпустил").


// function Index2(){
    
//     return(
//         <div>
//             <input onKeyUp={(event) =>{
//                 alert(`Клавишу отпустил ${event.key}`);
//             }}></input>
//         </div>
//     )
// }
// export default Index2;



// 8. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет в
// соответствии с массивом цветов ['red', 'white', 'blue’]. Используйте рандомный выбор цвета
// из массива при каждом клике.


// function Index2(){
    
//     return(
//         <div>
//             <button onClick={(event) =>{
//                 const arr = ['red', 'white', 'blue'];
//                 event.target.style.backgroundColor = arr[Math.floor(Math.random() * arr.length)]
//             }}></button>
//         </div>
//     )
// }
// export default Index2;


// 9. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку вычислите и
// выведите сумму всех чисел из массива в консоль.


// function Index2(){
    
//     return(
//         <div>
//             <button onClick={(event) =>{
//                 const arr = [1, 2, 3, 4, 5];
//                 const sumNum = arr.reduce((sum, el) => (sum + el), 0);
//                 console.log(sumNum);
                
//             }}></button>
//         </div>
//     )
// }
// export default Index2;


// 10. Создайте компонент с массивом элементов и кнопкой. При каждом клике на кнопку
// выбирайте случайный элемент из массива и отображайте его в консоль.

// function Index2(){
    
//     return(
//         <div>
//             <button onClick={(event) =>{
//                 const arr = [1, 'hi', 4, 'good'];
//                 const ranEl = Math.floor(Math.random() * arr.length)
//                 const res = arr[ranEl];
//                 console.log(res);
                
//             }}></button>
//         </div>
//     )
// }
// export default Index2;


// 11. Квадрат <div>, который при наведении (onMouseEnter) пишет в консоль "Навёл", а при
// уходе (onMouseLeave) — "Ушёл".



// function Index2(){
//     const showEl = () => {
//         console.log('Навел');
        
//     }

//     const UnShow = () => {
//         console.log('Ушел');
        
//     }
//     return(
//         <div onMouseEnter={showEl}
//         onMouseLeave={UnShow}>
//             <p>Text</p>
//         </div>
//     )
// }
// export default Index2;


// 1. Создайте компонент с полем ввода и параграфом. При вводе данных в input отображать
// вводимое значение в параграф текущей страницы
// function Index2(){
//     const [a, b] = useState('');

//     return(
//         <>
//         <input onChange={(e) => {
//             b(e.target.value)
//         }}>
//         </input>
//         <p>{a}</p>
//         </>
//     )
// }
// export default Index2;

// 2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input
// и проверить вводимую строку на палиндром. Результат отображать в консоль


// function Index2(){
//     const [a, b] = useState('');

//     return(
//         <>
//         <input onChange={(e) => {
//             b(e.target.value)
//         }}>
//         </input>
//         <button onClick={() => {
//             a.split('').reverse().join('') === a ? console.log(true) : console.log(false);
            
            
//         }}>click</button>
//         </>
//     )
// }
// export default Index2;


// 3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input
// и проверить вводимую строку на почту. Результат отображать в консоль


// function Index2(){
//     const [a, b] = useState('');
//     const req = /[a-z]+@\.com/
//     return(
//         <>
//         <input onChange={(e) => {
//             b(e.target.value)
//         }}>
//         </input>
//         <button onClick={() => {
//             req.test(a) ? console.log(true) : console.log(false);
            
            
            
//         }}>click</button>
//         </>
//     )
// }
// export default Index2;


// 4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать данные из
// двух input (2 разных state). Сравнить значения 2 input на равенство. Результат отображать в
// консоль

// function Index2(){
//     const [a, b] = useState();
//     const [c, d] = useState()
//     return(
//         <>
//         <input onChange={(e) => {
//             b(e.target.value)
//         }}>
//         </input>
//         <input onChange={(e) =>{
//             d(e.target.value)
//         }}></input>
//         <button onClick={() => {
//             a === c ? console.log(true) : console.log(false);
            
            
//         }}>click</button>
//         </>
//     )
// }
// export default Index2;


// 5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в поле и
// нажатии на кнопку, компонент должен отображать приветственное сообщение с именем,
// введенным пользователем


// function Index2(){
//     const [a, b] = useState('');

//     return(
//         <>
//         <input onChange={(e) => {
//             b(e.target.value)
//         }}>
//         </input>

//         <button onClick={() => {
//             console.log(`Привет, ${a}`);
            
//         }}>click</button>
//         </>
//     )
// }
// export default Index2;


// 6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку текст
// должен появляться или исчезать


// function Index2(){
//     const [a, b] = useState('');

//     return(
//         <>
//         <button onClick={() => {
//             a === 'block' ? b('none') : b('block')
            
//         }}>Показать\Скрыть</button>

//         <p style={{display: a}}>Text</p>
//         </>
//     )
// }
// export default Index2;


// 7. Создайте компонент с кнопкой и параграфом для отображения результата счетчика
// (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике
// на кнопку автоматически прибавлялась +1 к стейту счетчика

// function Index2(){
//     const [a, b] = useState(0);

//     return(
//         <>
//         <button onClick={() => {
//             b(a + 1)
            
//         }}>Click</button>

//         <p>{a}</p>
//         </>
//     )
// }
// export default Index2;

// 8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом для
// отображения результата счетчика (изначально счетчик равен 0). Ваша задача так
// реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к
// стейту счетчика, а при клике на кнопку -1, происходило вычитание значения 1

// function Index2(){
//     const [a, b] = useState(0);

//     return(
//         <>
//         <button onClick={() => {
//             b(a + 1)
            
//         }}>PLUS</button>
//         <button onClick={() => {
//             b(a - 1)
//         }}>MINUS</button>

//         <p>{a}</p>
//         </>
//     )
// }
// export default Index2;


// 9. Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и
// кнопку "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в ноль. Используйте
// useState, чтобы управлять значением счетчика.

// function Index2(){
//     const [a, b] = useState(0);

//     return(
//         <>
//         <button onClick={() => {
//             b(a + 1)
            
//         }}>PLUS</button>
//         <button onClick={() => {
//             b(a - 1)
//         }}>MINUS</button>
//         <button onClick={() => {
//             b(0)
//         }}>Сбросить</button>

//         <p>{a}</p>
//         </>
//     )
// }
// export default Index2;

// 10. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет шрифта
// заголовка H1 должен измениться. При следующем клике цвет должен вернуться в
// первоначальное состояние. Текст кнопки также должен меняться с "Открыто" на "Закрыто"
// при нажатии на саму кнопку.


// function Index2(){
//     const [a, b] = useState(true);

//     return(
//         <>
//         <h1 style={{color: a === true ? 'green' : 'red'}}>Text</h1>
//         <button onClick={(e) => {
//             if(a === true){
//                 e.target.textContent = 'Close';
//                 b(false)
//             } else{
//                 e.target.textContent = 'Open';
//                 b(true)
//             }
//         }}>Open</button>
//         </>
//     )
// }
// export default Index2;


// for example
// function Component() {

//     const [value1, f1] = useState(true);
//     const [value2, f2] = useState(<h1 style={{ "color": "red" }}>Открыто</h1>);

// return (
//     <div>
//         {value2}
//         <button onClick={() => {
//             if (value1) {
//                 f1(false);
//                 f2(<h1 style={{ "color": " blue" }}>Закрыто</h1>)
//             }
//             else {
//                 f1(true);
//                 f2(<h1 style={{ "color": "red" }}> Открыто </h1>)
//             }
//         }}>Изменить</button>
//     </div>
// )
// }

// export default Component;


// 11. Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По
// нажатию на кнопку "Открыть" меню должно отображаться.

// function Index3(){
//     const [a, b] = useState('none');

//     return(
//         <>
//         <button onClick={() => {
//             a === 'block' ? b('none') : b('block')
//         }}>Menu</button>

//         <ul style={{display: a}}>
//             <li>tea</li>
//             <li>coffee</li>
//             <li>meat</li>
//         </ul>
//         </>
//     )
// }
// export default Index3;



// 1.Переключение отображения текста. Кнопка переключает состояние отображения текста (показать/скрыть).
// По умолчанию текст скрыт
// Клик по кнопке — текст отображается
// Повторный клик — текст снова скрыт

// function Index2(){
//     const [a, b] = useState('none');
//     return(
//         <>
//         <button onClick={() => {
//             a === 'block' ? b('none') : b('block')
//         }}>Показать\Скрыть</button>
//         <p style={{display: a}}>Text Random</p>
//         </>
//     )
// }
// export default Index2;



// 2. Поле ввода сохраняет введённый текст и отображает его ниже в h1.
// Ввод "hello" — отображается в h1 "hello"

// function Index2(){
//     const [a, b] = useState('');
//     return(
//         <>
//         <input onChange={(e) => {
//             b(e.target.value)
//         }}></input>
//         <h1>{a}</h1>
//         </>
//     )
// }
// export default Index2;

// 3. Кнопка с иконкой "лайк" увеличивает счётчик лайков.
// Начальное значение — 0
// Один клик — 1
// Два клика — 2
// Три клика — 3

// function Index2(){
//     const [a, b] = useState(0);
//     return(
//         <>
//         <button onClick={() =>{
//             b(a + 1)
//         }}>Like {a}</button>
//         </>
//     )
// }
// export default Index2;



// 4. После заполнения инпута и клика на кнопку отображается "Отправлено: [значение]".
// Ввод "email@example.com" → клик → отображается "Отправлено: email@example.com"
// Очистить и ввести "hello@world.com" → клик → "Отправлено: hello@world.com"

function Index2(){
    const [a, b] = useState('');
    return(
        <>
        <input value={a} onChange={(e) => {
            b(e.target.value)
        }}></input>
        <button onClick={() => {
            alert(`Отправлено: ${a}`)
            b('')
        }}>Отправить</button>
        </>
    )
}
export default Index2;