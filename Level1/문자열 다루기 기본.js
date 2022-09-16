function solution() {
  const s = "a234";
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((c) => !isNaN(c));
  } else {
    return false;
  }
}
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

solution();
