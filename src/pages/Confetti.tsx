import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {option} from "./options";

export default function Confetti() {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  const opt = option;

  return (
    <>

<Particles
      className="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options = {opt}
    />
    
    </>

  );
};
