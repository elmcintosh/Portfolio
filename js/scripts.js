var hoverIn = function(){
	$(this).next().children('div.project-desc').addClass('show-project');
	$(this).next().children('div.project-desc').removeClass('hide-project');};
var hoverOut = function(){
	$(this).next().children('div.project-desc').addClass('hide-project');
	$(this).next().children('div.project-desc').removeClass('show-project');};

$('.projectpic').hover(hoverIn, hoverOut);











// $('#rcrc').hover(function(){
// 	$('.project-desc').addClass('show-project');
// 	$('.project-desc').removeClass('hide-project');
// }, function(){
// 	$('.project-desc').removeClass('show-project');
// 	$('.project-desc').addClass('hide-project');
// });

