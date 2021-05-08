import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (porps) => {
  return(
    <TextField
      fullWidth={true} // trueだと幅いっぱいのtextfiledにする
      label={props.label} 
    />
  )
}