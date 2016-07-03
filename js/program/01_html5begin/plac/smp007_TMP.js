//===========================================================================
/**
 * 初期化
 * @memberOf nothing
 * @param nothing
 * @returns nothing
 */
window.onload = function() {
	// タブにメソッドを関連づける
	tab.setup = {
		tabs: document.getElementById('jsTab0').getElementsByTagName('li'),
		pages: [
			document.getElementById('jsPage0'),
			document.getElementById('jsPage1'),
			document.getElementById('jsPage2')
		]
	}
	tab.init('jsTab1', 'jsTab2');
}
//===========================================================================
/**
 * タブロジック
 *
 * @class
 * @name tab
 * @memberOf smp007_TMP
 */
var tab = {
	//=======================================================================
	/**
	 * 初期表示
	 *
	 * @instance
	 * @memberOf smp007_TMP.tab
	 * @param
	 * @returns
	 */
	init: function(){
		var tabs = this.setup.tabs;
		var pages = this.setup.pages;
		var arg = arguments;
		var param_name = 'page';

		for(var i=0; i<pages.length; i++) {
			if(i !== 0) pages[i].style.display = 'none';
			tabs[i].onclick = function(){ tab.showpage(this, arg); return false; };
		}

		if(location.search){
			var query = location.search;
			query = query.substring(1,query.length);
			var querys = new Array();
			querys = query.split("&");
			for(var i=0; i<querys.length; i++){
				var pram = new Array();
				pram = querys[i].split("=");
				var name = pram[0];
				var value = pram[1];
			}
		}

		if(arg) {
			for(var i=0; i<arg.length; i++) {
				document.getElementById(arg[i]).style.display = 'none';
			}
		}
	},
	//=======================================================================
	/**
	 * ページ表示
	 *
	 * @instance
	 * @memberOf smp007_TMP.tab
	 * @param {Obj} obj タブのオブジェクト
	 * @param {Obj} arg タブのオブジェクト
	 * @returns
	 */
	showpage: function(obj, arg){
		var tabs = this.setup.tabs;
		var pages = this.setup.pages;
		var num;

		for(num=0; num<tabs.length; num++) {
			if(tabs[num] === obj) break;
		}

		for(var i=0; i<pages.length; i++) {
			if(i == num) {
				pages[num].style.display = 'block';
			}
			else{
				pages[i].style.display = 'none';
			}
		}

		if(arg) {
			for(var i=0; i<arg.length; i++) {
				document.getElementById(arg[i]).style.display = 'none';
			}
		}
	}
	//=======================================================================
}
//===========================================================================
/**
 * 開閉スクリプト
 * @param {Number} id ID
 * @returns
 */
function dd(id){
	if(document.all){
		OBJ = document.all(id).style;
	}else if(document.getElementById){
		OBJ = document.getElementById(id).style;
	}
	if(OBJ){
		OBJ.display=='none'?OBJ.display='':OBJ.display='none';
	}
}
//===========================================================================
/**
 * プルダウンスクリプト（メニューON）
 * @param {Number} x ID
 * @returns
 */
function MenuOn(x){
	obj=document.getElementById
	("submenu"+x).style.visibility="visible";
}
//===========================================================================
/**
 * プルダウンスクリプト（メニューOFF）
 * @param {Number} x ID
 * @returns
 */
function MenuOff(x){
	obj=document.getElementById
	("submenu"+x).style.visibility="hidden";
}
//===========================================================================
/**
 * プルダウンスクリプト（表示隠し）
 * @param {String} entryID ID
 * @param {String} entryLink ID
 * @param {String} htmlObj ID
 * @returns
 */
function showHide(entryID, entryLink, htmlObj) {
	extTextDivID = ('Text' + (entryID));
	extLinkDivID = ('Link' + (entryID));
	if( document.getElementById ) {
		if( document.getElementById(extTextDivID).style.display ) {
			if( entryLink != 0 ) {
				document.getElementById(extTextDivID).style.display = "block";
				document.getElementById(extLinkDivID).style.display = "none";
				htmlObj.blur();
			} else {
				document.getElementById(extTextDivID).style.display = "none";
				document.getElementById(extLinkDivID).style.display = "block";
			}
		} else {
			location.href = entryLink;
			return true;
		}
	} else {
		location.href = entryLink;
		return true;
	}
}
//===========================================================================
