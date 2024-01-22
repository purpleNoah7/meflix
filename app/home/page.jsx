"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Home = () => {
  useEffect(() => {
    const loggedInUser = Cookies.get("loggedInUser");

    // Si no hay un usuario logueado, redirige a la página de inicio de sesión.
    if (!loggedInUser) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <h2 className="text-7xl font-black">EN DESARROLLO</h2>
      {/* 
      <img
        className="w-full h-full brightness-75 absolute -z-10 top-0"
        src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABckzanyZOZ5Lt-WCtQr493oTyCLcJQXEC8DFdBF9L_lvgA3eXDD0TI3bZ1niGQk-IoDHXPnGjDlOeAO0PyJlB4oUtDYAHBLvt0DQ.jpg?r=c9c"
        alt=""
      />
      <section className="min-h-screen h-full w-full p-10 flex flex-col">
        <div className="flex items-center ">
          <img
            className=""
            src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeMHwDJgw7GoIm7azhcDWMSXDqSaAgKusdExS4uz9QIPEm0vNqlm9Q4DsTReCuGToXAEdyH6iKjFRIHe49Lpk7EZH7C-iKiXll-JvzMSx4k1.png?r=91a"
            alt=""
          />
        </div>  
        <div className="flex flex-col justify-center h-[400px]">
          <h2 className="text-white font-bold text-6xl">No 10 en Vistas Hoy</h2>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
