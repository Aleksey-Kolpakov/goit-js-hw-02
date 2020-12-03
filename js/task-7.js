const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    
    const loginValidity = login.length <= 16 && login.length >= 4;
    // console.log(loginValidity);
    return loginValidity;
   
};

const isLoginUnique = function(allLogins, login) {
  // твой код.includes(x)
    const LoginUniq = allLogins.includes(login) ? false : true;
    // console.log(LoginUniq);
    return LoginUniq;
};

const addLogin = function(allLogins, login) {
    if (isLoginValid(login) === false) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    }
    if (isLoginUnique(allLogins, login) === false) {
         console.log('Такой логин уже используется!');
        return;
    }
    allLogins.push(login);
    console.log(allLogins);
    console.log('Логин успешно добавлен!');
    return;
}



console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'