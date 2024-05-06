import { useAppSelector } from "@application/store";
import { ApiEventGetPageGetRequest, EventAddDTO, EventApi, EventUpdateDTO } from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getEventsQueryKey = "getEventsQuery";
const getEventQueryKey = "getEventQuery";
const addEventMutationKey = "addEventMutation";
const deleteEventMutationKey = "deleteEventMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the Event API.
 */
export const useEventApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getEvents = (page: ApiEventGetPageGetRequest) => new EventApi(config).apiEventGetPageGet(page); // Use the generated client code and adapt it.
    const getEvent = (id: string) => new EventApi(config).apiEventGetByIdIdGet({ id });
    const addEvent = (Event: EventAddDTO) => new EventApi(config).apiEventAddPost({ eventAddDTO: Event });
    const updateEvent = (Event: EventUpdateDTO) => new EventApi(config).apiEventUpdatePut({
        eventUpdateDTO: Event
    });
    const deleteEvent = (id: string, idUser: string) => new EventApi(config).apiEventDeleteIdIdUserDelete({ id, idUser });

    return {
        getEvents: { // Return the query object.
            key: getEventsQueryKey, // Add the key to identify the query.
            query: getEvents // Add the query callback.
        },
        getEvent: {
            key: getEventQueryKey,
            query: getEvent
        },
        addEvent: { // Return the mutation object.
            key: addEventMutationKey, // Add the key to identify the mutation.
            mutation: addEvent // Add the mutation callback.
        },
        updateEvent: {
            key: addEventMutationKey,
            mutation: updateEvent
        },
        deleteEvent: {
            key: deleteEventMutationKey,
            mutation: deleteEvent
        }
    }
}