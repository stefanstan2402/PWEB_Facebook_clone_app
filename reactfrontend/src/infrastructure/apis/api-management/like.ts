import { useAppSelector } from "@application/store";
import { LikeAddDTO, LikeApi, } from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getLikesQueryKey = "getLikesQuery";
const getLikeQueryKey = "getLikeQuery";
const getCountLikesQueryKey = "getCountLikesQuery";
const addLikeMutationKey = "addLikeMutation";
const deleteLikeMutationKey = "deleteLikeMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the Like API.
 */
export const useLikeApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getLikes = (idPost: string, idUser: string) => new LikeApi(config).apiLikeGetLikesForPostLikesIdPostIdUserGet({
        idPost,
        idUser
    }); // Use the generated client code and adapt it.
    const getLike = (id: string) => new LikeApi(config).apiLikeGetByIdIdGet({ id });
    const getCountLikes = (idPost: string, idUser: string) => new LikeApi(config).apiLikeGetLikesForPostLikesIdPostIdUserGetRaw({ idPost, idUser });
    const addLike = (Like: LikeAddDTO) => new LikeApi(config).apiLikeAddPost({ likeAddDTO: Like });

    const deleteLike = (id: string, idUser: string, idPost: string) => new LikeApi(config).apiLikeDeleteIdIdUserIdPostDelete({
        id,
        idUser,
        idPost
    });

    return {
        getLikes: { // Return the query object.
            key: getLikesQueryKey, // Add the key to identify the query.
            query: getLikes // Add the query callback.
        },
        getLike: {
            key: getLikeQueryKey,
            query: getLike
        },
        addLike: { // Return the mutation object.
            key: addLikeMutationKey, // Add the key to identify the mutation.
            mutation: addLike // Add the mutation callback.
        },
        getCountLikes: {
            key: getCountLikesQueryKey,
            query: getCountLikes
        },
        deleteLike: {
            key: deleteLikeMutationKey,
            mutation: deleteLike
        }
    }
}