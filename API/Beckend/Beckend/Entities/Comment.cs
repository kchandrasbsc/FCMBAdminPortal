using System;
using System.Collections.Generic;

namespace Beckend.Entities;

public partial class Comment
{
    public long Id { get; set; }

    public string? Comment1 { get; set; }

    public DateTime? Date { get; set; }

    public bool? System { get; set; }

    public string? UserId { get; set; }

    public long? TaskId { get; set; }

    public virtual Task? Task { get; set; }
}
