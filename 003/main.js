// 1. コールバック関数を引数に受け取る関数を実装する
const func = ( callback ) => {
  // 2. コールバック関数を実行する
  // 3. 引数付きでコールバック関数を実行する
  callback( 'メッセージ' );
};

func( (msg) => {
  console.log('コールバックの中 with ' + msg);
} );