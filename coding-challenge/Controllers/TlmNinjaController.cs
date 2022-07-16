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
            string path = Path.Combine(Environment.CurrentDirectory, @"Data\", "technologies.json");
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

            var technologyTypeListJson = JsonConvert.DeserializeObject<TechnoFile>(jsonString);
            return technologyTypeListJson.technologies;
        }

        public static Technology getAwesomeNinja(String query)
        {
            List<TechnologyType> technologyTypes = ReadTechnologiesFile();
            List <Technology> technologies  = null;
            Technology ninjaTechnology = null;


            technologyTypes.ForEach(technoType => {
                String technoTypeName = technoType.name;
                bool isMatch = System.Text.RegularExpressions.Regex.IsMatch(technoTypeName, @query, System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                if (isMatch)
                {
                    technologies = technoType.children;
                }
            });

            if(technologies != null)
            {
                int count = technologies.Count();
                Random rand = new Random();
                int index = rand.Next(0, count - 1);

                 ninjaTechnology = technologies[index];
            }

            return ninjaTechnology;
        }
    }
}