using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SkeletonPOCApplicationServer.Controllers
{
    public class PublisherController : ApiController
    {
        [HttpGet]
        public JObject GetApplication()
        {
            JObject arrAppFiles = new JObject();

            JArray apps = new JArray();
            apps.Add(this.CreateApp(libName: "stuApp", configKey: "stuApp.js"));
            arrAppFiles["appsjs"] = apps;

            string css = ConfigurationManager.AppSettings.Get("capability.css");
            arrAppFiles["css"] = css;

            string[] js = ConfigurationManager.AppSettings.Get("js-deps").Split(';');
            arrAppFiles["js-deps"] = new JArray(js);

            return arrAppFiles;
        }

        public JObject CreateApp(string libName, string configKey)
        {
            JObject app = new JObject();
            app["libName"] = libName;
            app["path"] = ConfigurationManager.AppSettings.Get(configKey);
            return app;
        }
    }
}
