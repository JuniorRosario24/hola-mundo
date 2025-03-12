// tests/app.test.js
const saludar = require('../app');  // Aquí se importa app.js desde la carpeta superior

test('saludar con nombre "Juan" debe devolver "Hola, Juan!"', () => {
  expect(saludar('Juan')).toBe('Hola, Juan!');
});

test('saludar con nombre "Junior" debe devolver "Hola, Junior!"', () => {
  expect(saludar('Junior')).toBe('Hola, Junior!');
});
