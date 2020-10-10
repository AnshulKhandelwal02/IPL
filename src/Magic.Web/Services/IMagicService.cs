using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magic.Web.Models;

namespace Magic.Web.Services
{
    public interface IMagicService
    {
        Task<List<TeamDataList>> GetTransfers(Leaderboard leaderboard);
        Task<Leaderboard> GetLeaderboard();
        List<LeagueSummary> AnalyzeData(List<TeamDataList> rawData);
    }
}
