// ! make form for Registration
function _createModal() {
    const modal = document.createElement('div')
    modal.classList.add('amodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-window__header">
                <span class="modal-window__title" >title</span>  
            </div>
            <form class="modal-window__body">
                <input class="modal-window__input" name="username" type="text" value="login"></input>
                <input class="modal-window__input" name="name" type="text" value="name"></input>
                <input class="modal-window__input" name="age" type="text" value="age"></input>
                <input class="modal-window__input" name="password" type="password" value="password"></input>
                <input type="submit" value="отрпавить" class="modal-window__send"></input>
                <button class="modal-window__cancel">Cancel</button>
            </form>
        </div>
    </div>
    `)
    document.body.append(modal)
    return modal
}

$.modal = function() {
    const $modal = _createModal()
    return {
        open() {
            $modal.classList.add('open') 
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(()=> {
                $modal.classList.remove('hide')
            },200)
        },
    }
}

// ! make form for login
function _createLogModal() {
    const loginModal = document.createElement('div')
    loginModal.classList.add('amodal')
    loginModal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-window__header">
                <span class="modal-window__title" >title</span>
                <span class="modal-window__close">&times;</span>
            </div>
            <form class="body-style modal-window__body--login">
                <input class="modal-window__input" name="login" type="text" value="login"></input>
                <input class="modal-window__input" name="login-password" type="password" value="password"></input>
                <input type="submit" value="отрпавить" class="modal-window__send--login"></input>
                <button class="modal-window__cancel--login">Cancel</button>
            </form>
            <div class='incorrect-user'></div>
        </div>
    </div>
    `)
    document.body.append(loginModal)
    return loginModal
}

$.logModal = function() {
    const $logModal = _createLogModal()
    return {
        open() {
            $logModal.classList.add('open')  
        },
        close() {
            $logModal.classList.remove('open')
            $logModal.classList.add('hide')
            setTimeout(()=> {
                $logModal.classList.remove('hide')
            },200)
        },   
    }
    
}

