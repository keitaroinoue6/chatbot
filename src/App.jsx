import React from 'react';
import defaultDataset from "./dataset"; 
import './aseets/styles/style.css';
import {AnswersList, Chats} from "./components/index"; // エントリポイントを作っているのでimportするときに毎回追加する
import {Chat} from "./components/Chat"

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

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question, //現在のデータセットの選択されたQuestionIdのquestion
      type:'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers, //
      chats: chats, //新しく配列に加えたchatsをsetStateで更新してあげる
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) { // 条件分岐のパターンが４ぐらいできるのでswitch文にする
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId)
        break;
      default: 
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })

        this.setState({
          chats: chats
        })

        this.displayNextQuestion(nextQuestionId) //これがあることでユーザーから選択されたらまた上にあるdisplayNextQuestion関数が実行される
        break;
    }
  }

  // initAnswer = () => {
  //   const initDataset = this.state.dataset[this.state.currentId];
  //   const initAnswers = initDataset.answers;

  //   this.setState({
  //     answers: initAnswers
  //   })
  // }



  componentDidMount() { //コンポーネントが初期化して最初のレンダーが終わった時に何かしら副作用がある処理をしたい時にcomponentDidMountを使う
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId)
    // this.initChats();
    // this.initAnswer();
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


