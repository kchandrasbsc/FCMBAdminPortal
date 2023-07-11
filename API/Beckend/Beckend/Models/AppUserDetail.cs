using System;
using System.Collections.Generic;

namespace Beckend.Models;

public partial class AppUserDetail
{
    public decimal Id { get; set; }

    public string? Email { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }
}
