document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validar credenciales (esto es solo un ejemplo, debes implementar tu propia lógica de validación)
    if (username === "usuario" && password === "contraseña") {
      document.getElementById("loginMessage").innerText = "Login successful";
      // Aquí puedes redirigir a otra página o realizar otras acciones después del inicio de sesión exitoso
    } else {
      document.getElementById("loginMessage").innerText = "Invalid username or password";
    }
  });