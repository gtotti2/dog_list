import {populateBreedsSelect} from './modules/populateBreedsSelect.js'

import selectOnChange from './modules/selectOnChange.js'


(function () {
  function init() {
    function onSuccess(info) {
      let selectColor = document.querySelector('#select__colors')
      let selectBreed = document.querySelector('#select__breeds')
      let selectFont = document.querySelector('#select__fonts')
      let typeName = document.querySelector('#type__name')
      
      populateBreedsSelect(info.data,selectBreed)

      selectOnChange.colorOnChange(selectColor)
      selectOnChange.breedOnChange(selectBreed,'.box__image')
      selectOnChange.fontOnChange(selectFont)
      selectOnChange.nameOnChange(typeName,'.image__name')
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