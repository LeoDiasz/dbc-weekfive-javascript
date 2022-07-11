// //=========================== PRÁTICA ===============================

// /*
//   Imaginem que temos uma Pet Shop, logo:
//   - precisamos ter nossos pets (class Pet);
//   - propriedades dos pets: nome, raca e peso;
//   - nossos pets vao poder latirOuMiar() // método que imprime `oi, meu nome é XXX, minha raça é YYY e meu peso é ZZZ`
// */


// /*
//   Imaginem agora que na Pet Shop vamos ter também os donos dos pets, logo:
//   - precisamos ter esses donos (class DonoDePet);
//   - propriedades dos donos: nome e pets (array de Pets);
//   - nossos donos vao poder saudar() // método que imprime o nome do dono e o nome de cada um de seus pets
// */


class Pet {
  nome = ""
  raca = ""
  peso = 0

  constructor(nome, raca, peso) {
    this.nome = nome,
    this.raca = raca,
    this.peso = peso
  }

  latirOuMiar = () => {
    console.log(`Oi, meu nome é ${this.nome}, minha raça é ${this.raca} e meu peso é ${this.peso}`)
  }
}


class DonoDePet {
  nome = ""
  pets = []

  constructor(nome, pets) {
    this.nome = nome,
    this.pets = pets 
  }
  
  saudar = () => {
    const listPets = this.pets.reduce((value, pet) => value + `nome: ${pet.nome} - Raça: ${pet.raca} - Peso: ${pet.peso}\n`, "")

    console.log(`Nome dono: ${this.nome}. Lista pets:\n${listPets}`)
    
  }
}


const petOne = new Pet("leo", "gato", 50)
const petTwo = new Pet("sophia", "cachorro", 40)
const listPets = [petOne, petTwo]

const donoOne = new DonoDePet("leonardo", listPets)

donoOne.saudar()
donoOne.pets[0].latirOuMiar()
