import c from './Notfound.module.css';
export default function NotFoundPage(){
    return(
        <div className={c.container}>
            <div className={c.error}>Error 404</div>
            <div className={c.text}>Page was not found</div>
        </div>
    )
}