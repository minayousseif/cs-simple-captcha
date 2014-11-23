using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for captcha
/// </summary>
namespace SimpleCaptcha
{
    public class captcha
    {
        public static string GenCaptcha(int _clength = 5)
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            string captcha = new string(
                Enumerable.Repeat(chars, _clength)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());
            HttpContext.Current.Session["captcha"] = captcha;
            return captcha;
        }
    }
}
