
const { Gato, Cachorro, AnimalExotico } = require('./prototype'); 

describe("funções construtoras e métodos estão funcionando", () => {

    let meuGato;
    let meuCachorro;
    let meuAnimalExotico;
  
    beforeEach(() => {
      meuGato = new Gato("Linho", 22, "mesclado", true);
      meuCachorro = new Cachorro("Lolito", 37, "preto", false, "srd");
      meuAnimalExotico = new AnimalExotico("Yago", 19, "branco e laranja", "hamster", true);
    });
  
    it("Deve criar um objeto Gato com os atributos corretos", () => {
      expect(meuGato.nome).toBe("Linho");
      expect(meuGato.idade).toBe(22);
      expect(meuGato.cor).toBe("mesclado");
      expect(meuGato.castrado).toBe(true);
    });
  
    it("Deve criar um objeto Cachorro com os atributos corretos", () => {
      expect(meuCachorro.nome).toBe("Lolito");
      expect(meuCachorro.idade).toBe(37);
      expect(meuCachorro.cor).toBe("preto");
      expect(meuCachorro.castrado).toBe(false);
      expect(meuCachorro.raça).toBe("srd");
    });
  
    it("Deve criar um objeto AnimalExotico com os atributos corretos", () => {
      expect(meuAnimalExotico.nome).toBe("Yago");
      expect(meuAnimalExotico.idade).toBe(19);
      expect(meuAnimalExotico.cor).toBe("branco e laranja");
      expect(meuAnimalExotico.especie).toBe("hamster");
      expect(meuAnimalExotico.adulto).toBe(true);
    });
  
    it("Deve verificar se o Gato mia mesmo", () => {
      const consoleSpy = jest.spyOn(console, "log");
      meuGato.miar();
      expect(consoleSpy).toHaveBeenCalledWith("Pipoca está miando.");
      consoleSpy.mockRestore();
    });
  
    it("Deve verificar se o Cachorro late mesmo", () => {
      const consoleSpy = jest.spyOn(console, "log");
      meuCachorro.latir();
      expect(consoleSpy).toHaveBeenCalledWith("Lolito está latindo.");
      consoleSpy.mockRestore();
    });
  
    it("Deve verificar se o Animal Exótico é adulto", () => {
      expect(meuAnimalExotico.ehAdulto()).toBe(true); // Sera que o hamster é adulto?
    });
  
    it("Deve adicionar uma vacina ao histórico", () => {
      meuGato.historico.vacinar("v8");
      expect(meuGato.historico.vacinas).toContain("v8");
    });
  
    it("Deve adicionar uma consulta ao histórico", () => {
      meuCachorro.historico.consultar("13/01/2023");
      expect(meuCachorro.historico.consultas[0]).toBe("13/01/2023");
    });
  
    it("Deve adicionar um procedimento ao histórico corretamente", () => {
      meuAnimalExotico.historico.realizarProcedimento("exame de sangue", "check-up");
      expect(meuAnimalExotico.historico.procedimentos[0]).toEqual({ tipo: "exame de sangue", motivo: "check-up" });
    });

  });
  
