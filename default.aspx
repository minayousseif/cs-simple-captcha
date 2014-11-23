<%@ Page Language="C#" AutoEventWireup="true" CodeFile="default.aspx.cs" Inherits="_default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Mina Yousseif" />
    <title>C# Simple Captcha</title>
    <meta name="keywords" content="csharp captcha,c# captcha, simple captcha" />
    <meta name="description" content="" />

    <!--Bootstrap/ Font Awesome Core CSS Styles-->
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/font-awesome.min.css" rel="stylesheet" />
    '
    <!-- Custom styles for csharp simple captcha -->
    <link href="css/main.css" rel="stylesheet" />
    <!--- Fav Icon---->
    <link href="img/favicon.ico" rel="shortcut icon" type="image/x-icon" />

    <!-- Google fonts -->
    <link href="http://fonts.googleapis.com/css?family=Oswald:400,300,700" rel="stylesheet" type="text/css" />
    <link href="http://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" type="text/css" />
    <link href="http://fonts.googleapis.com/css?family=Rock+Salt" rel="stylesheet" type="text/css" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <div class="container">
        <div class="row text-center">
            <div class="col-lg-8 col-lg-offset-2 w">
                <h1>C# Simple Captcha</h1>
            </div>
        </div>
        <div class="captcha-container">
            <div class="row">
                <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                    <form id="MainForm" runat="server">
                        <div class="input-group">
                            <div class="input-group-addon captcha-group">
                                <div class="captcha-wrapper">
                                    <canvas id="myCaptcha" class="form-control captcha-text">Sorry, Your browser does not support the HTML5 canvas tag!
                                    </canvas>
                                </div>
                            </div>
                            <div class="input-wrapper">
                                <input class="form-control input-lg captcha-input" title="Enter the shown captcha here" placeholder="Enter captcha" type="text" />
                            </div>
                            <div class="input-group-btn captcha-group-btn">
                                <button class="btn btn-lg btn-primary captcha-submit-btn" type="button">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-lg-8 col-lg-offset-2 w">
                <ul class="list-inline social-buttons">
                    <li><a href="#"><i class="fa fa-google-plus"></i></a>
                    </li>
                    <li><a href="https://github.com/minayousseif"><i class="fa fa-github"></i></a>
                    </li>
                    <li><a href="mailto:mina.yousseif@gmail.com"><i class="fa fa-envelope"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /.container -->
    <!-- JQuery / Bootstrap JS / JS Files -->
    <script src="js/jquery-1.11.0.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!--BACKSTRETCH-->
    <!-- You can use an image of whatever size. This script will stretch to fit in any screen size.-->
    <script type="text/javascript" src="js/jquery.backstretch.min.js"></script>
    <!--main.js and captcha.js -->
    <script src="js/main.js"></script>
    <script src="js/captcha.js"></script>
</body>
</html>
