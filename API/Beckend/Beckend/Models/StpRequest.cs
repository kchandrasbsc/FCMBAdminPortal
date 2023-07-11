using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class StpRequest
{
    public long Id { get; set; }

    public string? Bankid { get; set; }

    public DateTime? Completeddate { get; set; }

    public DateTime? Initiateddate { get; set; }

    public int? Processedcount { get; set; }

    public string? Requestid { get; set; }

    public string? Requesttype { get; set; }

    public long? Retrycount { get; set; }

    public string? Sessionno { get; set; }

    public string? Sourcefilename { get; set; }

    public string? Status { get; set; }

    public int? Totalcount { get; set; }

    public bool Uploaded { get; set; }
}
