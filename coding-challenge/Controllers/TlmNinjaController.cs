using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;

namespace coding_challenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TlmNinjaController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<TlmNinjaController> _logger;

        public TlmNinjaController(ILogger<TlmNinjaController> logger)
        {
            _logger = logger;
        }

        [HttpGet("summary", Name = "ninjify")]
        [Route("ninjify")]
        public IEnumerable<WeatherForecast> GetNinjify()
        {
            this.LoadJson();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        public void LoadJson()
        {
            StreamReader r = new StreamReader("Data/technologies.json");
            string jsonString = r.ReadToEnd();
            Technology m = JsonConvert.DeserializeObject<Technology>(jsonString);
        }
    }
}