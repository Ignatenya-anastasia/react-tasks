import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from 'axios';


// ЗАДАЧИ НА USEREF

// 1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный

// function App(){
//     const data = useRef()
    
//     return(
//         <>
//         <button onClick={() => {
//             data.current.style = "color: red;"
//         }}>Click</button>
//         <p ref={data}>Text</p>
//         </>
//     )
// }
// export default App;


// 2. Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет текста


// function App(){
//     const data = useRef()
    
//     return(
//         <>
//         <button onClick={() => {
//             data.current.style = `color: #${Math.floor(Math.random() * 1000)}`
//         }}>Click</button>
//         <p ref={data}>Text</p>
//         </>
//     )
// }
// export default App;


// 3. Создайте компонент, который при каждом клике на кнопку увеличивает размер шрифта
// текста в элементе на странице.

// function App(){
//     const data = useRef()
    
//     return(
//         <>
//         <button onClick={() => {
//             data.current.style = `font-size: ${parseInt(data.current.style.fontSize) + 1}px`
//         }}>Click</button>
//         <p ref={data} style={{fontSize: '16px'}}>Text</p>
//         </>
//     )
// }
// export default App;


// 4. Создайте компонент, который при фокусе на текстовом поле добавляет background
// (onFocus, onBlur)

// function App(){
//     const data = useRef()
    
//     return(
//         <>
//         <input ref={data} onFocus={() => {
//             data.current.style = 'background-color: pink'
//         }}
//         onBlur={() => {
//             data.current.style = 'background-color: grey'
//         }}
//         ></input>
//         </>
//     )
// }
// export default App;


// 5. Реализуйте компонент, который отслеживает количество кликов на кнопку с помощью
// useRef и выводит это число в консоль при каждом клике.

// function App(){
//     const data = useRef(0)
    
    
//     return(
//         <>
//         <button onClick={() => {
//             data.current += 1
//             console.log(data);
            
//         }}>Click</button>
//         </>
//     )
// }

// export default App;


// 6. Разработайте компонент для реализации "подсказок" (tooltips). При наведении на элемент
// интерфейса (например, кнопку), компонент отображает подсказку с текстом. (onMouseEnter
// срабатывает, когда курсор мыши входит в область элемента. onMouseLeave срабатывает,
// когда курсор мыши покидает область элемента.)

// function App(){
//     const data = useRef()
//     return(
//         <>
        
//         <button onMouseEnter={() =>{
//             data.current.style = 'display: block'
//         }}
//         onMouseLeave={() => {
//             data.current.style = 'display: none'
//         }}
//         >Click</button>


//         <div style={{display: 'none'}} ref={data}>
//             <p>Text.....</p>
//         </div>
//         </>
//     )
// }

// export default App;





// Задачи на useState

// 1. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть". При
// нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст скрывается.

// function Index5(){
//     const [a, b] = useState();

//     return(
//         <>
//         <button onClick={() => {
//             b('block')
//         }}>Показать</button>
//         <button onClick={() => {
//             b('none')
//         }}>Скрыть</button>

//         <p style={{display: a}}>Random text..</p>
//         </>
//     )
// }
// export default Index5;

// 2. Создайте компонент выбора цвета, который включает 4шт. – button (в качестве textContent:
// red, green, blue, yellow), 1шт. – h1 и позволяет пользователю выбирать цвет. По клику на
// соответствующую кнопку цвет заголовка должен меняться.

// function Index5(){
//     const arrColor = ['red', 'green', 'blue', 'yellow'];
//     const [a, b] = useState();

//     return(
//         <>
//         <button onClick={() => {
//             b(arrColor[0])
//         }}>Color red</button>

//         <button onClick={() => {
//             b(arrColor[1])
//         }}>Color green</button>

//         <button onClick={() => {
//             b(arrColor[2])
//         }}>Color blue</button>

//         <button onClick={() => {
//             b(arrColor[3])
//         }}>Color yellow</button>

//         <p style={{color: a}}>Random text..</p>
//         </>
//     )
// }
// export default Index5;


// 3. Создайте компонент по клику на кнопку проверить значение введенного поля для ввода
// регулярным выражением на почту. В console.log отобразить true если введенная строка
// удовлетворяет регулярному выражению и false в противном случае.


// function Index5(){
//     const [a, b] = useState('');
//     const reg = /^[a-z0-9]+@mail\.com$/;
//     return(
//         <>
//     <input onChange={(e) => {
//         b(e.target.value)
//     }}></input>
//     <button onClick={() => {
//         reg.test(a) ? console.log(true) : console.log(false);
//         ;
        
