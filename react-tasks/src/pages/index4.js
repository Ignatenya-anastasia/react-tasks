// 1. Сделай компонент со счётчиком. Каждый раз, когда пользователь нажимает кнопку, значение
// счётчика должно отобрадаться в console.log внутри useEffeect

import { useEffect, useState } from "react";

// function Index4(){
//     const [a, b] = useState(0);
//     useEffect(() => {
//         console.log(a);
        
//     })

//     return(
//         <>
//         <button onClick={() => {
//             b(a + 1)
//         }}>Click</button>
//         <p>{a}</p>
//         </>
//     )
// }

// export default Index4;

// 2. Сделай компонент, который запускает таймер (setInterval) и каждую секунду увеличивает число на
// экране.

// function Index4(){
//     const [a, b] = useState(0);
//     useEffect(() => {
//         const timeIn = setInterval(() => {
//             b(a + 1)
//         }, 1000);
//         return () => clearInterval(timeIn)
//     });

//     return(
//         <>
//         <p>{a}</p>
//         </>
//     )
// }

// // export default Index4;




// 3. При монтировании компонента сделай fetch на какой-нибудь API (например,
// https://jsonplaceholder.typicode.com/posts/1) и выведи заголовок поста. 

// function Index4(){
//     const [a, b] = useState();
//     async function show() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json()

//         b(data.title)
//     }

//     useEffect(() => {
//         show()
//     })

//     return(
//         <>
//         <p>{a}</p>
//         </>
//     )
// }

// export default Index4;


// 4. При монтировании сделай fetch на https://jsonplaceholder.typicode.com/users и отобрази список имён
// пользователей (name).


// function Index4(){
//     const [a, b] = useState([]);
//     async function show() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json()

//         b(data)
//     }

//     useEffect(() => {
//         show()
//     })

//     return(
//         <>
//         <ul>
//             {a.map((el) => (<li>{el.name}</li>))}
//         </ul>
//         </>
//     )
// }

// export default Index4;


// 5. Сделай компонент, который каждые 10 секунд загружает случайный пост
// (https://jsonplaceholder.typicode.com/posts/{случайное число}) и отображает его заголовок.


// function Index4(){
//     const [a, b] = useState({});
//     async function show() {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 100)}`);
//         const data = await response.json()

//         b(data)
//     }

//     useEffect(() => {
//         const timIn = setInterval(() => {
//             show()
//         }, 1000);
//         return () => clearInterval(timIn);
//     })

//     return(
//         <>
//         <ul>
//             {a.title}
//         </ul>
//         </>
//     )
// }

// export default Index4;


import axios from 'axios'

// 1. При первичном рендеринге загрузите данные пользователя с https://jsonplaceholder.typicode.com/users/1 .
// Отобразите информацию о пользователе в виде карточки. Внутри useState хранится объект пользователя с
// сервера. Обработайте возможные ошибки при обращении к серверу.


// function Index4(){
//     const [a, b] = useState({});
//     async function show() {
//         const data = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    
//         b(data.data)
//         console.log(data.data);
        
//     }

//     useEffect(() => {
//         show()
//     }, [])
//     return(
//         <>
//         <p>{a.name}</p>
//         <p>{a.username}</p>
//         <p>{a.email}</p>
//         </>
//     )
// }
// export default Index4;



// 2. При первичном рендеринге загрузите список постов с https://jsonplaceholder.typicode.com/posts .
// Отобразите первые 10 постов в виде списка. Внутри useState хранится массив постов с сервера


// function Index4(){
//     const [a, b] = useState([]);
//     async function show() {
//         const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
//         b(data.data)
//         console.log(data.data);
//     }

//     useEffect(() => {
//         show()
//     }, [])
    
//     return(
//         <>
//         <ul>
//             {a.map((el, index) => (index < 10 ? <li>{el.title}</li> : <></>))}
//         </ul>
//         </>
//     )
// }
// export default Index4;

// 3. На странице должны отображаться инпут и div c ответом сервера. При первичном рендеринге отправить
// запрос на https://jsonplaceholder.typicode.com/albums?title_like=${query}. При вводе данных в инпут повторно
// отправляйте запрос. Внутри useState хранится массив найденных альбомов. Отобразите результаты поиска
// в виде сетки карточек. (В текущей задаче useEffect вызывает асинхронную функцию не только при
// первичном рендеринге, но и при изменении состояния значения инпута)



// function Index4(){
//     const [a, b] = useState();
//     const [serv, fServe] = useState([]);

//     async function show() {
//         const data = await axios.get('https://jsonplaceholder.typicode.com/albums?title_like=${a}')
//         fServe(data.data)
//         console.log(data);
//     }

//     useEffect(() => {
//         show();
//     })
    
//     return(
//         <>
//         <input onChange={(e) => {
//             b(e.target.value)
//         }}></input>
//         <div>
//             {serv.map((el) => {
//                 <div>{el.title}</div>
//             })}
//         </div>
//         </>
//     )
// }
// export default Index4;



// 4. При первичном рендеринге отправить GET запрос по адресу https://api.ipify.org/?format=json . Результат
// сервера отобразить в заголовок

function Index4(){
    const [a, b] = useState();

    async function show() {
        const data = await axios.get("https://api.ipify.org/?format=json")
        b(data.data)
        console.log(data.data);
    }

    useEffect(() => {
        show();
    })
    
    return(
        <>
        {a.ip}
        </>
    )
}
export default Index4;