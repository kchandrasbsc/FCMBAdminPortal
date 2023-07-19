using System;
using System.Collections.Generic;

namespace Beckend.Entities;
 
public partial class Task
{
    public long Id { get; set; }

    public string? AssignedBy { get; set; }

    public string? AssignedTo { get; set; }

    public DateTime? DateAssigned { get; set; }

    public DateTime? DateCompleted { get; set; }

    public string? Description { get; set; }

    public DateTime? DueDate { get; set; }

    public string? InitiatedBy { get; set; }

    public string? Status { get; set; }

    public string? TaskRef { get; set; }

    public string? TaskType { get; set; }

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
}
