import { useContext } from "react";
import GLOBAL from "../context";

// function Index6(){
//     const {id, name, age} = useContext(GLOBAL);
//     return(
//         <>
//         <p>{id}</p>
//         <p>{`Пользователь: ${name} лет: ${age}`}</p>
//         </>
//     )
// }
// export default Index6;


// function Index6(){
//     const dictionary = {ru: 'Привет', en: 'Hello', bl: 'Добры дзень'}
//     const {lang, setLang} = useContext(GLOBAL);
//     return(
//         <>
//         <button onClick={() => setLang('ru')}>ru</button>
//         <button onClick={() => setLang('en')}>en</button>
//         <button onClick={() => setLang('bl')}>bl</button>

//         <p>{dictionary[lang]}</p>
//         </>
//     )
// }
// export default Index6;


// function Index6(){
//     const {temperature, speed, sunny} = useContext(GLOBAL);
//     return(
//         <>
//         <p>{`Температура: ${temperature}`}</p>
//         <p>{`Скорость ветра: ${speed}`}</p>
//         <p>{`Солнечность: ${sunny}`}</p>
//         </>
//     )
// }
// export default Index6;



function Index6(){
    const {style, setStyle} = useContext(GLOBAL);
    return(
        <>
        <div style={{backgroundColor: style === true ? 'white' : 'gray'}}>
            <button onClick={() => setStyle(true)}>White</button>
            <button onClick={() => setStyle(false)}>Dark</button>
            <p>Hello</p>
            <p>Random text</p>
        </div>
        </>
    )
}
export default Index6;