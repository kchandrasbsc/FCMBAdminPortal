using System;
using System.Collections.Generic;

namespace Beckend.Entities;

public partial class NapsAppUserDetail
{
    public decimal Id { get; set; }

    public string? Email { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }
}
