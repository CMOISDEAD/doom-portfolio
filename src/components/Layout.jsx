// import { Outlet } from "react-router-dom"
import moment from "moment";
import { Links } from "./Links";
import { Social } from "./Social";
import { Timer } from "./Timer";

export const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="inline-flex gap-2 absolute top-10 left-10 font-mono text-sm">
          DOOM5D4Y — <Social />
        </div>
        <div className="absolute right-10 bottom-10 font-mono text-sm">
          Last update {moment("20230311", "YYYYMMDD").fromNow()}
        </div>
        <div className="absolute top-28 left-11 right-44 special">
          {children}
        </div>
        <div className="absolute bottom-20 right-10">
          <Links />
        </div>
      </div>
    </>
  );
};
