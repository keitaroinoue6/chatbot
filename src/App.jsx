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

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers
    })
  }

  componentDidMount() { //コンポーネントが初期化して最初のレンダーが終わった時に何かしら副作用がある処理をしたい時にcomponentDidMountを使う
    this.initAnswer()
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList answers={this.state.answers}/>
        </div>
      </section>
    );
  }
}


