$(document).ready(function(){
    $('a.scrollPage').click(function(e){
        e.preventDefault(); //a.scrollPage 태그의 기본 기능(책갈피 기능) 막아라.
        $('body, html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 400, function(){

        })
    })
})