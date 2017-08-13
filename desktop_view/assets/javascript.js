$(window).bind('scroll',function(e){
    parallaxScroll();

    console.log(hi);

    function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#line').css('top',(0-(scrolled*.25))+'px');
    $('#line1').css('top',(0-(scrolled*.5))+'px');
    $('#text').css('top',(0-(scrolled*.75))+'px');
}
});

