using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using Magic.Web.Models;
using Magic.Web.Services;
using Magic.Web.Utilities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Magic.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {   
        private readonly ILogger<DataController> _logger;
        private readonly IMagicService _magicService;

        public DataController(ILogger<DataController> logger, IMagicService magicService)
        {
            _logger = logger;
            _magicService = magicService;
        }

        [Route("summary")]
        public async Task<ResponseEnvelope> GetSummaryData()
        {
            var leaderboard = _magicService.GetLeaderboard().Result;

            var teamDataList = _magicService.GetTransfers(leaderboard).Result;

            var analyzedResult = _magicService.AnalyzeData(teamDataList);

            return ResponseEnvelope.Success(analyzedResult);
        }
    }
}
