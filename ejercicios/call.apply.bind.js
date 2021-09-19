function saludar () {
    console.log(`Hola, soy ${this.name} ${this.lastname}`);
}

const data = {
    name: 'Tomás',
    lastname: 'Elizondo',
};

saludar.call(data);

function caminar (metros, direccion) {
    console.log(`${this.name} camina ${metros} metros, hacia el ${direccion}.`);
}

caminar.call(data, 700, 'norte');