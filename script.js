(function(){
  // Menú móvil
  var btnMenu = document.getElementById('btn-menu');
  var menu = document.getElementById('menu-principal');
  btnMenu.addEventListener('click', function(){
    var abierto = menu.classList.toggle('abierto');
    btnMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  // Toolbar de accesibilidad
  var btnTexto = document.getElementById('btn-texto');
  var btnContraste = document.getElementById('btn-contraste');

  btnTexto.addEventListener('click', function(){
    var activo = document.body.classList.toggle('texto-grande');
    btnTexto.setAttribute('aria-pressed', activo ? 'true' : 'false');
  });
  btnContraste.addEventListener('click', function(){
    var activo = document.body.classList.toggle('contraste-alto');
    btnContraste.setAttribute('aria-pressed', activo ? 'true' : 'false');
  });

  // Contador animado del balance de ejemplo (respeta reduced motion)
  var balanceEl = document.getElementById('balance-demo');
  var target = 165500;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function formatear(n){
    return '$ ' + Math.round(n).toLocaleString('es-AR');
  }
  if (reduce) {
    balanceEl.textContent = formatear(target);
  } else {
    var start = null;
    var duracion = 1100;
    function paso(ts){
      if (!start) start = ts;
      var progreso = Math.min((ts - start) / duracion, 1);
      var valor = target * (1 - Math.pow(1 - progreso, 3));
      balanceEl.textContent = formatear(valor);
      if (progreso < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  // Validación accesible del formulario
  var form = document.getElementById('form-contacto');
  var status = document.getElementById('form-status');

  function setError(id, msg){
    document.getElementById(id).textContent = msg || '';
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var mensaje = document.getElementById('mensaje');
    var valido = true;

    setError('nombre-error', ''); setError('email-error', ''); setError('mensaje-error', '');

    if (!nombre.value.trim()) {
      setError('nombre-error', 'Ingresá tu nombre.');
      valido = false;
    }
    var emailOk = /\S+@\S+\.\S+/.test(email.value);
    if (!emailOk) {
      setError('email-error', 'Ingresá un correo electrónico válido.');
      valido = false;
    }
    if (!mensaje.value.trim()) {
      setError('mensaje-error', 'Escribí tu mensaje.');
      valido = false;
    }

    if (!valido) {
      status.textContent = '';
      var primerError = form.querySelector('[role="alert"]:not(:empty)');
      if (primerError) {
        var campo = primerError.previousElementSibling;
        if (campo && campo.focus) campo.focus();
      }
      return;
    }

    status.textContent = '¡Gracias, ' + nombre.value.trim() + '! Recibimos tu mensaje y te vamos a responder a la brevedad.';
    form.reset();
  });
})();