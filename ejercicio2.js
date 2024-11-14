function Persona(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
    this.presentarse=()=>`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`;
    this.cumplirAnios=()=>this.edad += 1;
}

let a = new Persona('Juan', 30, 'ingeniero');

console.log(a.presentarse());
a.cumplirAnios();
console.log(a.presentarse());