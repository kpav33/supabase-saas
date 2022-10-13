import { useEffect } from "react";
// import { supabase } from "../utils/supabase";

const Login = () => {
  // Doesn't work GitHub shows page not found
  useEffect(() => {
    // On mount call supabase auth
    // supabase.auth.signIn({
    //   provider: "github",
    // });
    console.log("Logging in!");
    // supabase.auth.signInWithOAuth({
    //   provider: "github",
    // });
  }, []);

  return <p>Logging in</p>;
};

export default Login;
