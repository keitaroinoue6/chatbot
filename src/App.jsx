import React from 'react';
import defaultDataset from "./dataset"; 
import './aseets/styles/style.css';
import {AnswersList, Chats} from "./components/index"; // エントリポイントを作っているのでimportするときに毎回追加する
import {Char} from "./components/Chat"

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
    const chat = {
      text: initDataset.question, //question: "こんにちは！🐯トラハックへのご用件はなんでしょうか？",が取れる
      type: 'question' // questionの文字列を表示
    }

    this.setState({
      answers: initAnswers
    })
  }

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      chats: initAnswers
    })
  }

  componentDidMount() { //コンポーネントが初期化して最初のレンダーが終わった時に何かしら副作用がある処理をしたい時にcomponentDidMountを使う
    this.initAnswer()
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers}/>
        </div>
      </section>
    );
  }
}


