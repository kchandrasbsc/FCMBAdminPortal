using System;
using System.Collections.Generic;

namespace Beckend.Entities;
 
public partial class NapsMenu
{
    public long Id { get; set; }

    public bool Active { get; set; }

    public string? Code { get; set; }

    public string? Description { get; set; }

    public string? Name { get; set; }
}
