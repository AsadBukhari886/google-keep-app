import React from 'react';
// import CopyrightIcon from '@material-ui/icons/Copyright';


export default function App(){
    let year=new Date().getFullYear()
    return <>
    <hr/>
    <footer className=' text-center '>
        copyright © {year}
    </footer>

    </>
}