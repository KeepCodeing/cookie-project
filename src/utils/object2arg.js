export default function (obj) {
  let res = "";
  let keys = Object.keys(obj);
  let olen = keys.length;
  for (let k = 0; k <  keys.length; k++) {
    res += keys[k] + '=' + obj[keys[k]];
    if (k !== olen - 1) res += '&';
  }
  return res;
}
