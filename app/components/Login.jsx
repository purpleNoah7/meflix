"use client";
import Link from "next/link";
import user from "../settings/user";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [inName, setUser] = useState("");
  const [inPassword, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(false);

  const users = user;
  const name = users[1].name;
  const password = users[1].password;

  useEffect(() => {
    const storedUser = Cookies.get("loggedInUser");

    if (storedUser) {
      window.location.href = "/home";
    }
  }, []);

  const handleLogin = () => {
    if (inName === name && inPassword === password) {
      const cookieOptions = rememberUser ? { expires: 7 } : { expires: null };
      Cookies.set("loggedInUser", inName, cookieOptions);

      window.location.href = "/profile";
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="w-full h-screen  overflow-hidden relative flex items-center justify-center">
      <div
        className="md:w-[450px] w-full h-screen
       md:h-[660px] md:bg-black/70 bg-black flex flex-col p-16 items-center justify-center"
      >
        {" "}
        <div className="w-[300px] h-[500px] flex flex-col gap-3">
          <h1 className="text-3xl font-light">Inicia Sesión</h1>
          <div className="flex  gap-5 flex-col justify-center">
            <input
              type="text"
              id="user"
              placeholder="Introduce usuario..."
              className="w-full p-3 h-12 rounded-md  bg-neutral-800 text-white placeholder:text-neutral-600"
              onChange={(e) => setUser(e.target.value)}
            />

            <input
              id="password"
              type="password"
              placeholder="Introduce contraseña..."
              className="w-full p-3 h-12 rounded-md  bg-neutral-800 text-white placeholder:text-neutral-600"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-red-700 p-3 rounded-md text-center"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="remember"
              className="w-3 h-3"
              checked={rememberUser}
              onChange={() => setRememberUser(!rememberUser)}
            />
            <label className="text-white" htmlFor="remember">
              Recordar usuario
            </label>
          </div>
        </div>
      </div>
      <img
        className="brightness-50 -z-10 absolute top-0 w-full h-screen bottom-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/76738589-55fe-4402-b729-fe5d2b3b16c6/US-es-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
    </div>
  );
}
