
// ! object method call
const registrationModal = $.modal()
const loginModal = $.logModal()


// ! variables for registration

let arrUser = []
let registrationForm = document.querySelector('.modal-window__body')
let name = document.querySelector('[name="name"]')
let age = document.querySelector('[name="age"]')
let password  = document.querySelector('[name="password"]')
let userName  = document.querySelector('[name="username"]') 

// ! variables for login
let buttonsFormLogin = document.querySelector('.modal-window__body--login')
let formLogin = document.querySelector('.incorrect-user')
let passwordLogin  = document.querySelector('[name="login-password"]')
let userNameLogin  = document.querySelector('[name="login"]')
let ourUser
let mainWindow = document.querySelector('.container')

// ! main window
let choiceButton = document.querySelector('.choice')
choiceButton.addEventListener('click',event => {
    if(event.target.classList.contains('btn-primary')) {
       registrationModal.open()
    }
    else if(event.target.classList.contains('btn-dark')){
        loginModal.open()
    }
})

// ! work with registration

registrationForm.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.classList.contains('modal-window__send')){
        getInformation()
        
    } else if (event.target.classList.contains('modal-window__cancel')){
        registrationModal.close()
    }
})

function getInformation() {
    let userData = new User(name.value, age.value, password.value, userName.value)
    if(!userData.name || !userData.age || !userData.password || !userData.login) {
        let emptyUser  = document.createElement('p')
        emptyUser.innerHTML = userAlerts.emptyData
        registrationForm.append(emptyUser)
    } else {
        arrUser.push(userData)
        registrationModal.close()
    }
}

function User(name, age, password, userName){
    this.name = name
    this.age = age
    this.password = password
    this.login = userName   
}

// ! work with login

buttonsFormLogin.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.classList.contains('modal-window__send--login')){
        getLoginInformation()
    } else if (event.target.classList.contains('modal-window__cancel--login')){
        loginModal.close()
    }
})

function getLoginInformation() { 
    for (let i of arrUser) {
        if ( i.login === userNameLogin.value && i.password === passwordLogin.value){
            ourUser = i
            loginModal.close()
            showinfoUser()
        } else {
            let incorrectUser  = document.createElement('p')
            incorrectUser.innerHTML = userAlerts.incorectUser
            formLogin.append(incorrectUser)
        }
    }
}

function showinfoUser() {
    mainWindow.classList.add('close')
    let title = document.createElement('p')
    title.classList.add('successful-login')
    title.append(userAlerts.succsessLog)
    document.body.append(title)
    for(let key in ourUser) {
        let userFields = document.createElement('p')
        let textUserFields = ourUser[key]
        userFields.innerHTML = textUserFields
        document.body.append(userFields)
    }
}








