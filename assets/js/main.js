$(document).ready(function() {
    var quantity = 100000;
    ProgressBar(quantity)

    $('#spinBtn').on('click', function() {
        Spin();
    })

    $('.sub-info__item').click(function() {
        $('.info-detail img').attr('src', '/assets/img/detail/' + $(this).data('avata') + '.webp');
        $('.sub-info').find('.sub-info__item').removeClass('active');

        $(this).addClass('active')
    });

    $(document).on('click', '#trailer', function() {
        DialogVideo();
    });

    $(document).on('click', '#regulations', function() {
        DialogRegulations();
    });

    $(document).on('click', '#history', function() {
        DialogHistory();
    });

    $('.register').on('click', 'a', function() {
        CommingSoon();
    });
    $('.routers').on('click', 'a', function() {
        CommingSoon();
    });
    CheckDevides();

    $('#menu-icon').on('click', function() {
        ShowMenuMob();
    })
    $('.menu-close').on('click', function() {
        ShowMenuMob();
    })
});

function ProgressBar(quantity) {
    var maxQuantity = 1300000;
    var progress;

    // Active Gifts
    if (quantity > 1500000) {
        $('.progress__gifts--item:lt(7)').addClass('active');
        progress = 100;
    } else if (quantity >= 1300000) {
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
        progress = (quantity / maxQuantity) * 450;
    } else if (quantity >= 20000) {
        $('.progress__gifts--item:lt(1)').addClass('active');
        progress = (quantity / maxQuantity) * 550; 
    } else {
        progress = (quantity / maxQuantity) * 550; 
    }

    $('.progress__bar').css('width', progress + '%');
    
};

function Spin() {
    $('.roulette').addClass('spin-animation');
    var transformValue;

    // Khi quay hoàn thành, lưu lại góc quay cuối cùng
    setTimeout(function() {
        transformValue = $('.roulette').css('transform').split(' ')[3].replace(/[,]/g, '') * 360;
        console.log(transformValue);

        // Sau khi quay hoàn thành, loại bỏ lớp spin-animation và đặt lại góc quay
        setTimeout(function() {
            $('.roulette').removeClass('spin-animation').css('transform', 'rotate(' + transformValue + 'deg)');
        }, 1500); // 1.5 giây, thời gian quay và ứng dụng góc quay cuối cùng

    }, 1500); // 1.5 giây, thời gian quay
}

function ChangeInfo() {
    $('.info-detail img').attr('src', '/assets/img/detail/' + $(this).data('avata') + '.webp');
    $('.sub-info').find('.sub-info__item').removeClass('active');

    $(this).addClass('active');
}

function DialogVideo() {
    $('#dialog_video').modal('toggle');
};

function DialogRegulations() {
    $('#dialog_regulations').modal('toggle');
};

function DialogHistory() {
    $('#dialog_history').modal('toggle');
}
function CommingSoon() {
    swal("Comming Soon!");
}

function CheckDevides() {
    var isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
        console.log(1)
        $('#download-img').attr('src', '/assets/img/download-btn/btn-android.png');
    }
}

function ShowMenuMob() {
    console.log(1);
    $('.navbar__wrapper').toggleClass('hide-on-mob-tablet');
}
