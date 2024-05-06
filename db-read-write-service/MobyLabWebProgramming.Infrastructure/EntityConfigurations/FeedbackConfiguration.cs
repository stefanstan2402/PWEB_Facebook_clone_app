using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MobyLabWebProgramming.Core.Entities;

namespace MobyLabWebProgramming.Infrastructure.EntityConfigurations;

public class FeedbackConfiguration : IEntityTypeConfiguration<FeedBack>
{
    public void Configure(EntityTypeBuilder<FeedBack> builder)
    {
        builder.Property(e => e.Id)
            .IsRequired();
        builder.HasKey(x => x.Id);

        builder.Property(e => e.Content)
            .HasMaxLength(255)
            .IsRequired();
        builder.Property(e => e.Rating)
            .IsRequired();
        builder.Property(e => e.TypeOfAppreciation)
            .HasMaxLength(255)
            .IsRequired();
        builder.Property(e => e.IsUserExperienceEnjoyable)
            .IsRequired();

        builder.Property(e => e.CreatedAt)
            .IsRequired();
        builder.Property(e => e.UpdatedAt)
            .IsRequired();

        builder.HasOne(e => e.User)
            .WithMany(e => e.Feedbacks)
            .HasForeignKey(e => e.UserId)
            .HasPrincipalKey(e => e.Id)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);
    }
}
