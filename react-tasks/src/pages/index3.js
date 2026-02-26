import { useState } from "react";
import {Button, TextField} from '@mui/material';


// 1. На странице есть кнопка и текст. При каждом нажатии на кнопку число в тексте
// увеличивается на один. useState — хранит число (количество кликов).

// function Index3(){
//     const [text, textFun] = useState(0);
//     return(
//         <>
//         <Button variant="outlined" onClick={() => {
//             textFun(text + 1)
//         }}>Add +1</Button>
//         <p>This number: {text}</p>
//         </>
//     )
// }

// export default Index3;

// 2. На странице есть кнопка и текст. При нажатии на кнопку текст меняется с «Привет» на
// «Пока» и обратно. useState — хранит строку («Привет» или «Пока»).

// function Index3(){
//     const [text, textFun] = useState('Привет');
//     return(
//         <>
//         <Button variant="outlined" onClick={() => {
//             text === 'Привет' ? textFun('Пока') : textFun('Привет')
//         }}>Change</Button>
//         <p>{text}</p>
//         </>
//     )
// }

// export default Index3;


// 3. На странице есть поле для ввода текста и абзац. Всё, что вводится в поле, сразу
// отображается в абзаце. useState — хранит строку с текстом из поля.

// function Index3(){
//     const [text, textFun] = useState('');
//     return(
//         <>
//         <TextField id="standard-basic" label="Standard" variant="standard" value={text} onChange={(event) => {
//             textFun(event.target.value)
//         }}/>
//         <p>{text}</p>
//         </>
//     )
// }

// export default Index3;


// 4. На странице есть кнопка и абзац с текстом. При нажатии на кнопку текст скрывается, при
// повторном нажатии снова появляется. useState — хранит логическое значение (true/false).


// function Index3(){
//     const [text, textFun] = useState(true);
//     return(
//         <>
//         <Button variant="outlined" onClick={(e) => {
//             if(text === true){
//                 textFun(false)
//                 e.target.textContent = 'Скрыть'
//             } else{
//                 textFun(true)
//                 e.target.textContent = 'Показать'
//             }
//         }}>Показать</Button>
//         <p style={{display: text === true ? 'none' : 'block'}}>Description</p>
//         </>
//     )
// }

// export default Index3;


// 5. На странице есть кнопка и абзац. При нажатии на кнопку цвет текста меняется (например,
// с чёрного на красный). useState — хранит текущий цвет текста.

// function Index3(){
//     const [text, textFun] = useState('black');
//     return(
//         <>
//         <Button variant="outlined" onClick={() => {
//             textFun('red')
//         }}>Change color</Button>
//         <p style={{color: text}}>Description</p>
//         </>
//     )
// }

// export default Index3;


// 6. На странице есть кнопка и список. При нажатии в список добавляется новый элемент с
// текстом NEW. useState — хранит массив строк.


// function Index3(){
//     const [a, b] = useState([]);
//     return(
//         <>
//         <Button variant="outlined" onClick={() => {
//             b([...a, 'NEW'])
//         }}>add</Button>
//         <ul>
//         {a.map((el) => (
//             <li>{el}</li>
//         ))}
//         </ul>
//         </>
//     )
// }

// export default Index3;


// 7. На странице есть список и кнопка. При нажатии удаляется последний элемент из списка.
// useState — хранит массив элементов.

// function Index3(){
//     const [a, b] = useState(['el1', 'el2',  'el3', 'el4']);
//     return(
//         <>
//         <Button variant="outlined" onClick={() => {
//             b(a.slice(0, -1));
//         }}>delete</Button>
//         <ul>
//         {a.map((el) => (
//             <li>{el}</li>
//         ))}
//         </ul>
//         </>
//     )
// }

// export default Index3;


// 8. На странице есть картинка и две кнопки («Следующая» и «Предыдущая»). Кнопки
// переключают картинки по массиву (5 шт). useState — хранит индекс текущей картинки.

import img1  from '../images/i.webp';
import img2  from '../images/i (1).webp';
import img3  from '../images/i (2).webp';
import img4  from '../images/i (3).webp';
import img5  from '../images/i (4).webp';

function Index3(){
    const arr = [img1, img2, img3, img4, img5];
    const [a, b] = useState(0);

    return(
        <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
        <Button variant="outlined" onClick={() => {
            a === 0 ? b(4) : b(a - 1)
        }}>Предыдущая</Button>
        <img src={arr[a]}></img>
        <Button variant="outlined" onClick={() => {
            a === 4 ? b(0) : b(a + 1)
        }}>Следующая</Button>
        </div>
    )
}

export default Index3;