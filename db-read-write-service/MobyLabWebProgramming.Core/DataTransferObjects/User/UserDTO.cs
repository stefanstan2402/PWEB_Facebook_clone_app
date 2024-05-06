using MobyLabWebProgramming.Core.Enums;

namespace MobyLabWebProgramming.Core.DataTransferObjects;

public class UserDTO
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
    public string PhoneNumber { get; set; } = default!;
    public UserRoleEnum Role { get; set; } = default!;
    public ICollection<PostDTO> Posts { get; set; } = new List<PostDTO>();
    public ICollection<LikeDTO> Likes { get; set; } = new List<LikeDTO>();
    public ICollection<CommentDTO> Comments { get; set; } = new List<CommentDTO>();
    public ICollection<EventDTO> Events { get; set; } = new List<EventDTO>();
    public ICollection<FeedbackDTO> Feedbacks { get; set; } = new List<FeedbackDTO>();
}
