namespace MobyLabWebProgramming.Core.Entities;

public class Like : BaseEntity
{
    public Guid PostId { get; set; }
    public Post Post { get; set; } = default!;

    public Guid UserId { get; set; }
    public User User { get; set; } = default!;
}
