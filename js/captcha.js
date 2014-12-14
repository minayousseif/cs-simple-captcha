var livewebsite,
    isLive,
    webserviceurl;

$(function () {

    livewebsite = window.location.hostname;
    isLive = (livewebsite.indexOf('minay.me') != -1) ? true : false;
    webserviceurl = (isLive) ? "../cscaptcha/CaptchaWS.asmx/GenCaptcha" : "../CaptchaWS.asmx/GenCaptcha";

    // Generate Captcha
    GetCaptcha(webserviceurl);

    $('#RefreshBtn').click(function () {
        GetCaptcha(webserviceurl);
    });
    $('.captcha-submit-btn').click(function () {
        var enteredCaptcha = $('.captcha-input').val();
        if (enteredCaptcha.length == 0) {
            $('.captcha-failed').slideDown('slow');
            $('.error-msg').text('Please enter the shown captcha.');
            setTimeout(function () { $('.captcha-failed').slideUp('slow'); }, 5000);
        }
        else {
            VerfiyCaptcha(enteredCaptcha, webserviceurl);
        }
        $('.captcha-input').val('');
        GetCaptcha();

    });
});

function GetCaptcha(webserviceurl) {
    $.ajax({
        url: webserviceurl,
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var captcha = response.d;
            GenCaptcha(captcha);
        }
    });
}

function VerfiyCaptcha(captcha, webserviceurl) {
    $.ajax({
        url: webserviceurl,
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{captcha:' + JSON.stringify(captcha) + '}',
        success: function (response) {
            var success = response.d[0];
            var msg = response.d[1];
            if (success == 0) {
                $('.captcha-failed').slideDown('slow');
                $('.error-msg').text(msg);
                setTimeout(function () { $('.captcha-failed').slideUp('slow'); }, 5000);
            }
            else {
                $('.captcha-success').slideDown('slow');
                $('.success-msg').text("Great, your entered text match.");
                setTimeout(function () { $('.captcha-success').slideUp('slow'); }, 5000);
            }
        }
    });
}

// Genrate Captcha Text 
function GenCaptcha(captcha) {
    var CImage = document.getElementById("myCaptcha");
    var CText = CImage.getContext("2d");
    CText.clearRect(0, 0, 180, 60);
    CText.font = "bold 45px 'RockSalt', cursive";
    CText.fillStyle = "#375a7f";
    CText.shadowColor = '#cccccc';
    CText.shadowBlur = 5;
    CText.shadowOffsetX = 5;
    CText.shadowOffsetY = 5;
    CText.fillText(captcha, 5, 50)
}