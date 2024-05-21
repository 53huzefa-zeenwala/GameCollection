const date = new Date();

function changeNumber(number) {
    const num = number.toString()
    if (num.length === 1) return `0${num}`;
  else return num;
}

export const day = changeNumber(date.getDate())

export const month = changeNumber(date.getMonth() + 1)
export const year = date.getFullYear();
