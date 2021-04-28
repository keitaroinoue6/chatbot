import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from "./index" //{}をつけることで名前付きimportになる

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Chats = (props) => { //初期のチャットの状態を渡すためにporpsを
  const classes = useStyles(); //上で指定しているmaterial UIのstyleを使うメソッドを定数にしている
  return(
    <List className={classes.root}>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </List>
  )

}

export default Chats