//     }}>Проверить</button>
//         </>
//     )
// }
// export default Index5;

// 4. Отобразите список элементов массива, кнопку и поле для ввода. По клику на кнопку брать
// значение инпута и добавлять в конец списка массива.

// function Index5(){
//     const [a, b] = useState('');
//     const [c, d] = useState(['first', 'second', 'third'])
//     return(
//         <>
//         <input onChange={(e) => {
//             b(e.target.value)
//         }}></input>

//         <button onClick={() => {
//             d([...c, a])
//         }}>Добавить</button>

//         <ul>
//             {c.map((el) => {
//                 return <li>{el}</li>
//             })}
//         </ul>
//         </>
//     )
// }
// export default Index5;




// Задачи на useMemo


// 1. Создайте компонент React, который отображает сумму двух чисел. Используй хук useState
// для хранения значений чисел и хук useMemo для кэширования результата суммы. При
// изменении значений чисел, сумма должна пересчитываться только тогда, когда
// необходимо.

// function Index5(){
//     const [num1, setNum1] = useState('');
//     const [num2, setNum2] = useState('');

//     const findNum = useMemo(() => {
//         return +num1 + +num2
//     }, [num1, num2]);
//     return(
//         <>
//         <input onChange={(e) => {
//             setNum1(e.target.value)
//         }}></input>

//         <input onChange={(e) => {
//             setNum2(e.target.value)
//         }}></input>

//         <p>{findNum}</p>
//         </>
//     )
// }

// export default Index5;


// 2. Разработайте компонент, который выполняет факториал числа при вводе значения в
// текстовое поле. Используйте useMemo, чтобы кэшировать результаты вычислений для
// разных введенных значений и отображать их без повторных вычислений.


// function Index5(){
//     const [num, setNum] = useState(1);
    
//     function factorial(a){
//     if(a == 1) return 1
//     return(a-1) * a
// }


//     const findFact = useMemo(() => {
//         return factorial(num)
//     }, [num])
//     return(
//         <>
//         <input onChange={(e) => {
//             setNum(e.target.value)
//         }}></input>

//         <p>{findFact}</p>
//         </>
//     )
// }

// export default Index5;



// 3. Создайте компонент для отображения списка чисел от 1 до N, где N - число, введенное
// пользователем с клавиатуры. Используйте useMemo, чтобы вычислить сумму списка чисел
// только при изменении N.

// function Index5(){
//     const [num, setNum] = useState('');

//     const doArr = useMemo(() => {
//         let res = 0;
//         for(let i = 1; i < num; i++) res += num;
//         return res;

//     }, [num])
//     return(
//         <>
        
//         <input onChange={(e) => {
//             setNum(e.target.value)
//         }}></input>

//         <p>{doArr}</p>
//         </>
//     )
// }

// export default Index5;


// 4. Напишите программу, которая принимает строку от пользователя и выводит ее в обратном
// порядке. Используй хук useState для хранения строки и хук useMemo для кэширования
// результата.


// function Index5(){
//     const [str, setStr] = useState('');
//     const reverStr = useMemo(() => {
//         return str.split('').reverse().join('')
//     })
//     return(
//         <>
//         <input onChange={(e) => {
//             setStr(e.target.value)
//         }}></input>

//         <p>{reverStr}</p>
//         </>
//     )
// }

// export default Index5;


// 5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес должен быть
// получен с использованием useMemo при монтировании компонента и кэширован для
// избегания повторных запросов к API при обновлении других частей компонента.
// https://api.ipify.org/?format=json


// function Index5(){
//     const [id, setId] = useState('');

//     async function getData() {
//         const responce = await fetch('https://api.ipify.org/?format=json');
//         const data = await responce.json();
//         setId(data.id);
        
//     }

//     useMemo(() => {
//     getData()
//     }, [])
//     return(
//         <>
//         <p>{id}</p>
//         </>
//     )
// }

// export default Index5;





// Задачи на useCallback

// 1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку счетчик
// должен увеличиваться на 1. Используйте useCallback, чтобы оптимизировать обработчик
// клика на кнопке.


// function Index5(){
//     const [a, b] = useState(0);

//     const findNum = useCallback(() => {
//         b(a + 1)
//     }, [a])
//     return(
//         <>
//         <button onClick={findNum}>Up..</button>

//         <p>{a}</p>
//         </>
//     )
// }

// export default Index5;


