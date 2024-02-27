class Heroi {
    constructor (nome, idade, tipo) {
      this.nome = nome ;
      this.idade = idade ;
      this.tipo = tipo ;
  
      if (tipo === "mago") {
        this.ataque = "magia";
      } else if (tipo === "ninja") {
        this.ataque = "shuriken";
      } else if (tipo === "monge") {
        this.ataque = "artes marciais";
      } else if (tipo === "guerreiro") {
        this.ataque = "espada";
      } else {console.log("Classe inválida")}
    }
        ataqueRealizado () {
          console.log(`O ${this.tipo} usou ${this.ataque}`);
        }
        } 
  
   let heroi_personalizado = new Heroi("Volks", 26, "mago")
  
   heroi_personalizado.ataqueRealizado();