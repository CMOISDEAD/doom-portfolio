export const Timer = () => {
  return (
    <span className="countdown special text-2xl">
      <span style={{ "--value": 10 }}></span>:
      <span style={{ "--value": 24 }}></span>:
      <span style={{ "--value": 16 }}></span>
    </span>
  );
};
