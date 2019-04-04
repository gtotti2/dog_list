import { populateBreedsSelect } from './modules/populateBreedsSelect.js'

import selectOnChange from './modules/selectOnChange.js'

import setInfoStored from './modules/formSubmit.js'


(function () {
  function init() {
    function onSuccess(info) {
      let selectColor = document.querySelector('#select__colors')
      let selectBreed = document.querySelector('#select__breeds')
      let selectFont = document.querySelector('#select__fonts')
      let typeName = document.querySelector('#type__name')

      populateBreedsSelect(info.data, selectBreed)

      selectOnChange.colorOnChange(selectColor, '.image__name')
      selectOnChange.breedOnChange(selectBreed, '.box__image')
      selectOnChange.fontOnChange(selectFont, '.image__name')
      selectOnChange.nameOnChange(typeName, '.image__name')

      if (JSON.parse(localStorage.data).hasDataStored) {
        var fields = JSON.parse(localStorage.data).info
        for (const name in fields) {
          if (fields.hasOwnProperty(name)) {
            const field = fields[name];
            var element = document.querySelector(`[name="${name}"]`)
            element.value = field

            var eventChange = document.createEvent('HTMLEvents');
            eventChange.initEvent('change', true, false);

            var eventKeyUp = document.createEvent('HTMLEvents');
            eventKeyUp.initEvent('keyup', true, false);

            if (element.type == 'text') {
              element.dispatchEvent(eventKeyUp);
            } else {
              element.dispatchEvent(eventChange);
            }

          }
        }
      }
    }

    function onFail(error) {
      console.log(error);
    }

    function getDataInfo(url) {
      axios.get(url).then(function (response) {
        onSuccess(response);
      }).catch(function (error) {
        onFail(error);
      });
    }


    getDataInfo('./dogs/');

  }

  init();
})();