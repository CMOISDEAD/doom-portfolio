// import { Outlet } from "react-router-dom"
import { Links } from "./Links";
import { Social } from "./Social";

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
        <div
          className="inline-flex gap-2"
          style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
        >
          PORTFOLIO —  <Social />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: "13px",
          }}
        >
          {Date.now()}
        </div>
        <div className="absolute top-28 left-12">
          {children}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 100,
            right: 40,
            fontSize: "13px",
          }}
        >
          <Links />
        </div>
      </div>
    </>
  )
}
