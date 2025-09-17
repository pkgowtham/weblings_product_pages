import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType.ts";

export const usestyles = createUseStyles((theme: Theme) => ({
  svgContainer: {
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    padding: '20px'
  },
  movingParticle: {
    animation: '$moveAlongPath 8s linear infinite'
  },
  movingParticleFallback: {
    animation: '$moveAlongPathFallback 8s linear infinite'
  },
  '@keyframes moveAlongPath': {
    '0%': {
      offsetDistance: '0%'
    },
    '100%': {
      offsetDistance: '100%'
    }
  },
  '@keyframes moveAlongPathFallback': {
    '0%': { 
      transform: 'translate(72px, 0px)', 
      opacity: 0.8 
    },
    '5%': { 
      transform: 'translate(100px, 30px)', 
      opacity: 1 
    },
    '15%': { 
      transform: 'translate(127px, 238px)', 
      opacity: 1 
    },
    '25%': { 
      transform: 'translate(186px, 350px)', 
      opacity: 1 
    },
    '35%': { 
      transform: 'translate(300px, 450px)', 
      opacity: 1 
    },
    '45%': { 
      transform: 'translate(500px, 514px)', 
      opacity: 1 
    },
    '55%': { 
      transform: 'translate(633px, 580px)', 
      opacity: 1 
    },
    '65%': { 
      transform: 'translate(800px, 535px)', 
      opacity: 1 
    },
    '75%': { 
      transform: 'translate(950px, 520px)', 
      opacity: 1 
    },
    '85%': { 
      transform: 'translate(1100px, 400px)', 
      opacity: 1 
    },
    '95%': { 
      transform: 'translate(1200px, 200px)', 
      opacity: 1 
    },
    '100%': { 
      transform: 'translate(1238px, 0px)', 
      opacity: 0.8 
    }
  }

}));
