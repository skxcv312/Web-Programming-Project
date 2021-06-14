$(document).ready(function() {	
    var current=0;
    var slide_length = $('.slide_ul>li').length;
    var btn_ul = '<ul class="slide_btn"></ul>';   

    $('.slide_ul>li').hide();
    $('.slide_ul>li').first().show();        
    
    $(btn_ul).prependTo($('.slide'))
    for (var i = 0 ; i < slide_length; i++){
        var child = '<li><a href="#none">'+i+'</a></li>';
        $(child).appendTo($('.slide_btn'));
    }
    
    $('.slide_btn > li > a').first().addClass('active');	
    $('.slide_btn > li > a').on('click' , slide_stop);
    
function autoplay(){            
    if(current == slide_length-1) {
    current = 0;
    }
    else {
        current++;
    }
        $('.slide_ul>li').stop().fadeOut(1000);
        $('.slide_ul>li').eq(current).stop().fadeIn(1000);
        $('.slide_btn > li > a').removeClass('active');	
        $('.slide_btn > li > a').eq(current).addClass('active');	
    }
setInterval(autoplay,3000);

function slide_stop(){
        var fade_idx = $(this).parent().index(); 
        current = $(this).parent().index();
        if($('.slide_ul > li:animated').length >= 1) return false;
        $('.slide_ul > li').fadeOut(400);
        $('.slide_ul > li').eq(fade_idx).fadeIn(400);
        $('.slide_btn > li > a').removeClass('active');	
        $(this).addClass('active');
    }	
});


// document.getElementById("list_frame").style = 'none';
var display = true;
function doDisplay() {
    var con = document.getElementById("list_frame");
    if(con.style.display == 'none') {
        con.style.display = 'block';
    }
    else {
        con.style.display = 'none';
    }
}
//function listadd() {

//}