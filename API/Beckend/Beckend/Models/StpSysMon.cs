using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class StpSysMon
{
    public long Id { get; set; }

    public string? Bankid { get; set; }

    public string? Connectorid { get; set; }

    public DateTime? Sdate { get; set; }

    public string? Sstate { get; set; }
}
