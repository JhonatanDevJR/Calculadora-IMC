    function calcular(){
        var nome=  (document.getElementById('nome').value)
        var peso=  (document.getElementById('peso').value)
        var altura= (document.getElementById('altura').value)
        var idade= (window.document.getElementById('idade').value)
        var atv= parseFloat(document.getElementById('atv').value)
        var gen= document.getElementById('gen')
        var IMC= peso/altura**2
        var agua= (peso*35)
       
        
        var resultsec= document.getElementById('cal')
        var tmbF= Number (655+(9.247* peso)+(3.098* altura)-(4.330 * idade))
        var tmbM= Number (88+(13.397* peso)+(4.799* altura)- (5.677 * idade))
        
        if (IMC<18.5){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Você está á <strong>BAIXO</strong> do peso</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.style.background='yellow'

        }else if (IMC>= 18.5 && IMC<=24.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Você está no peso <strong>IDEAL</strong>.</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.style.background='rgb(50, 155, 50)'

        } if (IMC>= 25 && IMC<=29.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Você está em <strong>SOBREPESO</strong>!</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.style.background='yellow'
            if( gen= 'fem'){
                resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            }else if (gen='mas'){
                resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbM.toFixed(2)}</p>` 
            }
        } if(IMC>30 && IMC<34.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.innerHTML+=`<p>Você está com <strong>OBESIDADE GRAU 1</strong>!</p>`
            resultsec.style.background='red'

        } if( IMC> 35) {
            resultsec.innerHTML+=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.innerHTML+=`<p>Você está morrendo, se CUIDE!</p>`
            resultsec.style.background+='red'
            

        }}//if( gen=== 'fem'){
            
        //}else {
            
                
    

    
    
    
    
    