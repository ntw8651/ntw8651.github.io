
/*
if (getCookie('your_cookie_name') === 'true') {
    var liquidCode = '';
    for (var i = 1; i <= 100; i++) {
        liquidCode += '<div class="snow"></div>\n';
    }
    document.getElementById('snow-container').innerHTML = liquidCode;
    
}
*/
/* 이펙트 관련 */
document.addEventListener("DOMContentLoaded", function() {
    // 쿠키값 가져오기
    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }

    // 쿠키값 설정하기
    function setCookie(name, value) {
        document.cookie = name + '=' + value + '; path=/';
    }

    // 스위치 요소 찾기
    var switchInput = document.getElementById('effect-switch-input');
    
    var currentValue = getCookie('effect-switch-input');

    // 초기 쿠키에 따른 설정

    if (currentValue == 'true') {
        var liquidCode = '';
        for (var i = 1; i <= 100; i++) {
            liquidCode += '<div class="snow"></div>\n';
        }
        document.getElementById('snow-container').innerHTML = liquidCode;
        switchInput.checked = true;
    } else {
        // 쿠키값이 'false'일 때의 동작을 여기에 추가
        document.getElementById('snow-container').innerHTML = '';
        switchInput.checked = false;
    }


    // 스위치 변경 이벤트 처리
    if (switchInput) {
        switchInput.addEventListener('change', function() {
            // 현재 쿠키값 가져오기
            var currentValue = getCookie('effect-switch-input');
            // 현재 값이 'true'이면 'false'로, 그렇지 않으면 'true'로 설정
            var newValue = currentValue === 'true' ? 'false' : 'true';
            // 변경된 쿠키값 설정
            setCookie('effect-switch-input', newValue);
            // 변경된 쿠키값을 기반으로 작업 수행
            if (newValue === 'true') {
                var liquidCode = '';
                for (var i = 1; i <= 100; i++) {
                    liquidCode += '<div class="snow"></div>\n';
                }
                document.getElementById('snow-container').innerHTML = liquidCode;
            } else {
                // 쿠키값이 'false'일 때의 동작을 여기에 추가
                document.getElementById('snow-container').innerHTML = '';
            }
        });
    }
});




/* 사이드바 관련 */

const body = $('body');
const ATTR_DISPLAY = 'sidebar-display'; //sidebar.js

/* 초기 */
document.addEventListener("DOMContentLoaded", function() {
    var element = $("#sidebar-trigger");
    var _body = $('body');
    if (_body.attr(ATTR_DISPLAY) === "") {
        // ID가 "yourElementId"인 요소를 선택합니다.

        // left 값을 변경합니다.
        console.log($('#sidebar-trigger').css('left'));
        var sidebar_width = $('#sidebar').css('width');
        element.css({
            'left': sidebar_width,
            'transition': 'left 0.4s ease'
        });

    }
    else{
        console.log(body.attr(ATTR_DISPLAY));
        element.css({
            'left' : 0,
            'transition': 'left 0.4s ease'
        });
}});


// MutationObserver를 생성합니다. 잠깐... 그냥 왼쪽에
const observer = new MutationObserver(function(mutation, observer) {
    // mutationsList에는 변화한 MutationRecord 목록이 포함됩니다.
    // 각각의 MutationRecord를 순회하며 원하는 처리를 수행합니다.
    // 추가된 속성이 있다면 해당 처리를 수행합니다.
    var element = $("#sidebar-trigger");
    var _body = $('body');
    if (_body.attr(ATTR_DISPLAY) === "") {
        // ID가 "yourElementId"인 요소를 선택합니다.

        // left 값을 변경합니다.
        console.log($('#sidebar-trigger').css('left'));
        var sidebar_width = $('#sidebar').css('width');
        element.css({
            'left': sidebar_width,
            'transition': 'left 0.4s ease'
        });

    }
    else{
        console.log(body.attr(ATTR_DISPLAY));
        element.css({
            'left' : 0,
            'transition': 'left 0.4s ease'
    });
    }

});

// MutationObserver에 감시할 대상을 등록합니다.
// subtree: true로 설정하면 body 하위의 모든 요소에 대한 변화를 감시합니다.
observer.observe(body[0], { attributes: true, subtree: false });