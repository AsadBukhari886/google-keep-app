import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CancelIcon from '@material-ui/icons/Cancel';



export default function Notepad(props){

    const deleteNote=()=>{
        alert('Click OK to delete')
        props.deleteItem(props.id);
    };
    
    
    return <>
    <ol>
        <CancelIcon onClick={deleteNote}/>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    </ol>
    
    </>

}