export const Card = ({ title, description, year, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group hover:bg-gradient-to-tr hover:from-cyan-100 hover:to-cyan-500 hover:bg-clip-text hover:translate-x-9 hover:text-transparent transition-transform ease-linear w-fit my-1"
    >
      <div className="text-2xl group-hover:text-2xl transition-all ease-out">
        {">"} {title}
      </div>
      <div className="text-sm">{description}</div>
      <div className="text-xs italic">{year}</div>
    </a>
  );
};
