import { useAppSelector } from "@application/store";
import { ApiPostGetPageGetRequest, PostAddDTO, PostApi, PostUpdateDTO } from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getPostsQueryKey = "getPostsQuery";
const getPostQueryKey = "getPostQuery";
const addPostMutationKey = "addPostMutation";
const deletePostMutationKey = "deletePostMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the Post API.
 */
export const usePostApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getPosts = (page: ApiPostGetPageGetRequest) => new PostApi(config).apiPostGetPageGet(page); // Use the generated client code and adapt it.
    const getPost = (id: string) => new PostApi(config).apiPostGetByIdIdGet({ id });
    const addPost = (Post: PostAddDTO) => new PostApi(config).apiPostAddPost({ 
        postAddDTO: Post
     });
     const updatePost = (Post: PostUpdateDTO) => new PostApi(config).apiPostUpdatePut({
        postUpdateDTO: Post
    });
    const deletePost = (id: string, idUser: string) => new PostApi(config).apiPostDeleteIdIdUserDelete({ 
        id, 
        idUser
     });

    return {
        getPosts: { // Return the query object.
            key: getPostsQueryKey, // Add the key to identify the query.
            query: getPosts // Add the query callback.
        },
        getPost: {
            key: getPostQueryKey,
            query: getPost
        },
        addPost: { // Return the mutation object.
            key: addPostMutationKey, // Add the key to identify the mutation.
            mutation: addPost // Add the mutation callback.
        },
        updatePost: {
            key: addPostMutationKey,
            mutation: updatePost
        },
        deletePost: {
            key: deletePostMutationKey,
            mutation: deletePost
        }
    }
}