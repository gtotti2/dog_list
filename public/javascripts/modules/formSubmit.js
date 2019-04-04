function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener(eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent('on' + eventType, handler);
}


var serialize = function (form) {

    var serialized = {};

    for (var i = 0; i < form.elements.length; i++) {

        var field = form.elements[i];

        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized[field.name] = field.options[n].value
            }
        }

        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized[field.name] = field.value
        }
    }
    return serialized;

};

function setLocalStorage(form) {
    var info = serialize(form)

    var localStorageInfo = {
        "info": info,
        "data": new Date(),
        "hasDataStored": true
    }

    localStorage.data = JSON.stringify(localStorageInfo)
    var stored = JSON.parse(localStorage.data).hasDataStored

    if(stored){
        document.querySelector('.box__message').classList.add('show')
    }
    setTimeout(function(){ document.querySelector('.box__message').classList.remove('show') }, 3000);
}

let form = document.querySelector('#form__dog')
addEventHandler(form, 'submit', function (e) {
    e.preventDefault()
    setLocalStorage(form)
});
export default addEventHandler;