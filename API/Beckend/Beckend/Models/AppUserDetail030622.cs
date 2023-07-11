using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class AppUserDetail030622
{
    public long Id { get; set; }

    public string? Email { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public virtual ICollection<AppUser> AppUsers { get; set; } = new List<AppUser>();
}
