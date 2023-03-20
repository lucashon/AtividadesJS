const btn  = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    

   let inTitulo = document.getElementById('inTitulo')

   let inTempo = document.getElementById('inTempo')

   let outTempo = document.getElementById('outTempo')
    let outTitulo = document.getElementById('outTitulo')

   



    let titulo = inTitulo.value

  
    let entrada = Number(inTempo.value)     
    

    let valor = entrada / 2

    let parcela = (entrada/2)/12



    outTitulo.textContent = `Veículo ${titulo}`

    outValores.textContent = `A entrada é de: ${valor}  `

    outValores2.textContent = ` 12x de ${parcela}  `

})