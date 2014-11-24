using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    // Example on how to verify the captcha text
    public string[] VerfiyCaptcha(string captcha)
    {
        string[] _results = {"0","Failed to verfiy captcha!" };
        try
        {
            string OrigCaptcha = Session["captcha"].ToString();
            if (captcha.Equals(OrigCaptcha))
            {
                _results[0] = "1";
                _results[1] = "Captcha Verified";
            }
            else {
                _results[0] = "0";
                _results[1] = "Sorry, your entered text does not match!";
            }

        }
        catch (Exception Ex)
        {
            _results[0] = "0";
            _results[1] = "Failed to verfiy captcha : "+Ex.Message;
        }

        return _results;
    }
}