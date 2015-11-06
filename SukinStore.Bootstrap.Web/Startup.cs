using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SukinStore.Bootstrap.Web.Startup))]
namespace SukinStore.Bootstrap.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
