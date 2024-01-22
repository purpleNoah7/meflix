"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect } from "react";

const profiles = [
  {
    id: 1,
    name: "Patra",
    img: "https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABT8hsbUYtNU6BkypoMU1FRAH8Zejgi3z9ZIECaWdogyemQlIweCZyHMjzwROzBb4em_CBMrUzp0Qyds_s86vI8S8kAn1B9rGfY10.png?r=5c1",
  },
  {
    id: 2,
    name: "Assasin",
    img: "https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuhdKMxXJSu43QE6yEI5TPImvXOGmXcUW6ymziGUPXVQSCUtl4YYIUxMZDHNiXF7ZLaqpxG1d51h9I2UEN9CF4M_u1r7o9WF7ke.png?r=823",
  },
  {
    id: 3,
    name: "Naruto",
    img: "https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABawqcvad6Ircyxxgoy-KNWimTWFn9QBccxGj7D5-u2yqOia6kTJUa7OigXYROnA8XwfnAUqE8nX3mr3M7OgXlq7O0tgcsxcDu6xE.png?r=ff8",
  },
];

export default function ProfilePage() {
  useEffect(() => {
    const loggedInUser = Cookies.get("loggedInUser");

    // Si no hay un usuario logueado, redirige a la página de inicio de sesión.
    if (!loggedInUser) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="w-full h-screen  flex items-center justify-center bg-neutral-900">
      <div className="flex flex-col items-center  justify-center gap-10">
        <h2 className="text-white font-bold text-6xl text-center">
          ¿Quién está viendo ahora?
        </h2>
        <div className="flex gap-12">
          {profiles.map((profile) => (
            <Link
              href={"/home"}
              key={profile.id}
              className=" flex group items-center   justify-center  flex-col w-52 h-52"
            >
              <img
                src={profile.img}
                alt={profile.name}
                className=" group-hover:border-white hover:border-2 object-cover rounded-lg "
              />
              <span className="text-neutral-500 text-3xl group group-hover:text-white rounded-md ">
                {profile.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
