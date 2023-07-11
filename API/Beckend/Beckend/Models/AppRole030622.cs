using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class AppRole030622
{
    public long Id { get; set; }

    public string? Code { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<AppUser> AppUsers { get; set; } = new List<AppUser>();

    public virtual ICollection<ResourcePermission> Permissions { get; set; } = new List<ResourcePermission>();
}
