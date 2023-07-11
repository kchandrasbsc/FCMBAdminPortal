using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class StpRequestActivityLog22062022
{
    public long Id { get; set; }

    public string? Activity { get; set; }

    public DateTime? Activitydate { get; set; }

    public string? Bankid { get; set; }

    public string? Requestid { get; set; }

    public string? Userid { get; set; }
}
