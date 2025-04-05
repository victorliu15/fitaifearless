import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin, handleLogout } from "../utils/authUtils";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleUserLogin = async () => {
    await handleLogin(navigate);
  };

  const handleUserLogout = async () => {
    await handleLogout(navigate);
  };

  return (
    <div className="h-fit w-full flex justify-between p-4 items-center">
      <div className="flex items-center">
        <Link
          to={"/home"}
          className="text-font font-bold text-2xl mr-8 hover:text-secondary transition duration-300"
        >
          fitaifearless
        </Link>
      </div>

      <button
        onClick={user ? handleUserLogout : handleUserLogin}
        className="text-font font-bold hover:bg-accent text-xl bg-secondary px-4 py-2 rounded-lg transition duration-300 ease-in-out"
      >
        {user ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default Header;
