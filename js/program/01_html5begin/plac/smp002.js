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
 * 四角形描画
 * @memberOf nothing
 * @param nothing
 * @returns nothing
 */
function draw1() {
	// canvassample1を取得
	var canvas = document.getElementById('canvassample1');
	// canvasの存在チェックと未対応ブラウザの対処
	if ( ! canvas || ! canvas.getContext ) {
		return false;
	}
	// コンテキスト指定開始
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.moveTo(20, 20);
	ctx.lineTo(120, 20);
	ctx.lineTo(120, 120);
	ctx.lineTo(20, 120);
	// コンテキスト指定終了
	ctx.closePath();
	// コンテキスト描画
	ctx.stroke();
};
//===========================================================================
