$(function(){
    $('link[rel~="icon"]').detach().appendTo("head")
}),
$(window).on("hashchange",function(){
    $('link[rel~="icon"]').detach().appendTo("head")
});