using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class ActivityLog
{
    public long Id { get; set; }

    public string? ActivityCode { get; set; }

    public long? ActorId { get; set; }

    public string? Message { get; set; }

    public DateTime? TimeEntered { get; set; }
}
