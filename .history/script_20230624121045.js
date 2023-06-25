function is_usZipCode(str) {
  let regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (regex.test(str)) {
    return true;
  }
  return false;
}
// var zipcode = “03201 - 2150”;
// console.log(is_usZipCode(zipcode));
let zipcode = 32013 - 2150;
console.log(is_usZipCode(zipcode));
