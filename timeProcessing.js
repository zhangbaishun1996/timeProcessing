//时间字符串格式化
String.prototype.myFormatTime = function() {
	var reg = /^(\d{4})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:\s+)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})$/
	var ary = [];
	this.replace(reg, function() {
		ary = [].slice.call(arguments).slice(1, 7);
	});
	var format = arguments[0] || '{0}年{1}月{2}日{3}:{4}:{5}';
	return format.replace(/{(\d+)}/g, function() {
		var val = ary[arguments[1]];
		return ary[arguments[1]].length === 1 ? '0' + val : val;
	});
	//用法：
	//		var stc = '2015.1.12 14.2000';
	//		console.log(stc.myFormatTime('{0}年{1}月{2}日{3}:{4}:{5}'));
};