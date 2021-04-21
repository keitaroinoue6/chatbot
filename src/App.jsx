import React from 'react';
import defaultDataset from "./dataset"; 
import './aseets/styles/style.css';
import {AnswersList} from "./components/index";

export default class App extends React.Component { //クラスコンポーネントで書く場合は最初にexport defaultを記述する
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset, //ローカルにあるdatasetを使っていく
      open: false
    }
  }
    render() {
      return (
        <section className="c-section">
          <div className="c-box">
            <AnswersList/>
          </div>
        </section>
      );
    }
}


