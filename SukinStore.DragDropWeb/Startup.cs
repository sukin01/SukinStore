using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SukinStore.DragDropWeb.Startup))]
namespace SukinStore.DragDropWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
