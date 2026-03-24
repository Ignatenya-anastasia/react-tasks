// 1. Создайте компонент счетчика, который может увеличивать, уменьшать, сбрасывать
// значение при нажатии на соответствующие кнопки.

import { useReducer, useState } from "react";

// const countNum = (count, action) => {
//         switch(action){
//             case 'plus':
//                 return count + 1;
//             case 'minus':
//                 return count - 1;
//                 case 'def':
//                     return  0;
//                     default: 
//                     return;
//         }
//     }


// function Index7(){
    
//     const [count, setCount] = useReducer(countNum, 0);

//     return(
//         <>
//         <p>{count}</p>
//         <button onClick={() => setCount('plus')}>plus</button>
//         <button onClick={() => setCount('minus')}>minus</button>
//         <button onClick={() => setCount('def')}>default</button>
        
//         </>
//     )
// }

// export default Index7;


// 2. Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off». По клику
// на кнопку текст меняется на противоположный

// const changeBtn = (state, action) => {
// switch(action) {
//     case '1':
//         return true;
//     case '2':
//         return false;
//     default:
//         return;
// }
// }
// function Index7(){
//     const [state, setState] = useReducer(changeBtn, true)
//     return(
//         <>
//         <p>{state === true ? 'On' : 'Off'}</p>
//         <button onClick={() => state === true ? setState('2') : setState('1')}>Change</button>
//         </>
//     )
// }

// export default Index7;


// 3. Создайте компонент отслеживающий вводимое значение в input. Результат отображать в
// h1
// const inpValue = (state, obj) =>{
//     switch(obj.action){
//         case 'change':
//         return obj.date
//         default:
//             return;
//     }
    
// }

// function Index7(){
//     const  [valInp, setValInp] = useReducer(inpValue, '');
//     return(
//         <>
//         <input onChange={(e) => setValInp({action: 'change', date: e.target.value})}></input>

//         <p>{valInp}</p>
//         </>
//     )
// }

// export default Index7;


// 4. Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на кнопку ваша
// задача изменить цвет заголовка на цвет, соответствующий нажатой кнопке.

// const changeColor = (state, param) => {
//     switch(param){
//         case 'red':
//             return 'red';
//         case 'blue':
//             return 'blue';
//         case 'purple':
//             return 'purple';
//         case 'pink':
//             return 'pink';
//         default:
//             return;
//     }
// }

// function Index7(){
//     const [colorText, setColorText] = useReducer(changeColor, 'green')
//     return(
//         <>
//         <button onClick={() => setColorText('red')}>red</button>
//         <button onClick={() => setColorText('blue')}>blue</button>
//         <button onClick={() => setColorText('purple')}>purple</button>
//         <button onClick={() => setColorText('pink')}>pink</button>

//         <p style={{color: colorText}}>Text Color</p>
//         </>
//     )
// }

// export default Index7;



// 5. Создайте компонент отслеживающий вводимое значение 2 input. Посчитать сумму 2 input.
// По клику на кнопку отображать результат в консоль
const inpValue1 = (state, obj) => {
switch(obj.action){
    case 'valueInp':
        return obj.date
    default:
        return;
}
}

const inpValue2 = (state, obj) => {
switch(obj.action){
    case 'valueInp':
        return obj.date
    default:
        return;
}
}

function Index7(){
    const [inpVal1, setInpVal1] = useReducer(inpValue1, '');
    const [inpVal2, setInpVal2] = useReducer(inpValue2, '');

    return(
        <>
        <input onChange={(e) => setInpVal1({action: 'valueInp', date: e.target.value})}></input>
        <input onChange={(e) => setInpVal2({action: 'valueInp', date: e.target.value})}></input>

        <button onClick={() => console.log(+inpVal1 + +inpVal2)
        }>Click</button>
        </>
    )
}

export default Index7;