const stringTransformation = s => {
    const len = s.length;
    if (len % 15 === 0) return s.split('').reverse().join('').replace(/ /g, '');
    if (len % 3 === 0) return s.split('').reverse().join('').replace(/ /g, '');
    if (len % 5 === 0) return s.split('').map(c => c.charCodeAt()).join(' ');
    return s;
};

const inputs = ["Hamburger", "Pizza", "Chocolate Chip Cookie"];
inputs.forEach(s => console.log(stringTransformation(s)));
