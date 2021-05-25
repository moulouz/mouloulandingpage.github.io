/* $*/
$(function () {
    "use strict";
    $('.links li').click(function () {
        $('html, body').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top + 1 - $('.navbar').height()
        }, 1000);
        $(this).addClass('home1').siblings().removeClass('home1');
    });
});
$(function () {
    "use strict";
        
    $('.prnt').each(function () {
        if ($(window).scrollTop() > ($(this).offset().top - $('.navbar').height())) {
            var prntId = $(this).attr('id');
            $('.links li[data-scroll = "' + prntId + '"]').addClass('home1').siblings().removeClass('home1');
        }
    });
});
$(function () {
    "use strict";
    $(window).scroll(function () {
        
        $('.prnt').each(function () {
            if ($(window).scrollTop() > ($(this).offset().top - $('.navbar').height())) {
                var prntId = $(this).attr('id');
                $('.links li[data-scroll = "' + prntId + '"]').addClass('home1').siblings().removeClass('home1');
            }
        });
    });
});

$(function () {
    "use strict";
    $('.faq ul li a i').click(function () {
        $(this).toggleClass('fa-plus-circle fa-minus-circle');
        $(this).parent().next('div').toggleClass('hddn', 500);
    });
});


$(function () {
    "use strict";
    $('#buy1').click(function () {
        $('.pop-up').fadeIn(400);
        $('.inner').css({
            'top': '5%'
        });
    });
    $('.pop-up').click(function () {
        $(this).fadeOut(400);
        $('.inner').css({
            'top': '-57%'
        });
    });
    $('.inner').click(function (e) {
        e.stopPropagation();
    });
    $('.pop-up .exit').click(function () {
        $('.pop-up').fadeOut(400);
        $('.inner').css({
            'top': '-57%'
        });
    });
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $('.pop-up').fadeOut(400);
        }
    });
});


$(function () {
    
    "use strict";
    
    var palceHol = '';
    
    $('[placeholder]').focus(function () {
        
        palceHol = $(this).attr('placeholder');
        
        $(this).attr('placeholder', '');
        
    }).blur(function () {
        $(this).attr('placeholder', palceHol);
    });
});


