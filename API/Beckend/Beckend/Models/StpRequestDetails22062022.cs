﻿using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class StpRequestDetails22062022
{
    public long Refnos { get; set; }

    public string? Bankid { get; set; }

    public string? Batchrefrence { get; set; }

    public string? Destinationaccount { get; set; }

    public string? Entitycode { get; set; }

    public string? Entryrefrence { get; set; }

    public string? Hostresponse { get; set; }

    public string? Remarks { get; set; }

    public string? Sourceaccount { get; set; }

    public string? Status { get; set; }

    public bool? Statusflag { get; set; }

    public DateTime? Transdate { get; set; }

    public double? Transactionamount { get; set; }

    public long Transactionhandle { get; set; }

    public string? Originaldebithandle { get; set; }
}
