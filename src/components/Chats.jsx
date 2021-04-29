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
      {props.chats.map((chat, index) => { //props.chatsは配列なので配列に対してはmapメソッド使う
        return <Chat text={chat.text} type={chat.type} key={index.toString()}/> //Chatに対してtextのchatを 配列に対してはkeyを持たせないといけない
      })}
    </List>
  )

}

export default Chats