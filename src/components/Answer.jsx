import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

}));


const Answer = (props) => {
  // const classes = useStyles();

  return ( //選択された時に次どの質問に行くのかというnextIdというキーがある
    <Button variant="contained" color="primary" onClick={() => props.select(props.content,props.nextId)}> 
      {props.content}
    </Button>
  )
}

export default Answer 