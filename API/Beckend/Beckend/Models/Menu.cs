using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class Menu
{
    public long Id { get; set; }

    public bool Active { get; set; }

    public string? Code { get; set; }

    public string? Description { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<MenuItem> MenuItems { get; set; } = new List<MenuItem>();
}
