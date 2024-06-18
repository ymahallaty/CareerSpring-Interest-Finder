export function objValuesToString(obj){
   let str = "";
   //loop through object take key and stringify answers object
   Object.keys(obj).forEach(
    key => {
        str+=obj[key].toString();
    }
   )
   return str;
}