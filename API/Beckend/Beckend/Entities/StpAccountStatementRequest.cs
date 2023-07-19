using System;
using System.Collections.Generic;

namespace Beckend.Entities;
 
public partial class StpAccountStatementRequest
{
    public long Id { get; set; }

    public string? Accountnumber { get; set; }

    public string? Bankid { get; set; }

    public DateTime? Completeddate { get; set; }

    public DateTime? Fordate { get; set; }

    public DateTime? Initiateddate { get; set; }

    public string? Requestid { get; set; }

    public long? Retrycount { get; set; }

    public string? Status { get; set; }
}
