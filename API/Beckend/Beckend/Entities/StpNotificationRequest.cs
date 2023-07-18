using System;
using System.Collections.Generic;

namespace Beckend.Entities;

public partial class StpNotificationRequest
{
    public long MessageId { get; set; }

    public string? MessageDestEmailCopy { get; set; }

    public string? Message { get; set; }

    public DateTime? RequestDate { get; set; }

    public int? SendCount { get; set; }

    public bool? MessageSent { get; set; }

    public DateTime? SentDate { get; set; }

    public string? MessageSubject { get; set; }

    public string? MessageDestEmail { get; set; }
}
