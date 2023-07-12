using System;
using System.Collections.Generic;
using Beckend.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Beckend.DAL;

public partial class NapsStp2019Context : DbContext
{
   

    public NapsStp2019Context(DbContextOptions<NapsStp2019Context> options)
        : base(options)
    {
    }



    public virtual DbSet<Stp_Request> Stp_Request { get; set; }



    //Data Source = (localdb)\\MSSQLLocalDB;Initial Catalog = naps_stp_2019; Integrated Security = True; Connect Timeout = 30; Encrypt=False;Trust Server Certificate=False;Application Intent = ReadWrite; Multi Subnet Failover=False;

   

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
