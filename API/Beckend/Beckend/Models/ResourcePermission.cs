using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class ResourcePermission
{
    public long Id { get; set; }

    public string? Code { get; set; }

    public bool WritableResource { get; set; }

    public long? MenuItemId { get; set; }

    public virtual MenuItem? MenuItem { get; set; }

    public virtual ICollection<AppRole030622> Roles { get; set; } = new List<AppRole030622>();
}
