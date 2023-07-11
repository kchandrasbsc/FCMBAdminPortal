using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class StpRequestDetailsUpload
{
    public long Id { get; set; }

    public double? Amount { get; set; }

    public string? Bankid { get; set; }

    public string? Cracctno { get; set; }

    public string? Dracctno { get; set; }

    public string? Hashstr { get; set; }

    public string? LastResponsecode { get; set; }

    public string? Narration { get; set; }

    public string? Requestid { get; set; }

    public string? Responsecode { get; set; }

    public string? ResponseUpdatedDate { get; set; }

    public long? Sessionnumber { get; set; }

    public string? Stan { get; set; }

    public string? Status { get; set; }

    public long? Tranrefno { get; set; }

    public string? Transdate { get; set; }

    public string? Origdebitrefno { get; set; }

    public string? Payername { get; set; }

    public string? Payeraccountnumber { get; set; }

    public string? Payeraddress { get; set; }
}
