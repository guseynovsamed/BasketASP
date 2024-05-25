using System;
using Microsoft.AspNetCore.Mvc;

namespace OneToMany.Controllers
{
	public class CartController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}

