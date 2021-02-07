$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var currentImg2 = $('.active2');
        var nextImg = currentImg.prev();
        var nextImg2 = currentImg2.prev();

        currentImg.animate({ width: 'toggle'}, 400, function() {
            currentImg.removeClass('active').css('z-index', -10);
            $('.grid-container1').prepend((currentImg));
            nextImg.addClass('active').css('z-index',10);
        })
        currentImg2.animate({ width: 'toggle'} , 400, function() {
            currentImg2.removeClass('active2').css('z-index', -10);
            $('.grid-container2').prepend(currentImg2).animate();
            nextImg2.addClass('active2').css('z-index',10);
        })
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var currentImg2 = $('.active2');
        var nextImg = $(".grid-container1 img").first();
        var nextImg2 = $(".grid-container2 img").first();
        
        nextImg.animate({ width: 'toggle'}, 400, function() {
            currentImg.removeClass('active').css('z-index', -10);
            $('.grid-container1').append((nextImg));
            nextImg.addClass('active').css('z-index',10);

        })
        nextImg2.animate({ width: 'toggle'} , 400, function() {
            currentImg2.removeClass('active2').css('z-index', -10);
            $('.grid-container2').append(nextImg2);
            nextImg2.addClass('active2').css('z-index',10);
        })
    });
});
