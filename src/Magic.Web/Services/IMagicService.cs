using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magic.Web.Models;

namespace Magic.Web.Services
{
    public interface IMagicService
    {
        Task<List<TeamDataList>> GetTransfers(RequestData request, Leaderboard leaderboard);
        Task<Leaderboard> GetLeaderboard(RequestData request);
        List<LeagueSummary> AnalyzeData(List<TeamDataList> rawData);
        List<LeagueSummary> SummarizeData(List<LeagueSummary> result);
    }
}
