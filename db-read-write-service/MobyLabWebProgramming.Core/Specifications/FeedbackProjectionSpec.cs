using System.Linq.Expressions;
using Ardalis.Specification;
using Microsoft.EntityFrameworkCore;
using MobyLabWebProgramming.Core.DataTransferObjects;
using MobyLabWebProgramming.Core.Entities;

namespace MobyLabWebProgramming.Core.Specifications;

public sealed class FeedbackProjectionSpec : BaseSpec<FeedbackProjectionSpec, FeedBack, FeedbackDTO>
{
    protected override Expression<Func<FeedBack, FeedbackDTO>> Spec => e => new()
    {
        Id = e.Id,
        Content = e.Content,
        Rating = e.Rating,
        TypeOfAppreciation = e.TypeOfAppreciation,
        IsUserExperienceEnjoyable = e.IsUserExperienceEnjoyable,
        User = new UserDTO
        {
            Id = e.User.Id,
            Name = e.User.Name,
            Email = e.User.Email,
            PhoneNumber = e.User.PhoneNumber,
            Role = e.User.Role
        }
    };

    public FeedbackProjectionSpec(bool orderByCreatedAt = true) : base(orderByCreatedAt)
    {
        Query.Include(e => e.User);
    }

    public FeedbackProjectionSpec(Guid id) : base(id)
    {
        Query.Include(e => e.User);
    }

    public FeedbackProjectionSpec(string? search)
    {
        Query.Include(e => e.User);

        search = !string.IsNullOrWhiteSpace(search) ? search.Trim() : null;
        if (search == null)
        {
            return;
        }

        var searchExpr = $"%{search.Replace(" ", "%")}%";
        
        Query.Where(e => EF.Functions.ILike(e.Content, searchExpr));
    }
}
