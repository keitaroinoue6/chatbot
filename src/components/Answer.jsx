import React from 'react'
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ( //ボタンのstyle
  createStyles({
    "button": {
      borderColor: "red",
      color: "FFB549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#FFB549",
        color: "#fff"
      }
    }
  })
));


const Answer = (props) => {
  const classes = useStyles();

  return ( //選択された時に次どの質問に行くのかというnextIdというキーがある
    <Button
      className={classes.button} //上記のcreateStylesの箇所で
      variant="outlined" onClick={() => props.select(props.content,props.nextId)}
    > 
      {props.content}
    </Button>
  )
}

export default Answer 