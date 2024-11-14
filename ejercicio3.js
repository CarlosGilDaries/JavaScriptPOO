function Libro(titulo, autor, paginas, anioPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.anioPublicacion = anioPublicacion;
}

let a = new Libro('Cien Años de Soledad', 'Gabriel García Márquez', 417, 1967);

for (let propiedad in a) {
    console.log(`${propiedad}: ${a[propiedad]}`);
}