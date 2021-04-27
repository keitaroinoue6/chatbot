// エントリポイントというファイル
// compomentsファイルの中に複数のファイルがあったとしてもindex.jsを参照すればその複数のコンポーネントそれぞれをここからexportしていくので
// このindex.jsを参照すればコンポーネントフォルダにあるモノたちをimportできる状態にできる
// そういうのをエントリポイントという
export {default as AnswersList} from "./AnswersList"
export {default as Answer} from "./Answer"
export {default as Chats} from "./Chats"
export {default as Chat} from "./Chat"
