export function populateBreedsSelect(breeds,element) {
  element.insertAdjacentHTML('beforeend','<option value="" disabled selected>Selecione a raça do cachorrro</option>');
  for (const key in breeds) {
    if (breeds.hasOwnProperty(key)) {
      const breed = breeds[key];
      const sub_breeds = []
      breed.forEach((sub_breed, index) => {
        sub_breeds[index] = `<option value="${key}-${sub_breed}">${sub_breed} ${key}</option>`
      });

      var optgroup = `
              <optgroup label="${key}">
                ${sub_breeds.join('')}
              </optgroup>`
      var option = `<option value="${key}">${key}</option>`

      element.insertAdjacentHTML('beforeend', Object.getOwnPropertyNames(breed).length > 1 ? optgroup : option);
    }
  }
}
