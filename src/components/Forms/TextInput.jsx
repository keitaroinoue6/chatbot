import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  return(
    <TextField
      fullWidth={true} // trueだと幅いっぱいのtextfiledにする
      label={props.label} 
      margin={"dence"}
      multiline={props.multiline} //一行の問い合わせの場合はfalse 複数の場合はにする
      rows={props.rows} // 複数行の場合は数値を設定するとその数字分のテキストフィールドになる
      value={props.value}
      type={props.type} //テキストなのかe-mailなのかなどここで選択できる
      onChange={props.onChange}
    />
  )
}

export default TextInput