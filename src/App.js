import './App.css';

export default class App extends React.Component { //クラスコンポーネントで書く場合は最初にexport defaultを記述する
  constructor(props) {
    super(props);
    this.state = {
      amswers: [],
      chats: [],
      currentId: 'init',
      dataset: {},
      open: false
    }
  }
    render() {
      return (
        <div>

        </div>
      );
    }
}


