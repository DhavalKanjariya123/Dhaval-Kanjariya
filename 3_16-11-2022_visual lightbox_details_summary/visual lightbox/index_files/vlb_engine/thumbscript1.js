jQuery(document).ready(function(){var a=jQuery,b=15;a("#vlightbox1 .vlightbox1").mouseenter(function(){var c=a("div.vlb_zoom",this);if(!c.length){c=a('<div class="vlb_zoom" style="position:absolute">').append(a("img:first",this).clone().css({position:"absolute"})).hide().appendTo(this)}c.find("img").css({width:"100%",left:0,top:0});c.show();c.find("img").animate({width:100+b+"%",left:-b/2+"%",top:-b/2+"%"},100)}).mouseleave(function(){a("div",this).find("img").animate({width:"100%",left:0,top:0},100)})});