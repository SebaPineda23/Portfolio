import React, { useRef } from 'react';
import DejaTuMensaje from '../components/DejaTuMensaje/DejaTuMensaje'
import HardSkills from '../components/HardSkills/HardSkills'
import Presentation from '../components/Presentation/Presentation'
import Proyectos from '../components/Proyectos/Proyectos'
import SobreMi from '../components/SobreMi/SobreMi'
import SoftSkills from '../components/SoftSkills/SoftSkills'

const HomePage: React.FC = () => {
  const componente2Ref = useRef<HTMLDivElement | null>(null);
  const componenteSoftSkillsRef = useRef<HTMLDivElement | null>(null);
  const componenteHardSkillsRef = useRef<HTMLDivElement | null>(null);
  const componenteProyectosRef = useRef<HTMLDivElement | null>(null);

  const scrollToSobreMi = () => {
    if (componente2Ref.current) {
      componente2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSoftSkills = () => {
    if (componenteSoftSkillsRef.current) {
      componenteSoftSkillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHardSkills = () => {
    if (componenteHardSkillsRef.current) {
      componenteHardSkillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProyectos = () => {
    if (componenteProyectosRef.current) {
      componenteProyectosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <Presentation scrollToSobreMi={scrollToSobreMi}/>
    <div ref={componente2Ref}>
    <SobreMi scrollToSoftSkills={scrollToSoftSkills} scrollToHardSkills={scrollToHardSkills} scrollToProyectos={scrollToProyectos}/>
    </div>
    <div ref={componenteSoftSkillsRef}>
    <SoftSkills/>
    </div>
    <div ref={componenteHardSkillsRef}>
    <HardSkills />
    </div>
    <div ref={componenteProyectosRef}>
    <Proyectos/>
    </div>
    <DejaTuMensaje/>
    </>
  )
}

export default HomePage
