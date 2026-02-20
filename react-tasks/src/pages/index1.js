// 1. На входе статичный массив чисел. Отобразить на странице только чётные числа, каждое в
// теге <li>


// function Index1(){
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const res = arr.filter((el) => el % 2 == 0).map((el) => <li>{el}</li>)
//     return(
//         <div>
//             <ul>{res}</ul>
//         </div>
//     )
// }

// export default Index1

// 2. На входе статичный массив строк. Отфильтровать и отобразить только те строки, длина
// которых больше 5 символов. Вывести в виде списка.


// function Index1(){
//     const arr = ['hi', 'good!', 'morning'];
//     const res = arr.filter((el) => el.length > 5).map((el) => <li>{el}</li>)
//     return(
//         <div>
//             <ul>{res}</ul>
//         </div>
//     )
// }
// export default Index1

// 3. На входе массив чисел. Отобразить сумму всех чисел на странице в теге <h3>.

// function Index1(){
//     const arr = [1, 2, 3, 4]
//     const res = arr.reduce((sum, el) => (sum + el), 0)
//     return(
//         <div>
//             <h3>{res}</h3>
//         </div>
//     )
// }
// export default Index1


// 4. На входе массив строк. Преобразовать каждую строку в верхний регистр и отобразить на
// странице.

// function Index1(){
//     const arr = ['hi', 'hello', 'good']
//     const res = arr.map((el) => el.toUpperCase())
//     return(
//         <div>
//             {res.map((el) => <li>{el}</li>)}
//         </div>
//     )
// }

// export default Index1

// 5. На входе массив булевых значений [true, false, true...]. Отобразить на странице в виде
// (если true) и (если false).

// function Index1(){
//     const arr = [true, false, true, false];

//     return(
//         <div>{arr.map((el) => (el == true ? <li>+</li> : <li>-</li>))}</div>
//     )
// }

// export default Index1

// 6. На входе массив дат в формате строки. Отобразить только те, которые позже 2020 года.

// function Index1(){
//     const arr = [2020, 2025, 2022, 2019];
//     const res = arr.filter((el) => el > 2020).map((el) => <li>{el}</li>)
//     return(
//         <div>
//             {res}
//         </div>
//     )
// }

// export default Index1;

// 7. На входе массив из строк и чисел. Отобразить строки с классом text, а числа с классом
// number.

// function Index1(){
//     const arr = [1, 'two', 3, 'four'];
//     const res = arr.map((el) => typeof el == 'string' ? <li className="text">{el}</li> : <li className="number">{el}</li>)
//     return(
//         <div>{res}</div>
//     )
// }

// export default Index1;

// 8. На входе массив имён. Отобразить приветствие для каждого имени в формате: "Привет,
// [имя]!" в теге <p>.

// function Index1(){
//     const arr = ['Nastya', 'Liza', 'Mark'];
//     const res = arr.map((el) => <p>Привет {el}!</p>)
//     return(
//         <div>{res}</div>
//     )
// }

// export default Index1;

// 9. На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и
// отобразить на странице

// function Index1(){
//     const arr = [1, 2, 3, 4]
//     const res = arr.map((el) => <li>{el ** 2}</li>)
//     return(
//         <div>{res}</div>
//     )
// }
// export default Index1;


// 10. На входе статичный массив чисел. Ваша задача найти корень каждого числа и отобразить на
// странице в виде h1

// function Index1(){
//     const arr = [1, 2, 3, 4, 5, 6];
//     const res = arr.map((el) => <h1>{Math.sqrt(el)}</h1>)
//     return(
//         <div>{res}</div>
//     )
// }

// export default Index1;


// 11. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на странице
// только те строки, которые содержат знак @

// function Index1(){
//     const arr = ['hi@', 'text', 'good@'];
//     const res = arr.filter((el) => el.includes('@')).map((el) => <li>{el}</li>)
//     return(
//         <div>{res}</div>
//     )
// }
// export default Index1;

// 12. На входе статичный массив строк. Ваша задача отобразить на странице все строки массива,
// а также картинку. Каждая итерация будет возвращать
// <div>
//  <p>el</p>
//  <img/>
// </div>

// import img from './i.webp';

// function Index1(){
//     const arr = ['hi', 'good'];
//     const res = arr.map((el) => <div>
//             <p>{el}</p>
//             <img src={img}/>
//         </div>)
//     return(
//         <div>
//             {res}
//         </div>
//     )
// }

// export default Index1


// 13. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае
// числа четность и нечетность текущего значения в параграфе, в случае строки отобразить
// саму строку в параграфе

// function Index1(){
//     const arr = [2, 'hi', 4, 5];
//     const res = arr.map((el) => typeof el == 'number' && el % 2 == 0 ? <p>Четное</p> : typeof el == 'number' && el % 2 != 0 ? <p>Нечетное</p> : <p>{el}</p>)
//     return(
//         <div>{res}</div>
//     )
// }
// export default Index1;

