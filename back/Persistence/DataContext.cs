using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityAtendee> ActivityAtendees { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ActivityAtendee>(e => e.HasKey(aa => new { aa.AppUserId, aa.ActivityId }));
            
            builder.Entity<ActivityAtendee>()
                .HasOne(u => u.AppUser)
                .WithMany(a => a.Activities)
                .HasForeignKey(aa => aa.AppUserId);
            builder.Entity<ActivityAtendee>()
                .HasOne(u => u.Activity)
                .WithMany(a => a.Atendees)
                .HasForeignKey(aa => aa.ActivityId);
        }
    }
}