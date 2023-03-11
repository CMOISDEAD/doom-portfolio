import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { BreadCrumb } from "../components/BreadCrumb";
import { useState } from "react";

const data = {
  frontend: [
    {
      title: "DOOM-READER / Electron Library",
      description: "Book manager application built with web technology",
      date: "2023",
      link: "#",
    },
    {
      title: "DOOM-LOG / Personal Blog",
      description: "Ultimate dev blog",
      date: "2023",
      link: "#",
    },
    {
      title: "Marked / Markdown note app",
      description: "Markdown powered note app special designed for CS student",
      date: "2023",
      link: "#",
    },
  ],
  backend: [
    {
      title: "PyNews / HackerNews reader",
      description: "Terminal app to read HackerNews like a Hacker",
      date: "2023",
      link: "#",
    },
    {
      title: "0_Drive / Intranet storage",
      description: "Storage service like Drive but running on a intranet",
      year: "2021",
      link: "#",
    },
  ],
  mobile: [
    {
      title: "TODO / React Native App",
      description: "React native app to manage to-dos",
      date: "2023",
      link: "#",
    },
  ],
};

export const Project = () => {
  const [list, setList] = useState(data.frontend);
  return (
    <Layout>
      <div>
        <div className="text-6xl text-white font-bold special">PROJECTS</div>
        <BreadCrumb callback={setList} data={data} />
        <div className="flex flex-col gap-4">
          {list.map((item, i) => (
            <Card {...item} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
