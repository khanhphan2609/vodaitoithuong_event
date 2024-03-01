$(document).ready(function() {
    var quantity = 180000;
    ProgressBar(quantity)
});

function ProgressBar(quantity) {
    var maxQuantity = 1300000;
    
    var progress = (quantity / maxQuantity) * 100;

    
    $('.progress__bar').css('width', progress + '%');


    // Active Gifts
    if (quantity >= 20000)
        $('.progress__gifts--item:lt(1)').addClass('active');
    if (quantity >= 70000)
        $('.progress__gifts--item:lt(2)').addClass('active');
    if (quantity >= 140000)
        $('.progress__gifts--item:lt(3)').addClass('active');
    if (quantity >= 180000)
        $('.progress__gifts--item:lt(4)').addClass('active');
    if (quantity >= 500000) 
        $('.progress__gifts--item:lt(5)').addClass('active');
    if (quantity >= 900000)
        $('.progress__gifts--item:lt(6)').addClass('active');
    if (quantity >= 1300000)
        $('.progress__gifts--item:lt(7)').addClass('active');
};

