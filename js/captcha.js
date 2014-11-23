$(function () {
    // Generate Captcha
    GetCaptcha();

});

function GetCaptcha() {
    $.ajax({
        url: "../CaptchaWS.asmx/GenCaptcha",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var captcha = response.d;
            GenCaptcha(captcha);
        }
    });
}

function GenCaptcha(captcha) {
    var CImage = document.getElementById("myCaptcha");
    var CText = CImage.getContext("2d");
    CText.clearRect(0, 0, 150, 60);
    CText.font = "bold 2.5em 'Rock Salt', cursive";
    CText.fillStyle = "#2c3e50";
    CText.shadowColor = '#cccccc';
    CText.shadowBlur = 5;
    CText.shadowOffsetX = 5;
    CText.shadowOffsetY = 5;
    CText.fillText(captcha, 10, 50)
}