const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  let results = [];
  fruit.forEach((i) =>{
   if(i.toUpperCase().includes(str.toUpperCase()) ){
    results.push(i)
   }
  })
  return results
 
}

function searchHandler(e) {
 let inputVal = e.target.value.toUpperCase()
 let results = search(inputVal)
 showSuggestions(results, inputVal)
}
 

function showSuggestions(results, inputVal) {

 
// How could I use create and append
// for(let i = 0; i < results.length; i++){
//   let listItem = document.createElement('li')
//   listItem.innerHTML = results[i]
//    suggestions.appendChild(listItem)
//   }

let list = '';
for (let i = 0; i < results.length; i++) {
  list += `<li>${results[i]}</li>`;
}
suggestions.innerHTML = list;
  if(inputVal.length > 0){
    suggestions.style.display = 'block';

  }
  if(!inputVal.length > 0){
    suggestions.style.display = 'none';
    }
    
}

//function for bold text in list



function useSuggestion(e) {
  if(e.target.tagName === 'LI'){
    let suggestion = e.target.innerText
    input.value = suggestion;
    suggestions.style.display = 'none';
  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

