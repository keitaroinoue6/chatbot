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
  }

  // 上記のstateを管理するfunciton
  inputName = (event) => { //textinputのonChangeイベントに作用して動いていくので引数にeventをつける

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
          label={} multiline={} rows={}
          value={} type={} onChange={}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.props.handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={this.props.handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
    )
  }
}