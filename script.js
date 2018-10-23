'use strict';
let cssInput = document.getElementById('cssInput');
let cssOutput = document.getElementById('cssOutput');
let standartFontSize = document.getElementById('standart-font-size');
cssInput.oninput = convert;
standartFontSize.oninput = convert;

function convert(){
  let css = cssInput.value;
  let arr = css.split('\n');

  arr.forEach(function(item, i){
    if(~item.indexOf('font-size:')){
      let start = item.indexOf('font-size')
      arr[i] = item.slice(0, start)+'font-size: '+parseInt(item.slice(start+10))/standartFontSize.value;+'rem;';
     };
   });

   cssOutput.value = arr.join('\n');
}

function copy(){
  cssOutput.select();
  document.execCommand('copy');
}
