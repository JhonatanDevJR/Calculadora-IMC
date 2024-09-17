    function calcular(){
        var nome=  (document.getElementById('nome').value)
        var peso=  (document.getElementById('peso').value)
        var altura= (document.getElementById('altura').value)
        var idade= (window.document.getElementById('idade').value)
        var atv= parseFloat(document.getElementById('atv').value)
        var gen= document.getElementById('gen').value
        var IMC= peso/altura**2
        var agua= (peso*35)
        var tmbF= 655+(9.247* peso)+(3.098* altura)-(4.330 * idade)
        var tmbM= 88+(13.397* peso)+(4.799* altura)- (5.677 * idade)
        var totcal= tmbF *atv
        var resultsec= document.getElementById('cal')
        
        
         if (IMC<18.5){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p><mark id="zero">Você está á <strong>BAIXO</strong> do peso</mark></p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: <strong>${tmbF.toFixed(2)}</strong></p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong> ml de água 💧.</p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong>${totcal.toFixed(2)}</strong> calorias por dia.</p>`
            if( gen= 'fem'){
                resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            }else {
                resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbM.toFixed(2)}</p>`}
            //resultsec.style.background=''
            
        }else if (IMC>= 18.5 && IMC<=24.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p><mark id="um">Você está no peso <strong>IDEAL</strong>.</mark></p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: <strong>${tmbF.toFixed(2)}</strong></p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong>${totcal.toFixed(2)}</strong> calorias por dia.</p>`
            //resultsec.style.background.p=''

        } if (IMC>= 25 && IMC<=29.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p><mark id="dois">Você está em <strong>SOBREPESO</strong>!</mark></p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong>${totcal.toFixed(2)}</strong> calorias por dia.</p>`
            //resultsec.style.background=''
            //if( gen= 'fem'){
               // resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            //}else if (gen='mas'){
               // resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbM.toFixed(2)}</p>` 
            
        } if(IMC>30 && IMC<34.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.innerHTML+=`<p><mark class="três">Você está com <strong>OBESIDADE GRAU 1</strong>!</mark></p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong>${totcal.toFixed(2)}</strong> calorias por dia.</p>`
            //resultsec.style.background=''

        } if( IMC> 35) {
            resultsec.innerHTML+=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong>${IMC.toFixed(2)}</strong></p>`
            resultsec.innerHTML+=`<p>Sua taxa metabólica basal é de: ${tmbF.toFixed(2)}</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong>${agua}</strong>ml de água 💧.</p>`
            resultsec.innerHTML+=`<p><mark class="três">Você está com <strong>OBESIDADE GRAU 2</strong>, se CUIDE!</mark></p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong>${totcal.toFixed(2)}</strong> calorias por dia.</p>`
            //resultsec.style.background+=''
        
        }}
        
            
                
    

    
    
    
    
    