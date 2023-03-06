import React from 'react'
import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div>
      <ul>
        {[{
          name: "HOME",
          path: "/"
        }, {
          name: "PROJECT",
          path: "/project"
        }, {
          name: "CONTACT",
          path: "/contact"
        }].map(({ name, path }, i) => (
          <li key={i}>
            <Link to={path} className="text-xl font-bold hover:text-red-500 transition-all ease-linear">{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
