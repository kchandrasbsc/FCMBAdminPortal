using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Beckend.Models;

public partial class NapsStp2019Context : DbContext
{
    public NapsStp2019Context()
    {
    }

    public NapsStp2019Context(DbContextOptions<NapsStp2019Context> options)
        : base(options)
    {
    }

    public virtual DbSet<ActivityLog> ActivityLogs { get; set; }

    public virtual DbSet<AppRole> AppRoles { get; set; }

    public virtual DbSet<AppRole030622> AppRole030622s { get; set; }

    public virtual DbSet<AppRoleResourcePermission> AppRoleResourcePermissions { get; set; }

    public virtual DbSet<AppUser> AppUsers { get; set; }

    public virtual DbSet<AppUserDetail> AppUserDetails { get; set; }

    public virtual DbSet<AppUserDetail030622> AppUserDetail030622s { get; set; }

    public virtual DbSet<Check> Checks { get; set; }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<Menu> Menus { get; set; }

    public virtual DbSet<MenuItem> MenuItems { get; set; }

    public virtual DbSet<ResourcePermission> ResourcePermissions { get; set; }

    public virtual DbSet<StpAccountStatementRequest> StpAccountStatementRequests { get; set; }

    public virtual DbSet<StpNotificationRequest> StpNotificationRequests { get; set; }

    public virtual DbSet<StpRequest> StpRequests { get; set; }

    public virtual DbSet<StpRequest16112021> StpRequest16112021s { get; set; }

    public virtual DbSet<StpRequest22062022> StpRequest22062022s { get; set; }

    public virtual DbSet<StpRequestActivityLog> StpRequestActivityLogs { get; set; }

    public virtual DbSet<StpRequestActivityLog22062022> StpRequestActivityLog22062022s { get; set; }

    public virtual DbSet<StpRequestDetail> StpRequestDetails { get; set; }

    public virtual DbSet<StpRequestDetails22062022> StpRequestDetails22062022s { get; set; }

    public virtual DbSet<StpRequestDetailsUpload> StpRequestDetailsUploads { get; set; }

    public virtual DbSet<StpRequestDetailsUpload16112021> StpRequestDetailsUpload16112021s { get; set; }

    public virtual DbSet<StpRequestDetailsUpload22062022> StpRequestDetailsUpload22062022s { get; set; }

    public virtual DbSet<StpResponselog> StpResponselogs { get; set; }

    public virtual DbSet<StpSysMon> StpSysMons { get; set; }

    public virtual DbSet<StpSysMonHist> StpSysMonHists { get; set; }

    public virtual DbSet<StpTracelog> StpTracelogs { get; set; }

    public virtual DbSet<Task> Tasks { get; set; }

    //Data Source = (localdb)\\MSSQLLocalDB;Initial Catalog = naps_stp_2019; Integrated Security = True; Connect Timeout = 30; Encrypt=False;Trust Server Certificate=False;Application Intent = ReadWrite; Multi Subnet Failover=False;
    //=> optionsBuilder.UseSqlServer(builder.);
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ActivityLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Activity__3213E83F0CA65D7E");

