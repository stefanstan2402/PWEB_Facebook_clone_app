namespace MobyLabWebProgramming.Core.DataTransferObjects;

public class CommentDTO
{
    public Guid Id { get; set; }
    public string Content { get; set; } = default!;
    public UserDTO User { get; set; } = default!;
    public PostDTO Post { get; set; } = default!;
}
