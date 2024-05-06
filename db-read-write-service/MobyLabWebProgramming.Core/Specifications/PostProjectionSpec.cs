using System.Linq.Expressions;
using Ardalis.Specification;
using Microsoft.EntityFrameworkCore;
using MobyLabWebProgramming.Core.DataTransferObjects;
using MobyLabWebProgramming.Core.Entities;

namespace MobyLabWebProgramming.Core.Specifications;

public sealed class PostProjectionSpec : BaseSpec<PostProjectionSpec, Post, PostDTO>
{
    protected override Expression<Func<Post, PostDTO>> Spec => e => new()
    {
        Id = e.Id,
        Content = e.Content,
        User = new UserDTO
        {
            Id = e.User.Id,
            Name = e.User.Name,
            Email = e.User.Email,
            PhoneNumber = e.User.PhoneNumber,
            Role = e.User.Role
        },
        Comments = e.Comments.Select(c => new CommentDTO
        {
            Id = c.Id,
            Content = c.Content,
            User = new UserDTO
            {
                Id = c.User.Id,
                Name = c.User.Name,
                Email = c.User.Email,
                PhoneNumber = c.User.PhoneNumber,
                Role = c.User.Role
            }
        }).ToList(),
        Likes = e.Likes.Select(l => new LikeDTO
        {
            Id = l.Id,
            User = new UserDTO
            {
                Id = l.User.Id,
                Name = l.User.Name,
                Email = l.User.Email,
                PhoneNumber = l.User.PhoneNumber,
                Role = l.User.Role
            }
        }).ToList()
    };

    public PostProjectionSpec(bool orderByCreatedAt = true) : base(orderByCreatedAt)
    {
        Query
            .Include(e => e.User)
            .Include(e => e.Comments)
            .ThenInclude(c => c.User)
            .Include(e => e.Likes)
            .ThenInclude(l => l.User);
    }

    public PostProjectionSpec(Guid id) : base(id)
    {
        Query
            .Include(e => e.User)
            .Include(e => e.Comments)
            .ThenInclude(c => c.User)
            .Include(e => e.Likes)
            .ThenInclude(l => l.User);
    }

    public PostProjectionSpec(string? search)
    {
        Query
            .Include(e => e.User)
            .Include(e => e.Comments)
            .ThenInclude(c => c.User)
            .Include(e => e.Likes)
            .ThenInclude(l => l.User);

        search = !string.IsNullOrWhiteSpace(search) ? search.Trim() : null;
        if (search == null)
        {
            return;
        }

        var searchExpr = $"%{search.Replace(" ", "%")}%";

        Query.Where(e => EF.Functions.ILike(e.Content, searchExpr));
    }
}
