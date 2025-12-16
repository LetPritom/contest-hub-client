import LineParticles from "./LineParticles";

const LineParticlesFixed = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ height: "100vh", width: "100vw" }}
    >
      <LineParticles />
    </div>
  );
};

export default LineParticlesFixed;
