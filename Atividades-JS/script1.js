const btn  = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    //Criar referência dos elementos da página
   let inTitulo = document.getElementById('inTitulo')
   let inTempo = document.getElementById('inTempo')
   let outTitulo = document.getElementById('outTitulo')
   let outTempo = document.getElementById('outTempo')

    // Obter os conteúdos dos campos
    let titulo = inTitulo.value

    // Conversão de string -> número
    let duracao = Number(inTempo.value)     
    
    //logica da aplicação

    let horas = Math.floor(duracao / 60)
    let minutos = duracao % 60

     //Saida de dados
    outTitulo.textContent = `${titulo}`
    outTempo.textContent = `${horas} Hora(s) e ${minutos} Minuto(s)`

})