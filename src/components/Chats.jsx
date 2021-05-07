import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from "./index" //{}をつけることで名前付きimportになる

const useStyles = makeStyles(() => (
  createStyles({
    "chats": {
      height: 400, //なぜ400なのかはチャットと回答の一覧の高さを引いた数が400になる。そうすることでぴったり
      padding: '0',
      overflow: 'auto' //400px以上の要素を超えた時にスクロールバーが出てくるようなcss
    }
  })
));

const Chats = (props) => { //初期のチャットの状態を渡すためにporpsを

  const classes = useStyles(); //上で指定しているmaterial UIのstyleを使うメソッドを定数にしている
  return(
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index) => { //props.chatsは配列なので配列に対してはmapメソッド使う
        return <Chat text={chat.text} type={chat.type} key={index.toString()}/> //Chatに対してtextのchatを 配列に対してはkeyを持たせないといけない
      })}
    </List>
  )

}

export default Chats