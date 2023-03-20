const btn  = document.getElementById('btn')
btn.addEventListener('click', ()=>{

  
   let quilo = document.getElementById('quilo').value
   let grama = document.getElementById('grama').value
   let preco = document.getElementById('preco')
   
   

    // C string -> número
    // let kg = Number(quilo.value)
    // let gm = Number(grama.value)     
    
    

    let valor = ( quilo * grama ) / 1000
   

     
    
    preco.textContent = ` O Valor a pagar é: R$${valor}  `

})