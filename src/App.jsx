import React from 'react';
import defaultDataset from "./dataset"; 
import './aseets/styles/style.css';
import {Answer, AnswersList, Chats} from "./components/index"; // エントリポイントを作っているのでimportするときに毎回追加する
import FormDialog from "./components/Forms/FormDialog"

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

    this.selectAnswer = this.selectAnswer.bind(this) //bindメソッド this.selectAnswerがAnswersListコンポーネントで使えるようになる
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)

    
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
        setTimeout(() => 
        this.displayNextQuestion(nextQuestionId), 500 //これがあることでユーザーから選択されたらまた上にあるdisplayNextQuestion関数が実行される
        )
        break;

      case (nextQuestionId === 'contact'): //nextQuestionIdがdataset.jsの'contact'場合にフォームを表示させるようにしている。
        this.handleClickOpen()
        break;



      case(/^https:*/.test(nextQuestionId)): //datasetの中身がhttps:から始まる質問かtest()メソッドを用いて確認している
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '__blank'; //新しいタブを作って外部ページを表示させるプロパティ
        a.click();
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

        setTimeout(() => //次の質問の回答時間の調整するメソッド 時間はm秒
          this.displayNextQuestion(nextQuestionId), 1000
        )
        break;
    }
  }

  handleClickOpen = () => { //formダイアログの表示
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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


  componentDidUpdate(){
    //最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定する
    const scrollArea = document.getElementById('scroll-area')
    if(scrollArea) { //scrollHeightは見えている部分以外の高さの表示
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
          <FormDialog open={this.state.open} handleClose={this.handleClose}/> 
          
        </div>
      </section>
      //FormDialogの中ではhandleCloseの関数を使いたいのでhandleClose={this.handleClose}  handleCloseというporpsにbindしたthis.handleClose関数を渡してあげる
    );
  }
}

//コールバック関数bind()

// constructor(porps) {
//   super(porps);
//   this.selectAnswer = this.selectAnswer.bind(this)
// }

// selectAnswer = (selectAnswer, nextQuestionId) => {
//   //処理の記述
// };

// render() {
//   return (
//     <AnswerList 
//       answers={this.state.answers} 
//       select={this.selectAnswer}
//     />
//   )
// }

// 上記のselectAnswerを<AnswersList/>にpropsとして渡したいときにconstructorのなかでbind()という
// メソッドを使う。
// なぜ使うのか、bindをしないと毎回renderされるたびにthis.selectAnswerが生成されてしまう。bindしてあげると一回生成されたコールバック関数はrenderしたとしても新しく生成されない

