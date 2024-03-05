$(document).ready(function() {
    var quantity = 180000;
    ProgressBar(quantity)

    $('#spinBtn').on('click', function() {
        Spin();
    })

    $('.sub-info__item').click(function() {
        $('.info-detail img').attr('src', '/assets/img/detail/' + $(this).data('avata') + '.webp');
        $('.sub-info').find('.sub-info__item').removeClass('active');

        $(this).addClass('active')
    });
});

function ProgressBar(quantity) {
    var maxQuantity = 1300000;
    var progress;

    // Active Gifts
    if (quantity >= 1300000) {
        $('.progress__gifts--item:lt(7)').addClass('active');
        progress = (quantity / maxQuantity) * 90;
    } else if (quantity >= 900000) {
        $('.progress__gifts--item:lt(6)').addClass('active');
        progress = (quantity / maxQuantity) * 110;
    } else if (quantity >= 500000) {
        $('.progress__gifts--item:lt(5)').addClass('active');
        progress = (quantity / maxQuantity) * 160;
    } else if (quantity >= 180000) {
        $('.progress__gifts--item:lt(4)').addClass('active');
        progress = (quantity / maxQuantity) * 350;
    } else if (quantity >= 140000) {
        $('.progress__gifts--item:lt(3)').addClass('active');
        progress = (quantity / maxQuantity) * 350;
    } else if (quantity >= 70000) {
        $('.progress__gifts--item:lt(2)').addClass('active');
        p