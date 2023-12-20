var intentosRestantes = 3;
    var bloqueado = false;

    function login() {
        if (bloqueado) {
            $('#lockModal').modal('show');
            return;
        }

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;


        if (username === "usuario" && password === "contraseña") {
            alert("¡Inicio de sesión exitoso!");


            window.location.href = 'autenticador.html';
        } 
        if (username === "usuario" && password === "IsabelT2005") {
            alert("¡Inicio de sesión exitoso!");

        
            window.location.href = 'autenticador.html';
        } 
        else {
            intentosRestantes--;

            if (intentosRestantes > 0) {
                alert("Intenta de nuevo. " + intentosRestantes + " intentos restantes.");
            } else {
                bloquearPagina();
            }
        }
    }

    function bloquearPagina() {
        bloqueado = true;
        $('#lockModal').modal({
            backdrop: 'static',
            keyboard: false
        });

        // Inicia el contador regresivo
        var minutos = 5;
        var segundos = minutos * 60;

        var intervalo = setInterval(function () {
            var minutosRestantes = Math.floor(segundos / 60);
            var segundosRestantes = segundos % 60;

            var tiempoRestante = padLeft(minutosRestantes, 2) + ':' + padLeft(segundosRestantes, 2);
            $('#contador').text(tiempoRestante);

            if (segundos === 0) {
                // Después de 5 minutos, reinicia los intentos y cierra el modal
                bloqueado = false;
                intentosRestantes = 3;
                $('#lockModal').modal('hide');
                alert("La página ahora está desbloqueada. Puedes intentar iniciar sesión de nuevo.");
                clearInterval(intervalo); // Detiene el intervalo
            }

            segundos--;
        }, 1000); // 1000 milisegundos = 1 segundo

        function padLeft(value, length) {
            return (value.toString().length < length) ? padLeft('0' + value, length) : value;
        }
    }