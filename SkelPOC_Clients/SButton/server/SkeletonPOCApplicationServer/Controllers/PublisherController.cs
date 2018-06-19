﻿using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SkeletonPOCApplicationServer.Controllers
{
    public class PublisherController : ApiController
    {
        [HttpGet]
        public JObject GetApplication()
        {
            JObject arrAppFiles = new JObject();

            //string AppJs = System.Configuration.ConfigurationManager.AppSettings.Get("app.js");
            //string VendorJs = System.Configuration.ConfigurationManager.AppSettings.Get("vendor.js");
            string AppCss = System.Configuration.ConfigurationManager.AppSettings.Get("app.css");

            //arrAppFiles["app"] = AppJs;
            //arrAppFiles["vendor"] = VendorJs;
            arrAppFiles["css"] = AppCss;


            string[] js = System.Configuration.ConfigurationManager.AppSettings.Get("js").Split(';');

            arrAppFiles["js"] = new JArray(js);

            return arrAppFiles;
        }
    }
}