            entity.ToTable("ActivityLog");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ActivityCode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("activityCode");
            entity.Property(e => e.ActorId).HasColumnName("actorId");
            entity.Property(e => e.Message)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("message");
            entity.Property(e => e.TimeEntered).HasColumnName("timeEntered");
        });

        modelBuilder.Entity<AppRole>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__AppRole__3213E83FFEAEBFAB");

            entity.ToTable("AppRole");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(19, 0)")
                .HasColumnName("id");
            entity.Property(e => e.Code)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("code");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("name");
        });

        modelBuilder.Entity<AppRole030622>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__AppRole___3213E83F463A1F85");

            entity.ToTable("AppRole_030622");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Code)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("code");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("name");

            entity.HasMany(d => d.Permissions).WithMany(p => p.Roles)
                .UsingEntity<Dictionary<string, object>>(
                    "AppRoleResourcePermission030622",
                    r => r.HasOne<ResourcePermission>().WithMany()
                        .HasForeignKey("PermissionsId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK407CA3C5835A6A22"),
                    l => l.HasOne<AppRole030622>().WithMany()
                        .HasForeignKey("RolesId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK407CA3C5A6644485"),
                    j =>
                    {
                        j.HasKey("RolesId", "PermissionsId").HasName("PK__AppRole___B73B0826344791AD");
                        j.ToTable("AppRole_ResourcePermission_030622");
                        j.IndexerProperty<long>("RolesId").HasColumnName("roles_id");
                        j.IndexerProperty<long>("PermissionsId").HasColumnName("permissions_id");
                    });
        });

        modelBuilder.Entity<AppRoleResourcePermission>(entity =>
        {
            entity.HasKey(e => new { e.RolesId, e.PermissionsId }).HasName("PK__AppRole___B73B0826053DD39A");

            entity.ToTable("AppRole_ResourcePermission");

            entity.Property(e => e.RolesId)
                .HasColumnType("numeric(19, 0)")
                .HasColumnName("roles_id");
            entity.Property(e => e.PermissionsId)
                .HasColumnType("numeric(19, 0)")
                .HasColumnName("permissions_id");
        });

        modelBuilder.Entity<AppUser>(entity =>
        {
            entity.HasKey(e => e.Username).HasName("PK__AppUser__F3DBC5736A2DD9C5");

            entity.ToTable("AppUser");

            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("username");
            entity.Property(e => e.AccountNonExpired).HasColumnName("accountNonExpired");
            entity.Property(e => e.AccountNonLocked).HasColumnName("accountNonLocked");
            entity.Property(e => e.Active).HasColumnName("active");
            entity.Property(e => e.CredentialsNonExpired).HasColumnName("credentialsNonExpired");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Reference)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("reference");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.TaskAssignable).HasColumnName("taskAssignable");
            entity.Property(e => e.UserDetailId).HasColumnName("userDetail_id");

            entity.HasOne(d => d.Role).WithMany(p => p.AppUsers)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK33E6796C84BCC2C");

            entity.HasOne(d => d.UserDetail).WithMany(p => p.AppUsers)
                .HasForeignKey(d => d.UserDetailId)
                .HasConstraintName("FK33E6796CC1C44846");
        });

        modelBuilder.Entity<AppUserDetail>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__AppUserD__3213E83FACA6C304");

            entity.ToTable("AppUserDetail");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(19, 0)")
                .HasColumnName("id");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("firstName");
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("lastName");
        });

        modelBuilder.Entity<AppUserDetail030622>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__AppUserD__3213E83F22E44D6F");

            entity.ToTable("AppUserDetail_030622");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("firstName");
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("lastName");
        });

        modelBuilder.Entity<Check>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Check");

            entity.Property(e => e.Transtrefnumber)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("transtrefnumber");
        });

        modelBuilder.Entity<Comment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Comment__3213E83F1B63E8EC");

            entity.ToTable("Comment");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Comment1)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("comment");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.System).HasColumnName("system");
            entity.Property(e => e.TaskId).HasColumnName("taskId");
            entity.Property(e => e.UserId)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("userId");

            entity.HasOne(d => d.Task).WithMany(p => p.Comments)
                .HasForeignKey(d => d.TaskId)
                .HasConstraintName("FK9BDE863FD0CFA814");
        });

        modelBuilder.Entity<Menu>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Menu__3213E83F9E9B77A6");

            entity.ToTable("Menu");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Active).HasColumnName("active");
            entity.Property(e => e.Code)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("code");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("name");
        });

        modelBuilder.Entity<MenuItem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__MenuItem__3213E83F3D56BB74");

            entity.ToTable("MenuItem");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Access)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("access");
            entity.Property(e => e.Active).HasColumnName("active");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.MenuId).HasColumnName("menu_id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Ordering).HasColumnName("ordering");

            entity.HasOne(d => d.Menu).WithMany(p => p.MenuItems)
                .HasForeignKey(d => d.MenuId)
                .HasConstraintName("FKDFD8A1323DF2FE89");
        });

        modelBuilder.Entity<ResourcePermission>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Resource__3213E83F1A8C0D96");

            entity.ToTable("ResourcePermission");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Code)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("code");
            entity.Property(e => e.MenuItemId).HasColumnName("menuItem_id");
            entity.Property(e => e.WritableResource).HasColumnName("writableResource");

            entity.HasOne(d => d.MenuItem).WithMany(p => p.ResourcePermissions)
                .HasForeignKey(d => d.MenuItemId)
                .HasConstraintName("FK9503E89D1BF63649");
        });

        modelBuilder.Entity<StpAccountStatementRequest>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_ACCO__3214EC274CCDEA2C");

            entity.ToTable("STP_ACCOUNT_STATEMENT_REQUEST");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Accountnumber)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ACCOUNTNUMBER");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Completeddate).HasColumnName("COMPLETEDDATE");
            entity.Property(e => e.Fordate).HasColumnName("FORDATE");
            entity.Property(e => e.Initiateddate).HasColumnName("INITIATEDDATE");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.Retrycount).HasColumnName("RETRYCOUNT");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
        });

        modelBuilder.Entity<StpNotificationRequest>(entity =>
        {
            entity.HasKey(e => e.MessageId).HasName("PK__STP_NOTI__F610EE4434859863");

            entity.ToTable("STP_NOTIFICATION_REQUEST");

            entity.Property(e => e.MessageId).HasColumnName("MESSAGE_ID");
            entity.Property(e => e.Message)
                .HasMaxLength(4000)
                .IsUnicode(false)
                .HasColumnName("MESSAGE");
            entity.Property(e => e.MessageDestEmail)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("MESSAGE_DEST_EMAIL");
            entity.Property(e => e.MessageDestEmailCopy)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("MESSAGE_DEST_EMAIL_COPY");
            entity.Property(e => e.MessageSent).HasColumnName("MESSAGE_SENT");
            entity.Property(e => e.MessageSubject)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("MESSAGE_SUBJECT");
            entity.Property(e => e.RequestDate).HasColumnName("REQUEST_DATE");
            entity.Property(e => e.SendCount).HasColumnName("SEND_COUNT");
            entity.Property(e => e.SentDate).HasColumnName("SENT_DATE");
        });

        modelBuilder.Entity<StpRequest>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_REQU__3214EC2760CCDE37");

            entity.ToTable("STP_REQUEST");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Completeddate).HasColumnName("COMPLETEDDATE");
            entity.Property(e => e.Initiateddate).HasColumnName("INITIATEDDATE");
            entity.Property(e => e.Processedcount).HasColumnName("PROCESSEDCOUNT");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.Requesttype)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTTYPE");
            entity.Property(e => e.Retrycount).HasColumnName("RETRYCOUNT");
            entity.Property(e => e.Sessionno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SESSIONNO");
            entity.Property(e => e.Sourcefilename)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SOURCEFILENAME");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.Totalcount).HasColumnName("TOTALCOUNT");
            entity.Property(e => e.Uploaded).HasColumnName("UPLOADED");
        });

        modelBuilder.Entity<StpRequest16112021>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_REQU__3214EC27A8D9C116");

            entity.ToTable("STP_REQUEST_16112021");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Completeddate).HasColumnName("COMPLETEDDATE");
            entity.Property(e => e.Initiateddate).HasColumnName("INITIATEDDATE");
            entity.Property(e => e.Processedcount).HasColumnName("PROCESSEDCOUNT");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.Requesttype)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTTYPE");
            entity.Property(e => e.Retrycount).HasColumnName("RETRYCOUNT");
            entity.Property(e => e.Sessionno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SESSIONNO");
            entity.Property(e => e.Sourcefilename)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SOURCEFILENAME");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.Totalcount).HasColumnName("TOTALCOUNT");
            entity.Property(e => e.Uploaded).HasColumnName("UPLOADED");
        });

        modelBuilder.Entity<StpRequest22062022>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("STP_REQUEST_22062022");

            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Completeddate).HasColumnName("COMPLETEDDATE");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("ID");
            entity.Property(e => e.Initiateddate).HasColumnName("INITIATEDDATE");
            entity.Property(e => e.Processedcount).HasColumnName("PROCESSEDCOUNT");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.Requesttype)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTTYPE");
            entity.Property(e => e.Retrycount).HasColumnName("RETRYCOUNT");
            entity.Property(e => e.Sessionno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SESSIONNO");
            entity.Property(e => e.Sourcefilename)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SOURCEFILENAME");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.Totalcount).HasColumnName("TOTALCOUNT");
            entity.Property(e => e.Uploaded).HasColumnName("UPLOADED");
        });

        modelBuilder.Entity<StpRequestActivityLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_REQU__3214EC27012DC8C5");

            entity.ToTable("STP_REQUEST_ACTIVITY_LOG");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Activity)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ACTIVITY");
            entity.Property(e => e.Activitydate).HasColumnName("ACTIVITYDATE");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.Userid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("USERID");
        });

        modelBuilder.Entity<StpRequestActivityLog22062022>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("STP_REQUEST_ACTIVITY_LOG_22062022");

            entity.Property(e => e.Activity)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ACTIVITY");
            entity.Property(e => e.Activitydate).HasColumnName("ACTIVITYDATE");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("ID");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.Userid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("USERID");
        });

        modelBuilder.Entity<StpRequestDetail>(entity =>
        {
            entity.HasKey(e => e.Refnos).HasName("PK__STP_REQU__BE3A2EF1A394E961");

            entity.ToTable("STP_REQUEST_DETAILS");

            entity.HasIndex(e => e.Transactionhandle, "UQ__STP_REQU__9AD1C25B47A0A858").IsUnique();

            entity.Property(e => e.Refnos).HasColumnName("REFNOS");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Batchrefrence)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BATCHREFRENCE");
            entity.Property(e => e.Destinationaccount)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("DESTINATIONACCOUNT");
            entity.Property(e => e.Entitycode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ENTITYCODE");
            entity.Property(e => e.Entryrefrence)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ENTRYREFRENCE");
            entity.Property(e => e.Hostresponse)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("HOSTRESPONSE");
            entity.Property(e => e.Originaldebithandle)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ORIGINALDEBITHANDLE");
            entity.Property(e => e.Remarks)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REMARKS");
            entity.Property(e => e.Sourceaccount)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SOURCEACCOUNT");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.Statusflag).HasColumnName("STATUSFLAG");
            entity.Property(e => e.Transactionamount).HasColumnName("TRANSACTIONAMOUNT");
            entity.Property(e => e.Transactionhandle).HasColumnName("TRANSACTIONHANDLE");
            entity.Property(e => e.Transdate).HasColumnName("TRANSDATE");
        });

        modelBuilder.Entity<StpRequestDetails22062022>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("STP_REQUEST_DETAILS_22062022");

            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Batchrefrence)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BATCHREFRENCE");
            entity.Property(e => e.Destinationaccount)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("DESTINATIONACCOUNT");
            entity.Property(e => e.Entitycode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ENTITYCODE");
            entity.Property(e => e.Entryrefrence)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ENTRYREFRENCE");
            entity.Property(e => e.Hostresponse)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("HOSTRESPONSE");
            entity.Property(e => e.Originaldebithandle)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ORIGINALDEBITHANDLE");
            entity.Property(e => e.Refnos)
                .ValueGeneratedOnAdd()
                .HasColumnName("REFNOS");
            entity.Property(e => e.Remarks)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REMARKS");
            entity.Property(e => e.Sourceaccount)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SOURCEACCOUNT");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.Statusflag).HasColumnName("STATUSFLAG");
            entity.Property(e => e.Transactionamount).HasColumnName("TRANSACTIONAMOUNT");
            entity.Property(e => e.Transactionhandle).HasColumnName("TRANSACTIONHANDLE");
            entity.Property(e => e.Transdate).HasColumnName("TRANSDATE");
        });

        modelBuilder.Entity<StpRequestDetailsUpload>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_REQU__3214EC2794590CD9");

            entity.ToTable("STP_REQUEST_DETAILS_UPLOAD");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Amount).HasColumnName("AMOUNT");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Cracctno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("CRACCTNO");
            entity.Property(e => e.Dracctno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("DRACCTNO");
            entity.Property(e => e.Hashstr)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("HASHSTR");
            entity.Property(e => e.LastResponsecode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("LAST_RESPONSECODE");
            entity.Property(e => e.Narration)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("NARRATION");
            entity.Property(e => e.Origdebitrefno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ORIGDEBITREFNO");
            entity.Property(e => e.Payeraccountnumber)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERACCOUNTNUMBER");
            entity.Property(e => e.Payeraddress)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERADDRESS");
            entity.Property(e => e.Payername)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERNAME");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.ResponseUpdatedDate)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("RESPONSE_UPDATED_DATE");
            entity.Property(e => e.Responsecode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("RESPONSECODE");
            entity.Property(e => e.Sessionnumber).HasColumnName("SESSIONNUMBER");
            entity.Property(e => e.Stan)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STAN");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.Tranrefno).HasColumnName("TRANREFNO");
            entity.Property(e => e.Transdate)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("TRANSDATE");
        });

        modelBuilder.Entity<StpRequestDetailsUpload16112021>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_REQU__3214EC27F41AA568");

            entity.ToTable("STP_REQUEST_DETAILS_UPLOAD_16112021");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Amount).HasColumnName("AMOUNT");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Cracctno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("CRACCTNO");
            entity.Property(e => e.Dracctno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("DRACCTNO");
            entity.Property(e => e.Hashstr)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("HASHSTR");
            entity.Property(e => e.LastResponsecode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("LAST_RESPONSECODE");
            entity.Property(e => e.Narration)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("NARRATION");
            entity.Property(e => e.Origdebitrefno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ORIGDEBITREFNO");
            entity.Property(e => e.Payeraccountnumber)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERACCOUNTNUMBER");
            entity.Property(e => e.Payeraddress)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERADDRESS");
            entity.Property(e => e.Payername)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERNAME");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.ResponseUpdatedDate)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("RESPONSE_UPDATED_DATE");
            entity.Property(e => e.Responsecode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("RESPONSECODE");
            entity.Property(e => e.Sessionnumber).HasColumnName("SESSIONNUMBER");
            entity.Property(e => e.Stan)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STAN");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.Tranrefno).HasColumnName("TRANREFNO");
            entity.Property(e => e.Transdate)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("TRANSDATE");
        });

        modelBuilder.Entity<StpRequestDetailsUpload22062022>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("STP_REQUEST_DETAILS_UPLOAD_22062022");

            entity.Property(e => e.Amount).HasColumnName("AMOUNT");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Cracctno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("CRACCTNO");
            entity.Property(e => e.Dracctno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("DRACCTNO");
            entity.Property(e => e.Hashstr)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("HASHSTR");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("ID");
            entity.Property(e => e.LastResponsecode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("LAST_RESPONSECODE");
            entity.Property(e => e.Narration)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("NARRATION");
            entity.Property(e => e.Origdebitrefno)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ORIGDEBITREFNO");
            entity.Property(e => e.Payeraccountnumber)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERACCOUNTNUMBER");
            entity.Property(e => e.Payeraddress)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERADDRESS");
            entity.Property(e => e.Payername)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PAYERNAME");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.ResponseUpdatedDate)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("RESPONSE_UPDATED_DATE");
            entity.Property(e => e.Responsecode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("RESPONSECODE");
            entity.Property(e => e.Sessionnumber).HasColumnName("SESSIONNUMBER");
            entity.Property(e => e.Stan)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STAN");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.Tranrefno).HasColumnName("TRANREFNO");
            entity.Property(e => e.Transdate)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("TRANSDATE");
        });

        modelBuilder.Entity<StpResponselog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_RESP__3214EC27986B7092");

            entity.ToTable("STP_RESPONSELOG");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Messageid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("MESSAGEID");
            entity.Property(e => e.Requestid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("REQUESTID");
            entity.Property(e => e.Responsecode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("RESPONSECODE");
            entity.Property(e => e.Trdate).HasColumnName("TRDATE");
        });

        modelBuilder.Entity<StpSysMon>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_SYS___3214EC2714967C14");

            entity.ToTable("STP_SYS_MON");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Connectorid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("CONNECTORID");
            entity.Property(e => e.Sdate).HasColumnName("SDATE");
            entity.Property(e => e.Sstate)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SSTATE");
        });

        modelBuilder.Entity<StpSysMonHist>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_SYS___3214EC277F4CEF64");

            entity.ToTable("STP_SYS_MON_HIST");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Connectorid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("CONNECTORID");
            entity.Property(e => e.Sdate).HasColumnName("SDATE");
            entity.Property(e => e.Sstate)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SSTATE");
        });

        modelBuilder.Entity<StpTracelog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__STP_TRAC__3214EC2758F5E0E3");

            entity.ToTable("STP_TRACELOG");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Bankid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("BANKID");
            entity.Property(e => e.Direction)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("DIRECTION");
            entity.Property(e => e.Messageid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("MESSAGEID");
            entity.Property(e => e.Traceinfo).HasColumnName("TRACEINFO");
            entity.Property(e => e.Trdate).HasColumnName("TRDATE");
            entity.Property(e => e.Ttype)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("TTYPE");
        });

        modelBuilder.Entity<Task>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Task__3213E83FC8DBE905");

            entity.ToTable("Task");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AssignedBy)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("assignedBy");
            entity.Property(e => e.AssignedTo)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("assignedTo");
            entity.Property(e => e.DateAssigned)
                .HasColumnType("date")
                .HasColumnName("dateAssigned");
            entity.Property(e => e.DateCompleted)
                .HasColumnType("date")
                .HasColumnName("dateCompleted");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.DueDate)
                .HasColumnType("date")
                .HasColumnName("dueDate");
            entity.Property(e => e.InitiatedBy)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("initiatedBy");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("status");
            entity.Property(e => e.TaskRef)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("taskRef");
            entity.Property(e => e.TaskType)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("taskType");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
