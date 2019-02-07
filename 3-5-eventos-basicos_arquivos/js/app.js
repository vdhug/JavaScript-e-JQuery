
$('a').on("click", function(){
    $('a').text("Clicou");
});

// Prevenir que ocorra eventos padrões 
$('a').on("click", function(e){
    e.preventDefault();
    $('a').text("Clicou");
});


// Mouse enter, ocorre antes do hover
$('a').on("mouseenter", function(e){
    e.preventDefault();
    $('a').text("Clicou");
});


// Mouse leave
$('a').on("mouseleave", function(e){
    e.preventDefault();
    $('a').text("Mouse Leave");
});


// Scroll
$(document).on("scroll", function(){
    // Distancia que o scroll está em relação ao topo
    $('a').text($(document).scrollTop());
});

// Resize
$(window).on("resize", function(){
    // Distancia que o scroll está em relação ao topo
    $('a').text($('body').width());
});