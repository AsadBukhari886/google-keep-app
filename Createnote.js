import React, { useState } from 'react';
import './index.css'
// import AddIcon from '@material-ui/icons/Add';


export default function Createnote(props){
    const [note,setNote]=useState({
        title:'',
        content:''
    })

    const inputEvent=(event)=>{

        const { name,value } = event.target;

        setNote((preV)=>{
            return {
                ...preV,
                [name]:value,
            };
            
        });
        console.log(note)

    }
  
    const addEvent=()=>{
        // if(value!=''){
        props.passNote(note)
        setNote({
            title:'',
            content:''
        
        })
    }
    


    
return <>
<div className='maind'>
<input 
   type='text' 
   name='title'
   
   autoComplete="off" 
   value={note.title}
   onChange={inputEvent}/>
<button 
    type='button' 
    className='border-0'
    onClick={addEvent}
 >+</button><br/>
<textarea  
   row=''
   column=''
   name='content' 
   placeholder='description' 
   className='border-0'
   autoComplete="off"
   value={note.content}
   onChange={inputEvent}></textarea><hr/>
</div>
</>
    
}
// onClick={props.clicker}
//style={{border:'1px solid silver', marginLeft:'550px', marginRight:'600px', padding:'2px', overflow:'hidden'}}