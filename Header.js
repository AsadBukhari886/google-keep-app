import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


export default function App(){
    return <>
 <Typography/>
   <Breadcrumbs aria-label="breadcrumb" >
      <Link color="inherit" href="/" >
        GOOGLE
      </Link>
      <Link color="inherit" href="/getting-started/installation/" >
        KEEP
      </Link>
      <Typography color="textPrimary">APP </Typography>
    </Breadcrumbs>
   <Link/>
    </>
}