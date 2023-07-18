using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Beckend.Entities;

public partial class NapsStp2019Context : DbContext
{
    public NapsStp2019Context()
    {
    }

    public NapsStp2019Context(DbContextOptions<NapsStp2019Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Check> Checks { get; set; }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<NapsActivityLog> NapsActivityLogs { get; set; }

    public virtual DbSet<NapsAppRole> NapsAppRoles { get; set; }

    public virtual DbSet<NapsAppRoleResourcePermission> NapsAppRoleResourcePermissions { get; set; }

    public virtual DbSet<NapsAppUser> NapsAppUsers { get; set; }

    public virtual DbSet<NapsAppUserDetail> NapsAppUserDetails { get; set; }

    public virtual DbSet<NapsMenu> NapsMenus { get; set; }

    public virtual DbSet<NapsMenuItem> NapsMenuItems { get; set; }

    public virtual DbSet<NapsResourcePermission> NapsResourcePermissions { get; set; }

    public virtual DbSet<StpAccountStatementRequest> StpAccountStatementRequests { get; set; }

    public virtual DbSet<StpNotificationRequest> StpNotificationRequests { get; set; }

    public virtual DbSet<StpRequest> StpRequests { get; set; }

    public virtual DbSet<StpRequestActivityLog> StpRequestActivityLogs { get; set; }

    public virtual DbSet<StpRequestDetail> StpRequestDetails { get; set; }

    public virtual DbSet<StpRequestDetailsUpload> StpRequestDetailsUploads { get; set; }

    public virtual DbSet<StpResponselog> StpResponselogs { get; set; }

    public virtual DbSet<StpSysMon> StpSysMons { get; set; }

    public virtual DbSet<StpSysMonHist> StpSysMonHists { get; set; }

    public virtual DbSet<StpTracelog> StpTracelogs { get; set; }

    public virtual DbSet<Task> Tasks { get; set; }

}