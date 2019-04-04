function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener(eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent('on' + eventType, handler);
}

var selectOnChange = {
    "nameOnChange": function (element,target) {
        
        addEventHandler(element, 'keyup', function () {
            document.querySelector(target).innerHTML = this.value
        });
    },
    "colorOnChange": function (element,target) {
        addEventHandler(element, 'change', function () {
            let valueFormatted = this.value.replace('#','')
            document.querySelector(target).setAttribute('data-color', `color--${valueFormatted}`)
        });
    },
    "fontOnChange": function (element,target) {
        addEventHandler(element, 'change', function () {
            let valueFormatted = this.value.replace('+','')
            document.querySelector(target).setAttribute('data-font', `font--${valueFormatted}`)
        });
    },
    "breedOnChange": function (element,target) {
        addEventHandler(element, 'change', function () {
            axios.get(`https://dog.ceo/api/breed/${this.value}/images/random`).then(function (response) {
                var image = response.data.message
                var imageLoaded = document.querySelector(`${target} .image__dog`)
                

                if(imageLoaded){
                    document.querySelector(target).removeChild(imageLoaded)
                }
                document.querySelector(target).insertAdjacentHTML('afterbegin', `<div class="image__dog"><img src="${image}"></div>`);
            })
        });
    }
}

export default selectOnChange;