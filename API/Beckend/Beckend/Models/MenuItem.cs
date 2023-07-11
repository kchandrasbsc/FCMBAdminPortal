using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class MenuItem
{
    public long Id { get; set; }

    public string? Access { get; set; }

    public bool Active { get; set; }

    public string? Description { get; set; }

    public string? Name { get; set; }

    public int? Ordering { get; set; }

    public long? MenuId { get; set; }

    public virtual Menu? Menu { get; set; }

    public virtual ICollection<ResourcePermission> ResourcePermissions { get; set; } = new List<ResourcePermission>();
}
