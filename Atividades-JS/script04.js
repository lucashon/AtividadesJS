const btn  = document.getElementById('btn')
btn.addEventListener('click', ()=>{

  
   let medicamento = document.getElementById('medicamento').value
   let preco = parseFloat(document.getElementById('preco').value)

   let preco2 = document.getElementById('preco2')
   
   

   
    
    let nome = medicamento
    let desconto = (preco + preco) - 0.20
   

     
    
 
    
    preco2.textContent = ` A promoção da ${nome} O Valor a pagar é: R$${desconto}   `
})