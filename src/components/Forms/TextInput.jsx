import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (porps) => {
  return(
    <TextField
      fullWidth={true} // trueだと幅いっぱいのtextfiledにする
      label={props.label} 
      margin={"dence"}
      multiline={props.multiline} //一行の問い合わせの場合はfalse 複数の場合はにする
      row={props.rows} // 複数行の場合は数値を設定するとその数字分のテキストフィールドになる
      value={props.value}
      type={props.type} //テキストなのかe-mailなのかなどここで選択できる
      onChange={porps.onChange}
    />
  )
}