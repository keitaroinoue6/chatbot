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
      text: this.state.dataset[nextQuestionId].nextQuestionId, //現在のデータセットの選択されたQuestionIdのquestion
      type:'questio'
    })

    this.setState({
      chats: chats //新しく配列に加えたchatsをsetStateで更新してあげる
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) { // 条件分岐のパターンが４ぐらいできるのでswitch文にする
      case (nextQuestionId === 'init'):
        break;
      default: 
        const initAnswers = initDataset.answers; //これだけだと回答しかチャットに追加されない
        const chat = {
          text: selectedAnswer, 
          type: 'answer' 
        }
        
        const chats = this.state.chats; //現在のchatsの状態の取得
        chats.push(chat) //空っぽの配列に対してpush(追加)している
      
        this.setState({
          chats: chats
        })
        this.setState({
          answers: initAnswers
        })
        break;
    }
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    // const chat = {
    //   text: initDataset.question, //question: "こんにちは！🐯トラハックへのご用件はなんでしょうか？",  この値のキーが取ることができる
    //   type: 'question' // questionの文字列を表示
    // }
    
    // const chats = this.state.chats; //現在のchatsの状態の取得
    // chats.push(chat) //空っぽの配列に対してpush(追加)している
  
    // this.setState({
    //   chats: chats
    // })
    // this.setState({
    //   answers: initAnswers
    // })
  }

  componentDidMount() { //コンポーネントが初期化して最初のレンダーが終わった時に何かしら副作用がある処理をしたい時にcomponentDidMountを使う
    this.initChats();
    this.initAnswer();
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


