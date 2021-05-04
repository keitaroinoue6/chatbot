import React from 'react';
import {Answer} from  './index'

const AnswersList = (props) => { //ダミーデータを入れた方が開発効率が上がる
  return(
    <div className= "c-grid__answer">
      {props.answers.map((value, index) => { //繰り返しの構文mapメソッド。
        return <Answer content={value.content} nextId={value.nextId} key={index.toString()} select={props.select}/>//このkey以降を書かないとコンソールエラーが出てしまう>
      })}

    </div>
  )
}

export default AnswersList