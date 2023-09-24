import c from './Compilation.module.css';
import { useParams } from 'react-router-dom';
export default function Compilation(){
    const params = useParams();
    return(
        <div className={c.wrapper}>
            Подборка {params.id}
        </div>
    )
}