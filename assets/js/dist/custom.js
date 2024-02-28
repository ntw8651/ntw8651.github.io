
/*
if (getCookie('your_cookie_name') === 'true') {
    var liquidCode = '';
    for (var i = 1; i <= 100; i++) {
        liquidCode += '<div class="snow"></div>\n';
    }
    document.getElementById('snow-container').innerHTML = liquidCode;
    
}
*/

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
