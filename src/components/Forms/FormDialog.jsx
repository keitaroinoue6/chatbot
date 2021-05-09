import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from "./TextInput";

export default class FormDialog extends React.Component{
  constructor(props){
    super(props);
    this.state = { //フォームの中でstateとして管理しないといけないので
      name:"",
      email:"",
      discription:""
    }

    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputDiscription = this.inputDiscription.bind(this)
  }

  // 上記のstateを管理するfunciton
  inputName = (event) => { //textinputのonChangeイベントに作用して動いていくので引数にeventをつける
    this.setState({name: event.target.value}) //onchangeイベントでnameを管理しているtextfieldに入力された値が随時stateを更新する
  }
  inputEmail = (event) => { 
    this.setState({email: event.target.value})
  }
  inputDiscription = (event) => {
    this.setState({discription: event.target.value})
  }

  submitForm = () => {
    const name = this.state.name //それぞれを定数化
    const email = this.state.email
    const discription = this.state.discription

    


  }

  render() {
    return(
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
      <DialogContent>
        <TextInput //TextInputコンポーネントを追加
          label={"お名前(必須)"} multiline={false} rows={1}
          value={this.state.name} type={"text"} onChange={this.inputName}
        />
        <TextInput //TextInputコンポーネントを追加
          label={"メールアドレス(必須)"} multiline={false} rows={1}
          value={this.state.email} type={"email"} onChange={this.inputEmail}
        />
        <TextInput //TextInputコンポーネントを追加
          label={"お問い合わせ内容"} multiline={true} rows={5}
          value={this.state.discription} type={"text"} onChange={this.inputDiscription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.props.handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={this.props.submitForm} color="primary" autoFocus>
          送信する
        </Button>
      </DialogActions>
    </Dialog>
    )
  }
}