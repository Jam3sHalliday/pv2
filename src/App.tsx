// import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

import Introduction from "./pages/introduction";
import About from "./pages/about";

import './App.css';
import Experience from "./pages/projects";
import Companies from "./pages/company";
import Footer from "./pages/footer";
import WorkingOnIt from "./pages/not-supported";

function App() {
  const [isAvailable, setIsAvailable] = useState(true);

  const onMouseHover = () => {
    gsap.to('.cursor', { width: '0', height: '0' });
    gsap.to('.cursor-follower', {
      width: '40px',
      height: '40px',
    })
  }

  function onMouseHoverOut() {
    gsap.to('.cursor', { width: '12px', height: '12px' });
    gsap.to('.cursor-follower', {
      width: '60px',
      height: '60px'
    })
  }

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    const hoverables = document.querySelectorAll('.hoverable');

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

    if (hoverables && hoverables.length) {
      for (let i = 0; i < hoverables.length; i++) {
        hoverables[i].addEventListener('mouseenter', onMouseHover);
        hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
      }
    }

    window.addEventListener("mousemove", function (e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsAvailable(false)
    }
  }, []);

  if (!isAvailable) return <WorkingOnIt />

  return (
    <>
        <div className="cursor-container relative">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      <div className="relative app_container">


        <Introduction />
        <About />
        <Companies />
        <Experience />
        <Footer />

        {/* <PlatformLink /> */}
      </div>
    </>
  );
}

export default App;
