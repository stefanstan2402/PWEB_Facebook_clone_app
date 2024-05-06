import { useAppSelector } from "@application/store";
import { CommentAddDTO, CommentApi, CommentUpdateDTO } from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getCommentsQueryKey = "getCommentsQuery";
const getCommentsCountQueryKey = "getCommentsCountQuery";
const getCommentQueryKey = "getCommentQuery";
const addCommentMutationKey = "addCommentMutation";
const deleteCommentMutationKey = "deleteCommentMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the Comment API.
 */
export const useCommentApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getComments = (idPost: string) => new CommentApi(config).apiCommentGetCommentsForPostCommentsIdPostGet({
        idPost
    }); // Use the generated client code and adapt it.
    const getComment = (id: string) => new CommentApi(config).apiCommentGetByIdIdGet({ id });
    const getCommentCounts = (idPost: string) => new CommentApi(config).apiCommentGetPostCommentsCountCommentsIdPostGet({ idPost });
    const addComment = (Comment: CommentAddDTO) => new CommentApi(config).apiCommentAddPost({ commentAddDTO: Comment });
    const updateComment = (Comment: CommentUpdateDTO) => new CommentApi(config).apiCommentUpdatePut({
        commentUpdateDTO: Comment
    });
    const deleteComment = (id: string, idUser: string, idPost: string) => new CommentApi(config).apiCommentDeleteIdIdUserIdPostDelete({ 
        id,
        idUser,
        idPost
    });

    return {
        getComments: { // Return the query object.
            key: getCommentsQueryKey, // Add the key to identify the query.
            query: getComments // Add the query callback.
        },
        getComment: {
            key: getCommentQueryKey,
            query: getComment
        },
        getCommentCounts: {
            key: getCommentsCountQueryKey,
            query: getCommentCounts
        },
        addComment: { // Return the mutation object.
            key: addCommentMutationKey, // Add the key to identify the mutation.
            mutation: addComment // Add the mutation callback.
        },
        updateComment: {
            key: addCommentMutationKey,
            mutation: updateComment
        },
        deleteComment: {
            key: deleteCommentMutationKey,
            mutation: deleteComment
        }
    }
}