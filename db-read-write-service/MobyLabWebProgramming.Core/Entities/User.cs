using MobyLabWebProgramming.Core.Enums;

namespace MobyLabWebProgramming.Core.Entities;

public class User : BaseEntity
{
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
    public string Password { get; set; } = default!;
    public string PhoneNumber { get; set; } = default!;
    public UserRoleEnum Role { get; set; } = default!;

    public ICollection<Post> Posts { get; set; } = default!;
    public ICollection<Like> Likes { get; set; } = default!;
    public ICollection<Comment> Comments { get; set; } = default!;
    public ICollection<Event> Events { get; set; } = default!;
    public ICollection<UserFile> UserFiles { get; set; } = default!;
    public ICollection<FeedBack> Feedbacks { get; set; } = default!;
}
