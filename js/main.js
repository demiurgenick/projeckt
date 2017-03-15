$('.slider').slick({
    autoplay: true,
    dots: true
});


$(document).ready(function () {
    
    viewLocal();

    // show or hidde form
    $('#super_down_btn').click(function() {
          $('#super_down_btn').toggleClass('downed');
        if($('#super_down_btn').hasClass('downed')) {
            var padding = parseInt($('.super-block_main-content').css('padding-bottom'));
            var newPadding;
            var intervalID = setInterval(frame, 1);
            function frame() {
                if(padding == 620)
                    clearInterval(intervalID);
                } else {
                    padding++; // +10
                    newPadding = padding + "px";
                    $('.super-block_main-content').css('padding-bottom', newPadding);
                }
            }
        } else {
            var padding = parseInt($('.super-block_main-content').css('padding-bottom'));
            var newPadding;
            var intervalID = setInterval(frame, 1);
            function frame() {
            if(padding == 110) {
                clearInterval(intervalID);
            } else {
                padding--;
                newPadding = padding + "px";
                console.log($('.super-block_main-content').css('padding-bottom', newPadding));
            }
        }
        }
    });
    

    // humburger
    $('.head_search_humb').click(function() {
        $('.head_search').toggleClass('anim-go');  
        $('#head_input_sear').toggleClass('anim-input');  
        $('#search_sub').toggleClass('anim-sub'); 
        $('.head_search_humb').toggleClass('disp-none');
        $('.top-block_menu').toggleClass('menu-vis');
        if($('.top-block_menu').hasClass('menu-hidde')) {
            $('.top-block_menu').toggleClass('menu-hidde');
        }
        
        if($('.head_search').hasClass('anim-go_r')) {
            $('.head_search').toggleClass('anim-go_r');  
            $('#head_input_sear').toggleClass('anim-input_r');  
            $('#search_sub').toggleClass('anim-sub_r');
        }
        
        
    });
    // end humburger
    $('.nav_btn').click(function() {
        $('.top-block_menu').toggleClass('menu-vis');
        $('.top-block_menu').toggleClass('menu-hidde');
        $('.head_search_humb').toggleClass('disp-none');
        
        $('.head_search').toggleClass('anim-go');  
        $('#head_input_sear').toggleClass('anim-input');  
        $('#search_sub').toggleClass('anim-sub');
        
        $('.head_search').toggleClass('anim-go_r');  
        $('#head_input_sear').toggleClass('anim-input_r');  
        $('#search_sub').toggleClass('anim-sub_r');
    });
    
    
    //STORAGE
        $('#super-form-sub').click(function() {
            console.log('aloha');
            var name = $('#user').val();
            var mail = $('#mail').val();
            var text = $('#super-text-area').val();
            console.log(text);
            
            var arr = localStorage.getItem('arr');
//    console.log(name);
    
    
        if(arr == null) {
            arr = [{'name': name, 'mail': mail, 'text': text}];
//            var srtArr = newArr;
            localStorage.setItem('arr', JSON.stringify(arr));

        
        } else {
            var newArr = JSON.parse(localStorage.getItem('arr'));
            newArr.push({'name': name, 'mail': mail, 'text': text});
            var srtArr = JSON.stringify(newArr);
            localStorage.setItem('arr', srtArr);
    }
        });
    //END STORAGE
    
    //navigation
    $('.top_nav>a').click(function(event) {
        event.preventDefault();
    
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body').animate({scrollTop: top}, 1500);
    });
    
    window.onscroll = function() {
        if ($(document).scrollTop() + $(window).height() > $('.super-block').offset().top && $(document).scrollTop() - $('.super-block').offset().top < $('.super-block').height()) {
//            console.log('aloha');
            $('img#inter').addClass('inter-ready');
            $('img#phone').addClass('phone-ready');
        }
        
    }
    
//    setTimeout(function() { console.log('yep')}, 1000);
//    setInterval(function() { console.log('yep')}, 1000, 10)
});


function viewLocal() {
    var reArr = JSON.parse(localStorage.getItem('arr'));
    console.log(reArr);
}








