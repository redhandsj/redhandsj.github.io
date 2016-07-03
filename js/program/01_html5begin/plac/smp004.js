//===========================================================================
//ブラウザチェック
if (typeof sessionStorage == 'undefined') {
	// ストレージ仕様不可能
	document.write("<p>お使いのブラウザではWeb Storageが使えません。</p>");
} else {
	//=======================================================================
	/**
	 * セッションストレージ設定
	 */
	var storage = sessionStorage;
	//=======================================================================
	/**
	 * ボタンイベント1 保存
	 * @memberOf nothing
	 * @param nothing
	 * @returns nothing
	 */
	function setsessionStorage() {
		var key = document.getElementById("textkey").value;
		var value = document.getElementById("textdata").value;
		if (key && value) {
			storage.setItem(key, value);
		}
		key = "";
		value = "";
		viewStorage();
	}
	//=======================================================================
	/**
	 * ボタンイベント2 削除
	 * @memberOf nothing
	 * @param nothing
	 * @returns nothing
	 */
	function removeStorage() {
		var key = document.getElementById("textkey").value;
		storage.removeItem(key);
		key = "";
		viewStorage();
	}
	//=======================================================================
	/**
	 * ボタンイベント3 全て削除
	 * @memberOf nothing
	 * @param nothing
	 * @returns nothing
	 */
	function removeallStorage() {
		storage.clear();
		viewStorage();
	}
	//=======================================================================
	/**
	 * テーブルにストレージの値を表示
	 * @memberOf nothing
	 * @param nothing
	 * @returns nothing
	 */
	function viewStorage() {
		var list = document.getElementById("list")
		while (list.firstChild){
			list.removeChild(list.firstChild);
		}
		for (var i=0; i < storage.length; i++) {
			var _key = storage.key(i);
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			list.appendChild(tr);
			tr.appendChild(td1);
			tr.appendChild(td2);
			td1.innerHTML = _key;
			td2.innerHTML = storage.getItem(_key);
		}
	}
	//=======================================================================
}
//===========================================================================
