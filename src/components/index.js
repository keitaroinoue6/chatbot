// エントリポイントというファイル
// compomentsファイルの中に複数のファイルがあったとしてもindex.jsを参照すればその複数のコンポーネントそれぞれをここからexportしていくので
// このindex.jsを参照すればコンポーネントフォルダにあるモノたちをimportできる状態にできる
// そういうのをエントリポイントという
export {default as AnswersList} from "./AnswersList"