namespace coding_challenge
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }

    public class Technology
    {
        public string name { get; set; }
        public string logo { get; set; }
        public int dailyDownloadNumber { get; set; }
        public int popularityRange { get; set; }
    }
}