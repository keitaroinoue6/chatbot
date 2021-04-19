import React from 'react';
import './App.css';
import defaultDataset from "./dataset"; //datasetが使えるようにインポート

export default class App extends React.Component { //クラスコンポーネントで書く場合は最初にexport defaultを記述する
  constructor(props) {
    super(props);
    this.state = {
      amswers: [],
      chats: [],
      currentId: 'init',
      dataset: dataset, //ローカルにあるdatasetを使っていく
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


