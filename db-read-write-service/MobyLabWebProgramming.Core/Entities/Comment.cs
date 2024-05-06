namespace MobyLabWebProgramming.Core.Entities;

public class Comment : BaseEntity
{
    public string Content { get; set; } = default!;

    public Guid UserId { get; set; }
    public User User { get; set; } = default!;

    public Guid PostId { get; set; }
    public Post Post { get; set; } = default!;
}
