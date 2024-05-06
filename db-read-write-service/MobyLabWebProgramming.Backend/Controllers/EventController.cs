using System.Reflection.Metadata.Ecma335;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MobyLabWebProgramming.Core.DataTransferObjects;
using MobyLabWebProgramming.Core.Requests;
using MobyLabWebProgramming.Core.Responses;
using MobyLabWebProgramming.Infrastructure.Authorization;
using MobyLabWebProgramming.Infrastructure.Extensions;
using MobyLabWebProgramming.Infrastructure.Services.Implementations;
using MobyLabWebProgramming.Infrastructure.Services.Interfaces;

namespace MobyLabWebProgramming.Backend.Controllers;

/// <summary>
/// This is a controller example for CRUD operations on users.
/// </summary>
[ApiController] // This attribute specifies for the framework to add functionality to the controller such as binding multipart/form-data.
[Route("api/[controller]/[action]")] // The Route attribute prefixes the routes/url paths with template provides as a string, the keywords between [] are used to automatically take the controller and method name.
public class EventController: ControllerBase // Here we use the AuthorizedController as the base class because it derives ControllerBase and also has useful methods to retrieve user information.
{
    /// <summary>
    /// Inject the required services through the constructor.
    /// </summary>
    public IEventService EventService { get; set; }
    public EventController(IEventService _EventService) // Also, you may pass constructor parameters to a base class constructor and call as specific constructor from the base class.
    {
        EventService = _EventService;
    }

    /// <summary>
    /// This method implements the Read operation (R from CRUD) on a user. 
    /// </summary>
    [Authorize] // You need to use this attribute to protect the route access, it will return a Forbidden status code if the JWT is not present or invalid, and also it will decode the JWT token.
    [HttpGet("{id:guid}")] // This attribute will make the controller respond to a HTTP GET request on the route /api/User/GetById/<some_guid>.
    public async Task<ActionResult<RequestResponse<EventDTO>>> GetById([FromRoute] Guid id) // The FromRoute attribute will bind the id from the route to this parameter.
    {
        // return getEvent from EventService
        return this.FromServiceResponse(await EventService.GetEvent(id));
    }

    /// <summary>
    /// This method implements the Read operation (R from CRUD) on page of users.
    /// Generally, if you need to get multiple values from the database use pagination if there are many entries.
    /// It will improve performance and reduce resource consumption for both client and server.
    /// </summary>
    [Authorize]
    [HttpGet] // This attribute will make the controller respond to a HTTP GET request on the route /api/User/GetPage.
    public async Task<ActionResult<RequestResponse<PagedResponse<EventDTO>>>> GetPage([FromQuery] PaginationSearchQueryParams pagination) // The FromQuery attribute will bind the parameters matching the names of
                                                                                                                                         // the PaginationSearchQueryParams properties to the object in the method parameter.
    {
        return this.FromServiceResponse(await EventService.GetEvents(pagination));
    }

    /// <summary>
    /// This method implements the Create operation (C from CRUD) of a Event. 
    /// </summary>
    [Authorize]
    [HttpPost] // This attribute will make the controller respond to a HTTP Event request on the route /api/User/Add.
    public async Task<ActionResult<RequestResponse>> Add([FromBody] EventAddDTO Event)
    {
        try 
        {
            return this.FromServiceResponse(await EventService.AddEvent(Event));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }

    /// <summary>
    /// This method implements the Update operation (U from CRUD) on a user. 
    /// </summary>
    [Authorize]
    [HttpPut] // This attribute will make the controller respond to a HTTP PUT request on the route /api/User/Update.
    public async Task<ActionResult<RequestResponse>> Update([FromBody] EventUpdateDTO Event) // The FromBody attribute indicates that the parameter is deserialized from the JSON body.
    {
        try 
        {
            return this.FromServiceResponse(await EventService.UpdateEvent(Event));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }

    /// <summary>
    /// This method implements the Delete operation (D from CRUD) on a user.
    /// Note that in the HTTP RFC you cannot have a body for DELETE operations.
    /// </summary>
    [Authorize]
    [HttpDelete("{id}/{idUser}")] // This attribute will make the controller respond to a HTTP DELETE request on the route /api/User/Delete/<some_guid>.
    public async Task<ActionResult<RequestResponse>> Delete([FromRoute] Guid id, [FromRoute] Guid idUser) // The FromRoute attribute will bind the id from the route to this parameter.
    {
        return this.FromServiceResponse(await EventService.DeleteEvent(id, idUser));
    }
}