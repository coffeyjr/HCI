using Microsoft.AspNetCore.Mvc;
using ParkingLotApp.Models;
using System.Diagnostics;

namespace ParkingLotApp.Controllers
{
    /// <summary>
    /// A controller to handle actions for the application's main pages.
    /// </summary>
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Returns a view for the Home page. The URL route is "/Home/Index",
        /// or alternatively just "/".
        /// </summary>
        /// <returns>A ViewResult for the "Index" view</returns>
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Returns a view for the Rules page. The URL route is "/Home/Rules".
        /// </summary>
        /// <returns>A ViewResult for the "Rules" view</returns>
        public IActionResult Rules()
        {
            return View();
        }

        /// <summary>
        /// Returns a view for the Faq page. The URL route is "/Home/Faq".
        /// </summary>
        /// <returns>A ViewResult for the "Faq" view</returns>
        public IActionResult Faq()
        {
            return View();
        }

        /// <summary>
        /// Returns a view for the Error page. The URL route is "/Home/Error".
        /// </summary>
        /// <returns>A ViewResult for the "Error" view</returns>
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}