
// import { ScrollTrigger } from "gsap/all";
import Introduction from "./components/introduction";
import About from "./components/about";
import './app.css';
import { useEffect } from "react";
import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    let posX = 0,
      posY = 0;

    let mouseX = 0,
      mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12
          }
        });

        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    window.addEventListener("mousemove", function (e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }, []);

  return (
    <div className="relative">
      <Introduction />
      <About />

      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </div>
  );
}

export default App;
