using System;
using System.Collections.Generic;

namespace Beckend.Entities;
 
public partial class NapsMenuItem
{
    public long Id { get; set; }

    public string? Access { get; set; }

    public bool Active { get; set; }

    public string? Description { get; set; }

    public string? Name { get; set; }

    public int? Ordering { get; set; }

    public long? MenuId { get; set; }
}
