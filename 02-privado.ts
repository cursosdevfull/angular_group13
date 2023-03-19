class Animal {
  private raza: string;
  private color: string;

  constructor() {
    this.raza = "perro";
    this.color = "marrón";
  }

  obtenerInfo() {
    return `Raza: ${this.raza}. Color: ${this.color}`;
  }
}

const animal = new Animal();
/*console.log("raza", animal.raza)
  console.log("color", animal.color)*/
console.log(animal.obtenerInfo());
//animal.color="verde"
console.log(animal.obtenerInfo());
