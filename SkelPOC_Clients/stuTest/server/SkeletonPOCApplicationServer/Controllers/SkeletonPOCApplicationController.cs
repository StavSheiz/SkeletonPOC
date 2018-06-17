using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SkeletonPOCApplicationServer.Controllers
{
    public class SkeletonPOCApplicationController : ApiController
    {
        [HttpGet]
        public string GetServerData()
        {
            return "Server data";
        }
    }
}
