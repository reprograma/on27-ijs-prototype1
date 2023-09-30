function metodoDeObjeto(obj){ // PODE SER ASSIM?
    obj.realizarProcedimento() = (tipo, motivo) => (this.historico = { tipo: tipo, motivo: motivo }); 
    obj.prototype.realizarProcedimento = function realizarProcedimento(tipo, motivo) {
        this.historico = { tipo: tipo, motivo: motivo }
    }
} // para não ficar repetindo em cada função construtora poderia fazer assim?

this.realizarProcedimento = (tipo, motivo) =>{ 
    this.historico = { tipo: tipo, motivo: motivo }
}; // como o retorna um objeto, colocamos o () envolvendo o {}

this.miar = function(){
    console.log('oi')
    return 'O gato mia.'
}

this.realizarProcedimento = (tipo, motivo) => (this.historico = { tipo: tipo, motivo: motivo }); 

this.latir = () => console.log('O cachorro late.')


this.realizarProcedimento = function(tipo, motivo){ 
    console.log(this.procedimentos = { tipo: tipo, motivo: motivo })
};


