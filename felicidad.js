document.addEventListener('DOMContentLoaded', function() {
      // Crear partículas para el fondo
      function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 40;
        
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          
          const size = Math.random() * 15 + 5;
          const posX = Math.random() * 100;
          const delay = Math.random() * 15;
          const duration = Math.random() * 20 + 10;
          
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}vw`;
          particle.style.animationDelay = `${delay}s`;
          particle.style.animationDuration = `${duration}s`;
          
          particlesContainer.appendChild(particle);
        }
      }
      
      // Crear confeti
      function createConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        const confettiCount = 100;
        const colors = ['#c6a972', '#0a4a6d', '#e67e22', '#2ecc71', '#9b59b6'];
        
        for (let i = 0; i < confettiCount; i++) {
          const confetti = document.createElement('div');
          confetti.classList.add('confetti');
          
          const size = Math.random() * 12 + 5;
          const posX = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 3 + 3;
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          confetti.style.width = `${size}px`;
          confetti.style.height = `${size}px`;
          confetti.style.left = `${posX}vw`;
          confetti.style.animationDelay = `${delay}s`;
          confetti.style.animationDuration = `${duration}s`;
          confetti.style.backgroundColor = color;
          
          if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
          } else if (Math.random() > 0.7) {
            confetti.style.transform = 'rotate(45deg)';
          }
          
          confettiContainer.appendChild(confetti);
        }
      }
      
      createParticles();
      createConfetti();
      
      const message = document.querySelector('.message');
      const originalText = message.innerHTML;
      message.innerHTML = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < originalText.length) {
          message.innerHTML += originalText.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        }
      };
      
      setTimeout(typeWriter, 1000);
    });