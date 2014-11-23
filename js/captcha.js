$(function () {
    // Generate Captcha
    GetCaptcha();

})();

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
    CText.clearRect(0, 0, 180, 60);
    CText.font = "bold 45px 'RockSalt', cursive";
    CText.fillStyle = "#375a7f";
    CText.shadowColor = '#cccccc';
    CText.shadowBlur = 5;
    CText.shadowOffsetX = 5;
    CText.shadowOffsetY = 5;
    CText.fillText(captcha, 5, 50)
}