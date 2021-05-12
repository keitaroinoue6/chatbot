import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
admin.initializeApp(); //adminというのをinitializeApp()で初期化してあげる
const db = admin.firestore();

const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
  response.send( {
    statusCode,
    body: JSON.stringify(body)
  })
}

export const addDataset = functions.https.onRequest(async(req: any, res: any) => { //非同期処理を使いたいのでasyncを書いておく
  if(req.method !== 'POST'){ //requestのメソッドがポストではなかったらerrorコードを返す
    sendResponse(res,405,{error: 'Invalid Request'})
  } else {
    const  dataset = req.body
    for (const key of Object.keys(dataset)){ //JSON形式のデータセットはオブジェクト型なのでそのまま配列で渡せない。まずはdatasetのkeyを取り出す
      const data = dataset[key];
      await db.collection('questions').doc(key).set(data) //awaitは非同期処理をするため
    }
    sendResponse(res, 200, {message: 'Succesfully added dataset!'}); //成功のメッセージの作成
  }
});
