import { Fragment } from 'react';
import c from './Index.module.css';
import Bar from '../Bar/Bar';
import Main from '../Main/Main';
export default function Index(props){
    return(
        <Fragment>
            <Main user={props.user} setUser={props.setUser} isToPass={props.isToPass} setIsToPass={props.setIsToPass}/>
            <Bar/>
        </Fragment>
    )
}