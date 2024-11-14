function Coche(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.detalles=()=> {
        console.log(`Coche {`);
        for (let propiedad in this) {

            if (typeof this[propiedad] !== "function")
                console.log(`${propiedad}: ${this[propiedad]}`);
        }
        console.log(`}`);
        console.log(``);
    }
}

let a = new Coche('BMW', '7345wh', 1956);
let b = new Coche('Ford', 'Focus', 1999);