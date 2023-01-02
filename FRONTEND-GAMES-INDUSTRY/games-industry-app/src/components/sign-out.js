import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useAuth } from "./contexts/auth-context";
import { CartContext } from "./contexts/cart-context";

const SignOut = () => {
  const { doRender, setDoRender } = useContext(CartContext);
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    setDoRender(doRender + 1);
    logOut();
    navigate("/sign-in");
  }, []);
};

export default SignOut;
