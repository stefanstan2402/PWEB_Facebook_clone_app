namespace MobyLabWebProgramming.Core.DataTransferObjects;

public class EventDTO
{
    public Guid Id { get; set; }
    public string Content { get; set; } = default!;
    public string Title { get; set; } = default!;
    public string Location { get; set; } = default!;
    public string Date { get; set; } = default!;
    public UserDTO User { get; set; } = default!;
}
