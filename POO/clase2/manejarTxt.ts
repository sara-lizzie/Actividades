import * as fs from 'fs';

let texto: string = fs.readFileSync('prueba.txt','utf-8');
let palabras: string[] = texto.split(' ');

console.log(palabras);