$(function () {
    "use strict";
    $(window).on('scroll', function () {
        $('div.navbar').css({
            "backgroundColor": "#060c21",
            "height": "72"
        });
        if ($(window).scrollTop() > 50) {
            $('div.navbar').css({
                "backgroundColor": "#060c21",
                "height": "72"
            }, 800);
        } else {
            $('div.navbar').css({
                "height": 0
            }, 800);
        }
    });
    if ($(window).scrollTop() > 2) {
        $('div.navbar').css({
            "backgroundColor": "#060c21",
            "height": "72"
        }, 800);
    } else {
        $('div.navbar').css({
            "height": 0
        }, 800);
    }
});
$(function () {
    "use strict";
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            
            $('.back-to-top').fadeIn();
            
        } else { $('.back-to-top').fadeOut(500); }
    });
    
});
$(function () {
    "use strict";
    $('.back-to-top').click(function (Event) {
        Event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});
$(function () {
    "use strict";
    $('div.date a').click(function () {
        $(this).addClass('acti').siblings('a').removeClass('acti');
        $('#' + $(this).data('select')).removeClass('selected').siblings().addClass('selected');
    });
});
var  myfirst = document.getElementById('first'),
    mysecond = document.getElementById('second'),
    mythird = document.getElementById('third'),
    myfourth = document.getElementById('fourth'),
    myfifth = document.getElementById('fifth'),
    mysixth = document.getElementById('sixth'),
    myseventh = document.getElementById('seventh'),
    myeight = document.getElementById('eight'),
    mygallery1 = document.getElementById('gallery1'),
    myimg1 = document.getElementById('img1'),
    myimg2 = document.getElementById('img2'),
    myimg3 = document.getElementById('img3'),
    myimg4 = document.getElementById('img4'),
    myimg5 = document.getElementById('img5'),
    myimg6 = document.getElementById('img6'),
    myimg7 = document.getElementById('img7'),
    myimg8 = document.getElementById('img8');

myfirst.onclick = function () {
    'use strict';
    mygallery1.classList.add('gallery9');
    mygallery1.classList.remove('gallery2');
    mygallery1.classList.remove('gallery3');
    mygallery1.classList.remove('gallery4');
    mygallery1.classList.remove('gallery5');
    mygallery1.classList.remove('gallery6');
    mygallery1.classList.remove('gallery7');
    mygallery1.classList.remove('gallery8');
    myimg1.classList.add('img-activted');
    myimg2.classList.remove('img-activted');
    myimg3.classList.remove('img-activted');
    myimg4.classList.remove('img-activted');
    myimg5.classList.remove('img-activted');
    myimg6.classList.remove('img-activted');
    myimg7.classList.remove('img-activted');
    myimg8.classList.remove('img-activted');
    myfirst.classList.add('li-activated');
    mysecond.classList.remove('li-activated');
    mythird.classList.remove('li-activated');
    myfourth.classList.remove('li-activated');
    myfifth.classList.remove('li-activated');
    mysixth.classList.remove('li-activated');
    myseventh.classList.remove('li-activated');
    myeight.classList.remove('li-activated');
};
mysecond.onclick = function () {
    'use strict';
    mygallery1.classList.add('gallery2');
    mygallery1.classList.remove('gallery9');
    mygallery1.classList.remove('gallery3');
    mygallery1.classList.remove('gallery4');
    mygallery1.classList.remove('gallery5');
    mygallery1.classList.remove('gallery6');
    mygallery1.classList.remove('gallery7');
    mygallery1.classList.remove('gallery8');
    myimg2.classList.add('img-activted');
    myimg1.classList.remove('img-activted');
    myimg3.classList.remove('img-activted');
    myimg4.classList.remove('img-activted');
    myimg5.classList.remove('img-activted');
    myimg6.classList.remove('img-activted');
    myimg7.classList.remove('img-activted');
    myimg8.classList.remove('img-activted');
    mysecond.classList.add('li-activated');
    myfirst.classList.remove('li-activated');
    mythird.classList.remove('li-activated');
    myfourth.classList.remove('li-activated');
    myfifth.classList.remove('li-activated');
    mysixth.classList.remove('li-activated');
    myseventh.classList.remove('li-activated');
    myeight.classList.remove('li-activated');
};
mythird.onclick = function () {
    'use strict';
    mygallery1.classList.add('gallery3');
    mygallery1.classList.remove('gallery9');
    mygallery1.classList.remove('gallery2');
    mygallery1.classList.remove('gallery4');
    mygallery1.classList.remove('gallery5');
    mygallery1.classList.remove('gallery6');
    mygallery1.classList.remove('gallery7');
    mygallery1.classList.remove('gallery8');
    myimg3.classList.add('img-activted');
    myimg2.classList.remove('img-activted');
    myimg1.classList.remove('img-activted');
    myimg4.classList.remove('img-activted');
    myimg5.classList.remove('img-activted');
    myimg6.classList.remove('img-activted');
    myimg7.classList.remove('img-activted');
    myimg8.classList.remove('img-activted');
    mythird.classList.add('li-activated');
    myfirst.classList.remove('li-activated');
    mysecond.classList.remove('li-activated');
    myfourth.classList.remove('li-activated');
    myfifth.classList.remove('li-activated');
    mysixth.classList.remove('li-activated');
    myseventh.classList.remove('li-activated');
    myeight.classList.remove('li-activated');
};
myfourth.onclick = function () {
    'use strict';
    mygallery1.classList.add('gallery4');
    mygallery1.classList.remove('gallery9');
    mygallery1.classList.remove('gallery3');
    mygallery1.classList.remove('gallery2');
    mygallery1.classList.remove('gallery5');
    mygallery1.classList.remove('gallery6');
    mygallery1.classList.remove('gallery7');
    mygallery1.classList.remove('gallery8');
    myimg4.classList.add('img-activted');
    myimg2.classList.remove('img-activted');
    myimg3.classList.remove('img-activted');
    myimg1.classList.remove('img-activted');
    myimg5.classList.remove('img-activted');
    myimg6.classList.remove('img-activted');
    myimg7.classList.remove('img-activted');
    myimg8.classList.remove('img-activted');
    myfourth.classList.add('li-activated');
    myfirst.classList.remove('li-activated');
    mythird.classList.remove('li-activated');
    mysecond.classList.remove('li-activated');
    myfifth.classList.remove('li-activated');
    mysixth.classList.remove('li-activated');
    myseventh.classList.remove('li-activated');
    myeight.classList.remove('li-activated');
};
myfifth.onclick = function () {
    'use strict';
    mygallery1.classList.add('gallery5');
    mygallery1.classList.remove('gallery9');
    mygallery1.classList.remove('gallery3');
    mygallery1.classList.remove('gallery4');
    mygallery1.classList.remove('gallery2');
    mygallery1.classList.remove('gallery6');
    mygallery1.classList.remove('gallery7');
    mygallery1.classList.remove('gallery8');
    myimg5.classList.add('img-activted');
    myimg2.classList.remove('img-activted');
    myimg3.classList.remove('img-activted');
    myimg4.classList.remove('img-activted');
    myimg1.classList.remove('img-activted');
    myimg6.classList.remove('img-activted');
    myimg7.classList.remove('img-activted');
    myimg8.classList.remove('img-activted');
    myfifth.classList.add('li-activated');
    myfirst.classList.remove('li-activated');
    mythird.classList.remove('li-activated');
    myfourth.classList.remove('li-activated');
    mysecond.classList.remove('li-activated');
    mysixth.classList.remove('li-activated');
    myseventh.classList.remove('li-activated');
    myeight.classList.remove('li-activated');
};
mysixth.onclick = function () {
    'use strict';
    mygallery1.classList.add('gallery6');
    mygallery1.classList.remove('gallery9');
    mygallery1.classList.remove('gallery3');
    mygallery1.classList.remove('gallery4');
    mygallery1.classList.remove('gallery5');
    mygallery1.classList.remove('gallery2');
    mygallery1.classList.remove('gallery7');
    mygallery1.classList.remove('gallery8');
    myimg6.classList.add('img-activted');
    myimg2.classList.remove('img-activted');
    myimg3.classList.remove('img-activted');
    myimg4.classList.remove('img-activted');
    myimg5.classList.remove('img-activted');
    myimg1.classList.remove('img-activted');
    myimg7.classList.remove('img-activted');
    myimg8.classList.remove('img-activted');
    mysixth.classList.add('li-activated');
    myfirst.classList.remove('li-activated');
    mythird.classList.remove('li-activated');
    myfourth.classList.remove('li-activated');
    myfifth.classList.remove('li-activated');
    mysecond.classList.remove('li-activated');
    myseventh.classList.remove('li-activated');
    myeight.classList.remove('li-activated');
};
myseventh.onclick = function () {
    'use strict';
    mygallery1.classList.add('gallery7');
    mygallery1.classList.remove('gallery9');
    mygallery1.classList.remove('gallery3');
    mygallery1.classList.remove('gallery4');
    mygallery1.classList.remove('gallery5');
    mygallery1.classList.remove('gallery6');
    mygallery1.classList.remove('gallery2');
    mygallery1.classList.remove('gallery8');
    myimg7.classList.add('img-activted');
    myimg2.classList.remove('img-activted');
    myimg3.classList.remove('img-activted');
    myimg4.classList.remove('img-activted');
    myimg5.classList.remove('img-activted');
    myimg6.classList.remove('img-activted');
    myimg1.classList.remove('img-activted');
    myimg8.classList.remove('img-activted');
    myseventh.classList.add('li-activated');
    myfirst.classList.remove('li-activated');
    mythird.classList.remove('li-activated');
    myfourth.classList.remove('li-activated');
    myfifth.classList.remove('li-activated');
    mysixth.classList.remove('li-activated');
    mysecond.classList.remove('li-activated');
    myeight.classList.remove('li-activated');
};
myeight.onclick = function () {
    'use strict';
    mygallery1.classList.add('gallery8');
    mygallery1.classList.remove('gallery9');
    mygallery1.classList.remove('gallery3');
    mygallery1.classList.remove('gallery4');
    mygallery1.classList.remove('gallery5');
    mygallery1.classList.remove('gallery6');
    mygallery1.classList.remove('gallery7');
    mygallery1.classList.remove('gallery2');
    myimg8.classList.add('img-activted');
    myimg2.classList.remove('img-activted');
    myimg3.classList.remove('img-activted');
    myimg4.classList.remove('img-activted');
    myimg5.classList.remove('img-activted');
    myimg6.classList.remove('img-activted');
    myimg7.classList.remove('img-activted');
    myimg1.classList.remove('img-activted');
    myeight.classList.add('li-activated');
    myfirst.classList.remove('li-activated');
    mythird.classList.remove('li-activated');
    myfourth.classList.remove('li-activated');
    myfifth.classList.remove('li-activated');
    mysixth.classList.remove('li-activated');
    myseventh.classList.remove('li-activated');
    mysecond.classList.remove('li-activated');
};


