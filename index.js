/**
* @author cho
* @date 2016/04/05
* @link http://chopstack.com
*/
var winWidth=0;
var winHeight=0;
function findDimensions()
{
	if(window.innerWidth)
	winWidth=window.innerWidth;
	else if((document.body)&&(document.body.clientWidth))
	winWidth=document.body.clientWidth;
	if(document.documentElement && document.documentElement.clientWidth)
	{
		winWidth=document.documentElement.clientWidth;
	}
}
findDimensions();
window.onresize=findDimensions;

function showHeadBlock(){
	$("body").css("overflow-x","hidden")
	$(".blog-title").addClass("blog-title-active");
	if(winWidth>1057){
		$(".move-block").animate({marginLeft:'300px'},'fast');
		//$(".large").animate({marginLeft:'auto'},'fast');
		$("#header").animate({marginLeft:'-150px'},'fast');
	}else{
		$(".move-block").animate({left:'300px'},'fast');
		$("#header").animate({marginLeft:'-150px'},'fast');
	}
	//$("#header").fadeOut();
	$("#secondary").animate({left:'0'},'fast');
	$(".side-click").removeClass("click-hamburger").addClass("click-cross");
	$(".side-click-mask").show();
}

function hideHeadBlock(){
	$(".blog-title").removeClass("blog-title-active");
	$(".move-block").animate({left:'0px',marginLeft:'0px'},'fast');
	$("#header").animate({marginLeft:'0px'},'fast');
	//$(".large").animate({marginLeft:'auto'},'fast');
	$("#secondary").animate({left:'-330px'},'fast');
	$(".side-click").removeClass("click-cross").addClass("click-hamburger");
	$(".side-click-mask").hide();
	//$("#header").fadeIn();
	$("body").css("overflow-x","visible")
}


$(document).ready(function(){
	$('body').delegate('.click-hamburger','click',function(){
		showHeadBlock();
	});
	$('body').delegate('.click-cross,.side-click-mask','click',function(){
		hideHeadBlock();
	});
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight/2){
        // Scroll Down
        $('#header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}