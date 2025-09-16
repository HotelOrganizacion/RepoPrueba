    document.addEventListener('DOMContentLoaded', function() {
  // Crear partículas para el fondo
  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 10 + 2;
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
  
  createParticles();
  
  // Mostrar contenedor con animación
  const loginContainer = document.getElementById('loginContainer');
  setTimeout(() => {
    loginContainer.classList.add('visible');
  }, 300);
  
  // Validación de email en tiempo real
  const emailInput = document.getElementById('email');
  const emailValidation = document.getElementById('emailValidation');
  
  emailInput.addEventListener('input', function() {
    if (!emailInput.value) {
      emailValidation.textContent = '';
      emailValidation.classList.remove('error', 'success');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
      emailValidation.textContent = 'Email válido';
      emailValidation.classList.remove('error');
      emailValidation.classList.add('success');
    } else {
      emailValidation.textContent = 'Por favor ingresa un email válido';
      emailValidation.classList.remove('success');
      emailValidation.classList.add('error');
    }
  });
  
  // Validación de contraseña en tiempo real
  const passwordInput = document.getElementById('password');
  const passwordValidation = document.getElementById('passwordValidation');
  
  passwordInput.addEventListener('input', function() {
    if (!passwordInput.value) {
      passwordValidation.textContent = '';
      passwordValidation.classList.remove('error', 'success');
      return;
    }
    
    if (passwordInput.value.length < 6) {
      passwordValidation.textContent = 'La contraseña debe tener al menos 6 caracteres';
      passwordValidation.classList.remove('success');
      passwordValidation.classList.add('error');
    } else {
      passwordValidation.textContent = 'Contraseña válida';
      passwordValidation.classList.remove('error');
      passwordValidation.classList.add('success');
    }
  });
  
  // Manejo del envío del formulario
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.querySelector('.login-btn');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación final antes de enviar
    let isValid = true;
    
    if (!emailInput.value) {
      emailValidation.textContent = 'El email es requerido';
      emailValidation.classList.add('error');
      isValid = false;
    }
    
    if (!passwordInput.value) {
      passwordValidation.textContent = 'La contraseña es requerida';
      passwordValidation.classList.add('error');
      isValid = false;
    }
    
    if (isValid) {
      // Simulación de inicio de sesión exitoso
      loginBtn.textContent = 'Iniciando sesión...';
      loginBtn.disabled = true;
      
      setTimeout(() => {
        alert('¡Inicio de sesión exitoso! Bienvenido al Hotel Luxe.');
        loginBtn.textContent = 'Iniciar Sesión';
        loginBtn.disabled = false;
        loginForm.reset();
        
        // Limpiar mensajes de validación
        emailValidation.textContent = '';
        emailValidation.classList.remove('error', 'success');
        passwordValidation.textContent = '';
        passwordValidation.classList.remove('error', 'success');
      }, 1500);
    }
  });
  
  // Efecto de focus en los inputs
  const formInputs = document.querySelectorAll('input');
  
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.querySelector('label').style.transform = 'translateY(-5px) scale(0.9)';
      this.parentElement.querySelector('label').style.color = 'var(--color-primary)';
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.querySelector('label').style.transform = 'translateY(0) scale(1)';
        this.parentElement.querySelector('label').style.color = 'var(--color-primary)';
      }
    });
  });
});