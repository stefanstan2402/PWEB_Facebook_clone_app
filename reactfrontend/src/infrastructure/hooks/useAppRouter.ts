import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "routes";

/**
 * The object returned can be used to navigate within the application on various routes, use the callbacks for automatic redirects.
 */
export const useAppRouter = () => {
  const navigate = useNavigate();

  const redirectToCreateAccount = useCallback(
    () =>
      navigate(AppRoute.CreateAccount),
    [navigate]
  );

  const redirectToHome = useCallback(
    () => navigate(AppRoute.Index),
    [navigate]
  );

  const redirectToUsers = useCallback(
    () =>
      navigate({
        pathname: AppRoute.Users
      }),
    [navigate]
  );

  const redirectToUsersFiles = useCallback(
    () =>
      navigate({
        pathname: AppRoute.Users
      }),
    [navigate]
  );

  return {
    redirectToHome,
    redirectToUsers,
    redirectToUsersFiles,
    navigate
  };
};
