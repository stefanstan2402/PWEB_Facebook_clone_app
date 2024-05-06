namespace MobyLabWebProgramming.Core.DataTransferObjects;

public class PostDTO
{
    public Guid Id { get; set; }
    public string Content { get; set; } = default!;
    public UserDTO User { get; set; } = default!;
    public ICollection<CommentDTO> Comments { get; set; } = new List<CommentDTO>();
    public ICollection<LikeDTO> Likes { get; set; } = new List<LikeDTO>();
}
