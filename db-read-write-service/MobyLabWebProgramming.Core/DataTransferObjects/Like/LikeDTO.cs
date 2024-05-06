namespace MobyLabWebProgramming.Core.DataTransferObjects;

public class LikeDTO
{
    public Guid Id { get; set; }
    public UserDTO User { get; set; } = default!;
    public PostDTO Post { get; set; } = default!;
}
