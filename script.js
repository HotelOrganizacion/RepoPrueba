    document.addEventListener('DOMContentLoaded', function() {
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

  const togglePassword = document.getElementById('togglePassword');
  togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

  
  createParticles();
  
  const loginContainer = document.getElementById('loginContainer');
  setTimeout(() => {
    loginContainer.classList.add('visible');
  }, 300);

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
  
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.querySelector('.login-btn');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
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
      loginBtn.textContent = 'Iniciando sesión...';
      loginBtn.disabled = true;
      
      setTimeout(() => {
        const success = false; // Simulación
        if (!success) {
          alert('Error: Credenciales incorrectas.');
          loginBtn.textContent = 'Iniciar Sesión';
          loginBtn.disabled = false;
          return;
        }
      
        alert('¡Inicio de sesión exitoso! Bienvenido al Hotel Luxe.');
        loginBtn.textContent = 'Iniciar Sesión';
        loginBtn.disabled = false;
        loginForm.reset();

        
        emailValidation.textContent = '';
        emailValidation.classList.remove('error', 'success');
        passwordValidation.textContent = '';
        passwordValidation.classList.remove('error', 'success');

      }, 1500);

    }
  });
  

  formInputs.forEach(input => {
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      loginForm.dispatchEvent(new Event('submit'));
    }
  });
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
// cambios
// Rodrigo Gay
// Rosamelano 
// Perritas