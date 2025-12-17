import { useEffect, useRef } from "react";

const SnowParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const snowflakes = [];
    const COUNT =120;

    for (let i = 0; i < COUNT; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1.5,   // dot size
        speed: Math.random() * 0.6 + 0.4,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((f) => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${f.opacity})`;
        ctx.fill();

        f.y += f.speed;

        // slight horizontal drift
        f.x += Math.sin(f.y * 0.01) * 0.2;

        if (f.y > canvas.height) {
          f.y = -5;
          f.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default SnowParticles;
