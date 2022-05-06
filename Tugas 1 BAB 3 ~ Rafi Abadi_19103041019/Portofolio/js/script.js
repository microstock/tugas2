$('.progress-bar-animated').on('click', function(e){

var href = $(this).attr('href');

var tujuan = $(href);


$('body').animate({
    scrollTop: tujuan.offset('0')
});

e.preventDefault();


});
