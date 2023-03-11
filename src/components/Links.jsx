import React from "react";
import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div>
      <ul>
        {[
          {
            name: "HOME",
            path: "/",
          },
          {
            name: "PROJECT",
            path: "/project",
          },
          {
            name: "CONTACT",
            path: "/contact",
          },
        ].map(({ name, path }, i) => (
          <li key={i}>
            <Link
              to={path}
              className="text-xl font-bold hover:bg-gradient-to-tr hover:from-cyan-100 hover:to-cyan-500 hover:bg-clip-text hover:translate-x-5 hover:text-transparent w-fit"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
