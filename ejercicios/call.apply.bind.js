const data = {
    name: 'Tomás',
    lastname: 'Elizondo',
};

// CALL

function saludar () {
    console.log(`Hola, soy ${this.name} ${this.lastname}`);
}

saludar.call(data);

// CALL + AGRS

function caminar (metros, direccion) {
    console.log(`${this.name} camina ${metros} metros, hacia el ${direccion}.`);
}

caminar.call(data, 700, 'norte');

// APPLY
// es lo mismo que call pero los argumentos se pasan en un arreglo
const valores = [800, 'noreste']

caminar.call(data, valores);

// BIND
const daniel = { name: 'Daniel', lastname: 'Sánchez' };
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel, 1000 /*el param 'oeste' podría estar acá tambn*/);
danielCamina('oeste');

