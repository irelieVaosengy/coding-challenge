using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

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

        [HttpGet("x", Name = "ninjify")]
        [Route("ninjify")]
        public Technology GetNinjify(String x)
        {
            Technology technology = getAwesomeNinja(x);

            return technology;
        }

        [HttpGet(Name = "technologies")]
        [Route("technologies")]
        public IEnumerable<TechnologyType> GetTechnologies()
        {
            List<TechnologyType> technologyTypes = ReadTechnologiesFile();
            return technologyTypes.ToArray();
        }

        public static List<TechnologyType> ReadTechnologiesFile()
        {
            string path = @"C:\Sample\tlm\IV\coding-challenge\coding-challenge\Data\technologies.json";
            string[] lines = System.IO.File.ReadAllLines(path);
            string jsonString = string.Empty;

            if (System.IO.File.Exists(path))
            {
                // Read file using StreamReader. Reads file line by line  
                using (StreamReader file = new StreamReader(path))
                {
                    int counter = 0;
                    string ln;

                    while ((ln = file.ReadLine()) != null)
                    {
                        Console.WriteLine(ln);
                        jsonString += "\n" + ln;
                        counter++;
                    }
                    file.Close();
                    Console.WriteLine("File has {counter} lines.");
                }
            }

            Console.WriteLine("str=" + jsonString);

            var technologyTypeListJson = JsonConvert.DeserializeObject<TechnoFile>(jsonString);
            /*foreach (var technoType in technologyTypeListJson.technologies)
            {
                String technoTypeName = technoType.name;
                List<TechnologyType> technologies = new List<TechnologyType>();
                
                Technology resultProduct = new Technology
                {
                    name = item.name,
                    weight = item.weight,
                    value = item.value,
                    type = item.type == "NonPerishable" ? false : true
                };

                resultProduct.factoryLocation = GetLocation(item.factoryLocation);
                resultProduct.destination = GetLocation(item.destination);
                list.Add(resultProduct);
            }*/
            return technologyTypeListJson.technologies;
        }

        public static Technology getAwesomeNinja(String query)
        {
            List<TechnologyType> technologyTypes = ReadTechnologiesFile();

            return technologyTypes[0].children[0];
        }
    }
}