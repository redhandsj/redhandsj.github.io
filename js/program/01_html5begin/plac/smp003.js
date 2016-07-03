//===========================================================================
/**
 * 初期化
 * @memberOf nothing
 * @param nothing
 * @returns nothing
 */
window.onload = function () {
	// ここに読み込み完了時に実行してほしい内容を書く。
	// 四角形描画
	draw1();
};
//===========================================================================
/**
 * 円描画
 * @memberOf nothing
 * @param nothing
 * @returns nothing
 */
function draw1() {
	// canvassample1を取得
	var canvas = document.getElementById('c1');
	// canvasの存在チェックと未対応ブラウザの対処
	if ( ! canvas || ! canvas.getContext ) {
		return false;
	}
	// コンテキスト指定開始
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.arc(70, 70, 60, 0, Math.PI*2, false);
	// コンテキスト指定終了
	ctx.closePath();
	// コンテキスト描画
	ctx.stroke();
};
//===========================================================================
