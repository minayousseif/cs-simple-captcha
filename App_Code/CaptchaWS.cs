using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using SimpleCaptcha;

/// <summary>
/// Summary description for CaptchaWS
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class CaptchaWS : System.Web.Services.WebService {

    public CaptchaWS () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public string GenCaptcha() {
        return captcha.GenCaptcha();
    }
    
}