// 14. На входе массив из объектов. каждый объект содержит title с названием фильма и
// description с кратким описанием фильма. В h1 отобразить каждый title, в p - description

// function Index1(){
//     const obj = [{title: 'film1', description: 'desc1'}, {title: 'film2', description: 'desc2'}, {title: 'film3', description: 'desc3'}];
//     const res = obj.map((el) => <div><h1>{el.title}</h1>  <p>{el.description}</p></div>)
//     return(
//         <div>
//             {res}
//         </div>
//     )
// }
// export default Index1;

// 15. На входе массив объектов { city: string, population: number }. Отобразить города, где
// население больше 1 млн.

// function Index1(){
//     const obj = [{ city: 'city1', population: 200000 }, { city: 'city2', population: 2000000 }, { city: 'city3', population: 100000 }, { city: 'city4', population: 100000000 }];
//     const res = obj.filter((el) => el.population > 1000000)
//     return(
//         <div>
//             {res.map((el) => <div> <h1>{el.city}</h1> <p>{el.population}</p> </div>)}
//         </div>
//     )
// }
// export default Index1;

// 16. На входе массив чисел. Отобразить числа, которые делятся на 3 без остатка, в теге <span>.

// function Index1(){
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const res = arr.filter((el) => el % 3 === 0).map((el) => <span>{el}</span>)
//     return(
//         <div>{res}</div>
//     )
// }
// export default Index1;


// 17. На входе массив строк. Если строка содержит слово "JS" — отобразить её, иначе пропустить.

// function Index1(){
//     const arr = ['const', 'JSX', 'learnJS'];
//     const res = arr.filter((el) => el.includes('JS')).map((el) => <p>{el}</p>)
//     return(
//         <div>
//             {res}
//         </div>
//     )
// }
// export default Index1;


// 18. На входе массив объектов { task: string, completed: boolean }. Отобразить все задачи.
// Выполненные — зачёркнутыми.

// function Index1(){
//     const obj = [{ task: 'task1', completed: true },
//         { task: 'task2', completed: false },
//         { task: 'task3', completed: false },
//         { task: 'task4', completed: true }
//     ];
//     const res = obj.map((el) => el.completed === true ? (<li style={{textDecoration: 'line-through'}}>{el.task}</li>) : <li>{el.task}</li>)
//     return(
//         <div>{res}</div>
//     )
// }
// export default Index1;


// 19. На входе массив чисел. Каждое число возвести в куб и отобразить на странице в <h4>.

// function Index1(){
//     const arr = [1, 2, 3, 4];
//     const res = arr.map((el) => <h4>{Math.pow(el, 3)}</h4>)
//     return(
//         <div>{res}</div>
//     )
// }
// export default Index1;

// 20. На входе массив строк. Строки могут быть в разном регистре. Отобразить только уникальные
// строки в нижнем регистре, отсортированные по алфавиту.

// function Index1(){
//     const arr =  ['hello', 'HelLO', 'hi', 'GooD']
    
//     const newArr = [...new Set(arr.map((el) => el.toLowerCase()))].sort();
//     return(
//         <div>{newArr.map((el) => <p>{el}</p>)}</div>
//     )
// }
// export default Index1;


// 22. На входе массив чисел. Разбить их на два массива: положительные и отрицательные.
// Отобразить оба списка на странице.

// function Index1(){
//     const arr =[1, -2, 3, -4, 5, -6, 7, 8, -9];
//     const plus = [];
//     const minus = [];
//     const findNum = arr.map((el) => el > 0 ? plus.push(el) : minus.push(el));
//     const res1 = plus.map((el) => <li>{el}</li>)
//     const res2 = minus.map((el) => <li>{el}</li>)
//     return(
//         <div>
//             <ul>{res1}</ul>
//             <br></br>
//             <ul>{res2}</ul>
//         </div>
//     )
// }
// export default Index1;


// 23. На входе массив дат (строк). Отобразить ближайшую к сегодняшнему дню дату.
// Использовать new Date() и сравнение по времени.

// function Index1(){
//     const dates = ['2025-01-10', '2025-02-01', '2024-12-20'];
//     const today = new Date();

//     let dataClos = dates[0];
//     let minDates = Math.abs(new Date(dates[0]) - today);

//     for(let el of dates){
//         const numDate = Math.abs(new Date(el) - today);
//         if(numDate < minDates){
//             minDates = numDate;
//             dataClos = el;
//         }
//     }
//     const res = Math.round(minDates / (1000 * 60 * 60 * 24)); - для разницы
//     return(
//         <div>
//             {dataClos}
//         </div>
//     )
// }
// export default Index1;