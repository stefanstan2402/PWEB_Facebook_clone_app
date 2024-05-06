using System.Linq.Expressions;
using Ardalis.Specification;
using Microsoft.EntityFrameworkCore;
using MobyLabWebProgramming.Core.DataTransferObjects;
using MobyLabWebProgramming.Core.Entities;

namespace MobyLabWebProgramming.Core.Specifications;

public sealed class UserProjectionSpec : BaseSpec<UserProjectionSpec, User, UserDTO>
{
    protected override Expression<Func<User, UserDTO>> Spec => e => new()
    {
        Id = e.Id,
        Name = e.Name,
        Email = e.Email,
        PhoneNumber = e.PhoneNumber,
        Role = e.Role,
        Posts = e.Posts.Select(p => new PostDTO
        {
            Id = p.Id,
            Content = p.Content
        }).ToList(),
        Likes = e.Likes.Select(l => new LikeDTO
        {
            Id = l.Id,
            Post = new PostDTO
            {
                Id = l.Post.Id,
                Content = l.Post.Content
            }
        }).ToList(),
        Comments = e.Comments.Select(c => new CommentDTO
        {
            Id = c.Id,
            Content = c.Content,
            Post = new PostDTO
            {
                Id = c.Post.Id,
                Content = c.Post.Content
            }
        }).ToList(),
        Events = e.Events.Select(ev => new EventDTO
        {
            Id = ev.Id,
            Content = ev.Content,
            Title = ev.Title,
            Location = ev.Location,
            Date = ev.Date
        }).ToList(),
        Feedbacks = e.Feedbacks.Select(f => new FeedbackDTO
        {
            Id = f.Id,
            Content = f.Content,
            Rating = f.Rating,
            TypeOfAppreciation = f.TypeOfAppreciation,
            IsUserExperienceEnjoyable = f.IsUserExperienceEnjoyable,
        }).ToList(),
    };

    public UserProjectionSpec(bool orderByCreatedAt = true) : base(orderByCreatedAt)
    {
        Query
            .Include(e => e.Posts)
            .Include(e => e.Likes)
            .ThenInclude(e => e.Post)
            .Include(e => e.Comments)
            .ThenInclude(e => e.Post)
            .Include(e => e.Events)
            .Include(e => e.Feedbacks)
            .Include(e => e.UserFiles);
    }

    public UserProjectionSpec(Guid id) : base(id)
    {
        Query
            .Include(e => e.Posts)
            .Include(e => e.Likes)
            .ThenInclude(e => e.Post)
            .Include(e => e.Comments)
            .ThenInclude(e => e.Post)
            .Include(e => e.Events)
            .Include(e => e.Feedbacks)
            .Include(e => e.UserFiles);
    }

    public UserProjectionSpec(string? search)
    {
        Query
            .Include(e => e.Posts)
            .Include(e => e.Likes)
            .ThenInclude(e => e.Post)
            .Include(e => e.Comments)
            .ThenInclude(e => e.Post)
            .Include(e => e.Events)
            .Include(e => e.Feedbacks)
            .Include(e => e.UserFiles);

        search = !string.IsNullOrWhiteSpace(search) ? search.Trim() : null;
        if (search == null)
        {
            return;
        }

        var searchExpr = $"%{search.Replace(" ", "%")}%";

        Query.Where(e => EF.Functions.ILike(e.Name, searchExpr));
    }
}
