using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.SignalR;

namespace Magic.Web.Models
{
    public class TeamDataList
    {
        public long TeamId { get; set; }
        public string TeamName { get; set; }
        public List<Team> Teams { get; set; } = new List<Team>();
        public string Ovpts { get; set; }
        public List<Gdpt> Gdpts { get; set; } = new List<Gdpt>();
    }

    public class LeagueSummary
    {
        public string TeamId { get; set; }
        public string TeamName { get; set; }
        public string Points { get; set; }
        public string TransfersDone { get; set; }
        public string Captain { get; set; }
        public string ViceCaptain { get; set; }
    }

    public class TeamDaySummary
    {
        public long TeamId { get; set; }
        public string TeamName { get; set; }
        public long Day { get; set; }
        public string Points { get; set; }
        public long TransfersDone { get; set; }
        public string Captain { get; set; }
        public string ViceCaptain { get; set; }
    }

    public class TeamSummary
    {
        public List<TeamDaySummary> TeamDaySummaries { get; set; }
    }

}
