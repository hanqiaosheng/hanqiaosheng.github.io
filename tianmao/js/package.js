
function $(selector,range=document){
	if(typeof selector=='string'){
		// 获取元素
		// 对字符串去空
		let select=selector.trim();
		// 判断字符串首位字符
		let firstChar=select.charAt(0);
		if(firstChar=='.'){
			return range.getElementsByClassName(select.substring(1));
		}else if(firstChar=='#'){
			return range.getElementById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			// 正则对象:^表示以...开头，$表示以...结尾
			// 第一位表示可以允许a-z或A-Z开头，第二位表示可以允许a-z或A-Z或1-6开头，标签长度
			return range.getElementsByTagName(select);
		}

	}else if(typeof selector=='function'){
		// 添加事件
		window.onload=function(){
			// 回调函数
			selector();
		}
	}
}



/*
	获取属性元素方法：
	1.getComputedStyle(对象,null).属性
	2.getCurrentStyle
	3.getStyle

	getStyle(obj,attr):获取某一个对象指定的样式属性
	obj:对象  attr:样式
	getStyle(box,'width')
	获取box的宽度
	
	1.判断浏览器
	// 如果访问一个存在的方法，则返回其对应的函数；
	// 如果访问一个不存在的方法，则返回undefined

	如何实现兼容？把一个方法当成属性访问，如果返回true,则能使用该方法，如果返回false，则使用另一个方法
 */
// function getStyle(obj,attr){
// 	if(window.getComputedStyle){
// 		return getComputedStyle(obj,null)[attr];
// 	}else{
// 		return obj.currentStyle[attr];
// 	}
// }

/*
	html(obj[,content]) obj指指定的对象 [centent] 设置的内容（没有内容，则表示获取obj的内容，反之则表示设置obj的值）
	设置或获取某一元素的内容
 */

// function html(obj,content){
// 	// 此处的content会有隐式类型转换，如果此参数没有传东西，会返回undefined,默认是false
// 	if(content){
// 		obj.innerHTML=content;
// 	}else{
// 		return obj.innerHTML;
// 	}
// }