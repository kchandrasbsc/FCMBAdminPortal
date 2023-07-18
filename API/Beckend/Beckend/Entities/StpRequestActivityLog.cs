using System;
using System.Collections.Generic;

namespace Beckend.Entities;

public partial class StpRequestActivityLog
{
    public long Id { get; set; }

    public string? Activity { get; set; }

    public DateTime? Activitydate { get; set; }

    public string? Bankid { get; set; }

    public string? Requestid { get; set; }

    public string? Userid { get; set; }
}
