import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const Chat = (props) => {
  const isQuestion = (props.type === 'question'); //props.typeでquestionかAnswerかでquestionならisQuestionがtrueになる
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'; //これはチャットのように右から表示しているのか、左から表示しているのかのスタイル

  return(
    <ListItem className={classes}>
      <ListItemAvatar>
        <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
  </ListItem>

  )
}

export default Chat