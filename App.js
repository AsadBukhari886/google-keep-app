import React, { Fragment, useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Createnote from './Createnote.js'
import Note from './Note.js'


export default function App(){
    const [addItem, setAddItem]=useState([])

    const addNote=(note)=>{
        // alert ('I am clicked')
        
        setAddItem((preV)=>{
            return [...preV,note]
        })

        // setAddItem('')
        // console.log(note)
    }

 const onDelete=(id)=>{
     setAddItem((preV)=>
     preV.filter((curV,index)=>{
           return index !== id;}
         ) 
             
         
     )
 }
    
return <>
<Header/>
<Createnote passNote={addNote}/>
{/* <Note/> */}
{
    addItem.map((val,index)=>{
        return <Note
       key={index}
       id={index}
       title={val.title}
       content={val.content}
       deleteItem={onDelete}

        />
    })
}
<Footer/>
</>
}
// selector={onselect}