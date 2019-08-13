function init(){
	$("body").find("img").each(function(){
		var url = $(this).attr("src");
		$(this).attr('data-src',url);
		console.log(url);
	});
}
//因为界面加载原因，我们延迟500ms再调用init
setTimeout("init()",3000)