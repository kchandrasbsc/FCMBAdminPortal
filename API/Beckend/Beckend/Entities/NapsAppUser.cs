using System;
using System.Collections.Generic;

namespace Beckend.Entities;
 
public partial class NapsAppUser
{
    public string Username { get; set; } = null!;

    public bool AccountNonExpired { get; set; }

    public bool AccountNonLocked { get; set; }

    public bool Active { get; set; }

    public bool CredentialsNonExpired { get; set; }

    public string? Name { get; set; }

    public string? Password { get; set; }

    public string? Reference { get; set; }

    public bool TaskAssignable { get; set; }

    public long? RoleId { get; set; }

    public long? UserDetailId { get; set; }
}
