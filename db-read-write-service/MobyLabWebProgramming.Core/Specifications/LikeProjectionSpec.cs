using System.Linq.Expressions;
using Ardalis.Specification;
using Microsoft.EntityFrameworkCore;
using MobyLabWebProgramming.Core.DataTransferObjects;
using MobyLabWebProgramming.Core.Entities;

namespace MobyLabWebProgramming.Core.Specifications;

/// <summary>
/// This is a specification to filter the Like entities and map it to and LikeDTO object via the constructors.
/// Note how the constructors call the base class's constructors. Also, this is a sealed class, meaning it cannot be further derived.
/// </summary>
public sealed class LikeProjectionSpec : BaseSpec<LikeProjectionSpec, Like, LikeDTO>
{
    /// <summary>
    /// This is the projection/mapping expression to be used by the base class to get LikeDTO object from the database.
    /// </summary>
    protected override Expression<Func<Like, LikeDTO>> Spec => e => new()
    {
        Id = e.Id,
        User = new UserDTO
        {
            Id = e.User.Id,
            Name = e.User.Name,
            Email = e.User.Email,
            PhoneNumber = e.User.PhoneNumber,
            Role = e.User.Role
        },
        Post = new PostDTO
        {
            Id = e.Post.Id,
            Content = e.Post.Content,
            User = new UserDTO
            {
                Id = e.Post.User.Id,
                Name = e.Post.User.Name,
                Email = e.Post.User.Email,
                PhoneNumber = e.Post.User.PhoneNumber,
                Role = e.Post.User.Role
            }
        }
    };

    public LikeProjectionSpec(bool orderByCreatedAt = true) : base(orderByCreatedAt)
    {
    }

    public LikeProjectionSpec(Guid postId): base(postId)
    {
        Query
            .Include(e => e.User)
            .Include(e => e.Post)
            .ThenInclude(p => p.User);
    }
}
