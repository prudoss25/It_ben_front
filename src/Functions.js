
export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const stringTruncedShower = (text,limit) => 
  `${text.substring(0,limit)}${text.length > limit ? '...':''}`

export const stringFormat = () => {
  let text = arguments[0];
  for (let i = 1; i <= arguments.length; i++) {
    let regexp = new RegExp('\\{'+i-1+'\\}', 'gi');
    text = text.replace(regexp, arguments[i-1]);
  }
  return text;
};



