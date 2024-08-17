const num = Math.ceil(Math.random() * 10);

// related eslint rule: curly
if (num % 2 === 0) console.log(`${num} is even`);
else console.log(`${num} is odd`);
