using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Activity
    {
      public Guid Id { get; set; }
      [Required]
      public string Title { get; set; }
      public DateTime Date { get; set; }
      public string Description { get; set; }
      public string Category { get; set; }
      public string City { get; set; }
      public string Venue { get; set; }
      public bool IsCancelled { get; set; }
      public ICollection<ActivityAtendee> Atendees { get; set; } = new List<ActivityAtendee>();
    }
}