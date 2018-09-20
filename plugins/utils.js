export default class Utils {
  /*
  * сортировка
  * extractor - название колонки (если это массив объектов)
  * reverse - default=false сортировать в обратном порядке
  * */
 static sort (array, extractor, reverse) {

  if (!(array instanceof Array)) {
   return array;
  }

  extractor = extractor || null;
  reverse = reverse || false;

  if (extractor) {
   return sortWithExtractor(array, extractor, reverse);
  } else {
   return sort(array, reverse);
  }

  function sort(array, reverse) {
   var data = array.slice().sort();

   if (reverse) {
    data = data.reverse();
   }

   return data;
  }

  function sortWithExtractor(array, element, reverse) {

   var data = array.slice().sort(function (i, ii) {
    if (i[element] > ii[element]) {
     return 1;
    } else if (i[element] < ii[element]) {
     return -1;
    } else {
     return 0;
    }
   });

   if (reverse) {
    data = data.reverse();
   }

   return data;
  }
 }
}
