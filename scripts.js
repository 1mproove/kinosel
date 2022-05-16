function reg() {
    const log = $('#login').val();
    const pas = $('#passw').val();
    const email = $('#email').val();

    $.ajax({
        method: "POST",
        url: "/api/reg.php",
        data: {
            login: log,
            password: pas,
            email: email
        },
        success: (data) => {
            if (data.response.error) {
                alert(`Ошибка: ${data.response.error}`)
            }
            if (data.response.text) {
                location.href = "/register.html";
            }
        }
    });
}

function login() {
    let log = $('#login').val()
    let pas = $('#passw').val()


    $.ajax({
        method: "POST",
        url: "/api/users.get.php",
        data: {
            login: log,
            password: pas
        },
        success: (data) => {
            if (data.response.error) {
                alert(`Ошибка: ${data.response.error}`)
            }
            // если такой пользователь есть
            if (data.response.text) {
                alert(`${data.response.text}`)

                let user = data.response.user;

                localStorage.setItem('login', user.login);
                localStorage.setItem('token', user.token);
                localStorage.setItem('expire', user.expire);
				localStorage.setItem('id', user.id);

                setTimeout(function () {
                    window.location.href='index.html';
                }, 1000);
            }
        }
    });
}