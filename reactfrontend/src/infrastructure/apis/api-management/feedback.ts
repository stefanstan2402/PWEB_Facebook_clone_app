import { useAppSelector } from "@application/store";
import { ApiFeedbackGetPageIdUserInitiatorGetRequest, FeedbackAddDTO, FeedbackApi, FeedbackUpdateDTO } from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getFeedbacksQueryKey = "getFeedbacksQuery";
const getFeedbackQueryKey = "getFeedbackQuery";
const addFeedbackMutationKey = "addFeedbackMutation";
const deleteFeedbackMutationKey = "deleteFeedbackMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the Feedback API.
 */
export const useFeedbackApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getFeedbacks = (page: ApiFeedbackGetPageIdUserInitiatorGetRequest) => new FeedbackApi(config).apiFeedbackGetPageIdUserInitiatorGet({
        page: page.page,
        pageSize: page.pageSize,
        idUserInitiator: page.idUserInitiator,
        search: page.search
    }); // Use the generated client code and adapt it.
    const getFeedback = (id: string) => new FeedbackApi(config).apiFeedbackGetByIdIdGet({ id });
    const addFeedback = (Feedback: FeedbackAddDTO) => new FeedbackApi(config).apiFeedbackAddPost({ feedbackAddDTO: Feedback });
    const updateFeedback = (Feedback: FeedbackUpdateDTO) => new FeedbackApi(config).apiFeedbackUpdatePut({
        feedbackUpdateDTO: Feedback
    });
    const deleteFeedback = (id: string, idUser: string) => new FeedbackApi(config).apiFeedbackDeleteIdIdUserDelete({ id, idUser });

    return {
        getFeedbacks: { // Return the query object.
            key: getFeedbacksQueryKey, // Add the key to identify the query.
            query: getFeedbacks // Add the query callback.
        },
        getFeedback: {
            key: getFeedbackQueryKey,
            query: getFeedback
        },
        addFeedback: { // Return the mutation object.
            key: addFeedbackMutationKey, // Add the key to identify the mutation.
            mutation: addFeedback // Add the mutation callback.
        },
        updateFeedback: {
            key: addFeedbackMutationKey,
            mutation: updateFeedback
        },
        deleteFeedback: {
            key: deleteFeedbackMutationKey,
            mutation: deleteFeedback
        }
    }
}