import { Layout } from "../components/Layout";

export const Home = () => {
  return (
    <Layout>
      <div className="text-6xl py-3 font-bold">CMOISDEAD PORTFOLIO</div>
      <div className="text-4xl">About Me</div>
      <div className="py-5">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </div>
      <div className="text-4xl title">Skills</div>
      <div className="my-5 flex flex-col gap-4">
        <ul className="list-disc ml-9 text-md">
          <li>HTML/CSS</li>
          <li>Javascript/Typescript</li>
          <li>React/Vue/Svelte</li>
          <li>Next/Nuxt/SvelteKit</li>
          <li>Linux/Terminal</li>
          <li>Git/Github</li>
          <li>Node.js/Express.js/Nest.js</li>
          <li>Flask/Django</li>
          <li>Tailwind/Bootstrap/MaterialUI</li>
        </ul>
      </div>
    </Layout>
  );
};
