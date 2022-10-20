import { useNavigate } from "@solidjs/router";
import LoadingAnimation from "../components/LoadingAnimation";
import { getLogin } from "../store/login";
import "../styles/loading.scss";

export default () => {
  const navigate = useNavigate();
  navigate(getLogin.token ? "/code" : "/login");

  return (
    <>
      <LoadingAnimation />
    </>
  );
};
