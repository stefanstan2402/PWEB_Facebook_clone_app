namespace MobyLabWebProgramming.Core.DataTransferObjects;

public class FeedbackDTO
{
    public Guid Id { get; set; }
    public string Content { get; set; } = default!;
    public int Rating { get; set; } = default!;
    public string TypeOfAppreciation { get; set; } = default!;
    public bool IsUserExperienceEnjoyable { get; set; } = default!;
    public UserDTO User { get; set; } = default!;
}