// 2. Создайте компонент, который отображает список элементов с кнопками "Удалить". При
// нажатии на кнопку элемент должен быть удален из списка. Используйте useCallback, чтобы
// оптимизировать функцию удаления элемента.



// function Index5(){
//     const [a, b] = useState([1, 2, 3, 4]);

//     const delEl = useCallback((el) => {
//         b(a.filter((num, index) => num !== el))
//     }, [a]);
//     return(
//         <>
//         {a.map((el, index) => <p>{el}
//             <button onClick={() => delEl(el)}>Delete</button>
//         </p>)}
        
//         </>
//     )
// }

// export default Index5;

// 3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике на
// кнопку статус компонента должен меняться между "Активный" и "Неактивный".
// Используйте useCallback, чтобы оптимизировать функцию изменения статуса.

// function Index5(){
//     const [a, b] = useState('Active');

//     const change = useCallback(() => {
//         a === 'Active' ? b('Block') : b('Active')
//     })
//     return(
//         <>
//         <button onClick={change}>Change</button>

//         <p>{a}</p>
//         </>
//     )
// }

// export default Index5;


// 4. Создайте компонент, который предоставляет пользователю выбор цвета из списка. При
// выборе цвета, компонент должен отображать выбранный цвет на странице. Используйте
// useCallback, чтобы оптимизировать функцию выбора цвета.

// function Index5(){
//     const arrColor = ['red', 'blue', 'green'];
//     const [a, b] = useState('');

//     const showColor = useCallback((e) => {
//         b(e.target.textContent);
//     })
//     return(
//         <>
//         <div>{arrColor.map((el) => <p onClick={showColor}>{el}</p>)}</div>
//         <h1 style={{color: a}}>Text</h1>
//         </>
//     )
// }

// export default Index5;


// 5. Создайте компонент, который позволяет пользователю добавлять и удалять элементы из
// списка. Используйте useCallback, чтобы оптимизировать функции добавления и удаления
// элементов.

// function Index5(){
//     const [a, b] = useState([1, 2, 3, 4, 5]);

//     const [inpV, fInpV] = useState();

//     const addEl = useCallback(() => {
//         b([...a, inpV])
//     })

//     const delEl = useCallback((num) => {
//         b(a.filter((el) => el !== num))
//     }, [a]);

//     return(
//         <>
//         {a.map((el) => <li>{el}
//             <button onClick={() => delEl(el)}>Delete</button>
//         </li>
                        
//     )}

//     <input onChange={(e) => {
//         fInpV(e.target.value)
//     }}></input>
//     <button onClick={addEl}>Add</button>
//         </>
//     )
// }

// export default Index5;



// ЗАДАЧИ НА USEEFFECT

// 1. Создайте компонент счетчика, который увеличивает значение счетчика на 1 каждую секунду
// с использованием useEffect.

// function Index5(){
//     const [a, b] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => b(a + 1), 1000);
//         return () => clearInterval(timer)
//     }, [a])
//     return(
//         <>
//         <p>{a}</p>
//         </>
//     )
// }

// export default Index5;


// 2. Создайте компонент, который выполняет запрос к API https://api.ipify.org/?format=json и
// отображает полученные данные в заголовок.

// function Index5(){
//     const [a, b] = useState('');

//     async function getData() {
//         const response = await axios.get('https://api.ipify.org/?format=json');
//         console.log(response.data.ip);

//         b(response.data.ip)
        
//     }

//     useEffect(() => {
//         getData()
//     })
//     return(
//         <>
//         <h1>{a}</h1>
//         </>
//     )
// }
// export default Index5;


// 3. Создайте компонент, который отображает текущее время и обновляет его каждую секунду.

// function Index5(){
//     const data = new Date();
//     const time = data.toLocaleDateString();

//     const [a, b] = useState(time);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             const data = new Date();
//             b(data.toLocaleTimeString());
//             return () => clearInterval(timer);
//         }, 1000)
//     })
//     return(
//         <>
//         <p>{a}</p>
//         </>
//     )
// }

// export default Index5;


// 4. Создайте компонент, который при первичном рендеринге отправляет запрос к API
// http://numbersapi.com/:id с рандомно сгенерированным числом и отображает результат в
// консоль.

function Index5(){
    async function getData() {
        const response = await axios.get(`http://numbersapi.com/${Math.floor(Math.random() * 10)}`)
        console.log(response.data);
        
    }

    useEffect(() => {
        getData()
    }, [])
    return(
        <>
        
        </>
    )
}

export default Index5;