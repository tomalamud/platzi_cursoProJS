/* En JS no hay clases, son objetos. Pero a través del prototype se puede hacer un modelo de herencia prototipal */

// noob version
const zelda = {
  name: 'Zelda',
};
zelda.saludar = function () {
  console.log(`Hola! soy ${this.name}`);
};
zelda.saludar();

const link = {
  name: 'Link',
};
link.saludar = function () {
  console.log(`Hola! soy ${this.name}`);
};
link.saludar();

// junior version
const heroMethods = {
  saludar: function () {
    console.log(`Hola! soy ${this.name}`);
  },
};

function Hero(name) {
  const hero = {
      name: name
  };
  
  hero.saludar = heroMethods.saludar;
  
  return hero;
}

const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero('link');
link.saludar();

// Object.create version
const heroMethods = {
    saludar: function () {
      console.log(`Hola! soy ${this.name}`);
  },
};

function Hero(name) {
    const hero = Object.create(heroMethods);
    hero.name = name;
    
    return hero;
}

const zelda = Hero('Zelda');
zelda.saludar();

const link = Hero('link');
link.saludar();

// Utilizando new (azucar sintáctica) para llevar Hero.prototype al objeto.
function Hero(name) {
  // El new hace automáticamente:
  // const hero = Object.create(heroMethods); 
  // es como si lo guardara automáticamente en this = Object.create()
  // Ahora es this.name en vez de hero.name
  this.name = name;
  // Automático con el new:
  // return hero;
}

Hero.prototype.saludar = function () {
  console.log(`New: ${this.name}`);
};

const zelda = new Hero('Zelda');
zelda.saludar();

const link = new Hero('link');
link.saludar();

// HERENCIA PROTOTIPAL
