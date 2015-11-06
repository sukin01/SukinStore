using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SukinStore.Mbship.Web.Models
{
    public class LoginModel
    {
        public string Password { get; set; }
        public string UserName { get; set; }

        public bool RememberMe { get; set; }
    }
}