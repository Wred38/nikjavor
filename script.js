function getAge(birthDate, span){
  let dob = new Date(birthDate); // string, month/day/year, example = '00/00/0000'
  let month_diff = new Date() - dob.getTime();
  let age_dt = new Date(month_diff);
  let year = age_dt.getUTCFullYear();
  let age = Math.abs(year - 1970);
  document.querySelector(span).textContent = age // string, class or id, example = '.my-age' 
}

function getCurrentYear(span){
  let year = new Date().getFullYear()
  console.log(year)
  document.querySelector(span).textContent = year // string, class or id, example = '.current-year' 
}