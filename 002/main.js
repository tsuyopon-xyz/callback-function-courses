// 関数式
const func = function( callback ) {
  callback();
}

func( () => {
  console.log('コールバック関数本体です');
} );