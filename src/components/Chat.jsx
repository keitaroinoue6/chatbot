import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Man from '../aseets/img/Man.png'
import Woman from '../aseets/img/Woman.png'


const Chat = (props) => {
  const isQuestion = (props.type === 'question'); //props.typeでquestionかAnswerかでquestionならisQuestionがtrueになる
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'; //これはチャットのように右から表示しているのか、左から表示しているのかのスタイル

  return(
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ?(
          <Avatar alt="icon" src={Man}/>
        ) : (
          <Avatar alt="icon" src={Woman} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
  </ListItem>

  )
}

export default Chat

//return内での条件分岐

// ifのみ
// {(list.length === 0) &&(
//   <Loading />
// )}

// if else                                   {}内はJavaScriptの世界  最初に条件式をかく  ()内に真(偽)の場合に返すJSXを記述
// {isQuestion ?(
//   <Avatar alt="icon" src={~~~} />
// ) : (
//   <Avatar alt="icon" src={~~~~}/>
// )}