using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class StpResponselog
{
    public long Id { get; set; }

    public string? Bankid { get; set; }

    public string? Messageid { get; set; }

    public string? Requestid { get; set; }

    public string? Responsecode { get; set; }

    public DateTime? Trdate { get; set; }
}
