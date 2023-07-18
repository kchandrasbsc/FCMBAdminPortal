using System;
using System.Collections.Generic;

namespace Beckend.Entities;

public partial class NapsResourcePermission
{
    public long Id { get; set; }

    public string? Code { get; set; }

    public bool WritableResource { get; set; }

    public long? MenuItemId { get; set; }
}
