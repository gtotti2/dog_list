function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener(eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent('on' + eventType, handler);
}

var selectOnChange = {
    "nameOnChange": function (element,target) {
        
        addEventHandler(element, 'keyup', function () {
            
            if (this.value.length > 1) {
                document.querySelector(target).innerHTML = this.value
           }
        });
    },
    "colorOnChange": function (element) {
        addEventHandler(element, 'change', function () {
            console.log(this.value)
        });
    },
    "fontOnChange": function (element) {
        addEventHandler(element, 'change', function () {
            console.log(this.value)
        });
    },
    "breedOnChange": function (element,target) {
        addEventHandler(element, 'change', function () {
            axios.get(`https://dog.ceo/api/breed/${this.value}/images/random`).then(function (response) {
                var image = response.data.message
                var imageLoaded = document.querySelector(target)
                console.log(imageLoaded)

                if(document.querySelector(target).hasChildNodes()){
                    document.querySelector(target).removeChild(imageLoaded)
                }
                document.querySelector(target).insertAdjacentHTML('beforeend', `<img src="${image}">`);
            })
        });
    }
}

export default selectOnChange;