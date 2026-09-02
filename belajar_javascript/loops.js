//untuk menggunakan perulangan
for (let i = 0; i < 5; i++) {
  console.log ("Tomato",i);
}

//perulangan menggunakan if
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

//perulangan menggunakan while
let i = 0;
while (i < 10) {
    i++;
    if (i === 5) continue;
    console.log (i)
} 

//perulangan menggunakan do
let i = 0;
do {
    i++;
    if (i === 5) continue;
    console.log (i)
} while (i < 0);


//menggunakan strings
const animal = ['bird', 'flamingo', 'penguin'];
animal.forEach(animal => {
    console.log (animal);
}) 
