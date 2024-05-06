namespace MobyLabWebProgramming.Core.Entities;

public class FeedBack : BaseEntity
{
    public string Content { get; set; } = default!;
    public int Rating { get; set; }
    public string TypeOfAppreciation { get; set; } = default!;
    public bool IsUserExperienceEnjoyable { get; set; } = false;

    public Guid UserId { get; set; }
    public User User { get; set; } = default!;
}
