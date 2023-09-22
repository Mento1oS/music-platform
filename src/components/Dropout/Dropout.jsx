import c from './Dropout.module.css'
export default function Dropout(props){
    let nextId=0;
    return(
        <div className={c.dropout__wrapper}>
            <ul className={c.dropout__elements}>
                {props.data.map(element => (<li key={nextId++} className={c.dropout__elem}>{element}</li>)) }
            </ul>
        </div>
    )
}