export const Card = ({ title, description, year, link }) => {
  return (
    <a className="text-white hover:text-red-500 hover:translate-x-5 transition-all ease-linear" href={link} target="_blank">
      <div className="text-2xl">{'>'} {title}</div>
      <div className="text-sm">{description}</div>
      <div className="text-xs italic">{year}</div>
    </a>
  )
};
