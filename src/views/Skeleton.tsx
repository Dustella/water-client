import { useNavigate } from "@solidjs/router";
import LoadingAnimation from "../components/LoadingAnimation";
import { useLogin } from "../store/login";
import "../styles/loading.scss";

export default () => {
  const navigate = useNavigate();
  navigate(useLogin.hasLocalToken() ? "/code" : "/login");

  return (
    <>
      <LoadingAnimation />
    </>
  );
};
