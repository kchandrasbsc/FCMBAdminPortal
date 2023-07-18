using System;
using System.Collections.Generic;

namespace Beckend.Entities;

public partial class StpTracelog
{
    public long Id { get; set; }

    public string? Bankid { get; set; }

    public string? Direction { get; set; }

    public string? Messageid { get; set; }

    public DateTime? Trdate { get; set; }

    public byte[]? Traceinfo { get; set; }

    public string? Ttype { get; set; }
}
