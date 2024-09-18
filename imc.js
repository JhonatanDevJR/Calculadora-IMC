    function calcular(){
        var nome=  (document.getElementById('nome').value)
        var peso=  (document.getElementById('peso').value)
        var altura= (document.getElementById('altura').value)
        var idade= (window.document.getElementById('idade').value)
        var atv= parseFloat(document.getElementById('atv').value)
        var gen= document.getElementById('gen').value
        var IMC= peso/altura**2
        var agua= (peso*35)
        var tmbF=  655+(9.247* peso)+(3.098* altura)-(4.330 * idade)
        var tmbM= 88+(13.397* peso)+(4.799* altura)- (5.677 * idade)
        var totcal= tmbF *atv
        var gpeso= totcal+500
        var ppeso= totcal-500
        var resultsec= document.getElementById('cal')
        
         if (IMC<18.5){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p><mark id="zero">Você está á <strong>BAIXO</strong> do peso</mark></p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong><mark>${IMC.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Mulher</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbF.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Homem</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbM.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p id="feel">(Infelizmente precisei fazer dessa forma)</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong><mark>${agua}</mark></strong> ml de água 💧.</p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong><mark>${totcal.toFixed(2)}</mark></strong> calorias por dia.</p>`
            resultsec.innerHTML+=`<p>Caso você queira ganhar peso, é necessário consumir por dia: <strong><mark>${gpeso.toFixed(2)}</mark></strong> kcal.</p>`
            resultsec.innerHTML+=`<p>Caso você queira perder peso, é necessário consumir por dia: <strong><mark>${ppeso.toFixed(2)}</mark></strong> kcal.</p>`
            
            //resultsec.style.background=''
            
        }else if (IMC>= 18.5 && IMC<=24.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p><mark id="um">Você está no peso <strong>IDEAL</strong>.</mark></p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong><mark>${IMC.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Mulher</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbF.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Homem</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbM.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>(Infelizmente precisei fazer dessa forma)</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong><mark>${agua}</mark></strong> ml de água 💧.</p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong><mark>${totcal.toFixed(2)}</mark></strong> calorias por dia.</p>`
            resultsec.innerHTML+=`<p>Caso você queira ganhar peso, é necessário consumir por dia: <strong><mark>${gpeso.toFixed(2)}</mark></strong>kcal.</p>`
            resultsec.innerHTML+=`<p>Caso você queira perder peso, é necessário consumir por dia: <strong><mark>${ppeso.toFixed(2)}</mark></strong> kcal.</p>`
            //resultsec.style.background.p=''

        } if (IMC>= 25 && IMC<=29.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p><mark id="dois">Você está em <strong>SOBREPESO</strong>!</mark></p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong><mark>${IMC.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Mulher</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbF.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Homem</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbM.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>(Infelizmente precisei fazer dessa forma)</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong><mark>${agua}</mark></strong> ml de água 💧.</p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong><mark>${totcal.toFixed(2)}</mark></strong> calorias por dia.</p>`
            resultsec.innerHTML+=`<p>Caso você queira ganhar peso, é necessário consumir por dia: <strong><mark>${gpeso.toFixed(2)}</mark></strong>kcal.</p>`
            resultsec.innerHTML+=`<p>Caso você queira perder peso, é necessário consumir por dia: <strong><mark>${ppeso.toFixed(2)}</mark></strong> kcal.</p>`
            //resultsec.style.background=''
            
            
        } if(IMC>30 && IMC<34.9){
            resultsec.innerHTML=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong><mark>${IMC.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Mulher</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbF.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Homem</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbM.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>(Infelizmente precisei fazer dessa forma)</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong><mark>${agua}</mark></strong> ml de água 💧.</p>`
            resultsec.innerHTML+=`<p><mark class="três">Você está com <strong>OBESIDADE GRAU 1</strong>!</mark></p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong><mark>${totcal.toFixed(2)}</mark></strong> calorias por dia.</p>`
            resultsec.innerHTML+=`<p>Caso você queira ganhar peso, é necessário consumir por dia: <strong><mark>${gpeso.toFixed(2)}</mark></strong>kcal.</p>`
            resultsec.innerHTML+=`<p>Caso você queira perder peso, é necessário consumir por dia: <strong><mark>${ppeso.toFixed(2)}</mark></strong> kcal.</p>`
            //resultsec.style.background=''

        } if( IMC> 35) {
            resultsec.innerHTML+=`<p>Olá ${nome}! Veja suas medidas.</p>`
            resultsec.innerHTML+=`<p>Seu IMC é de: <strong><mark>${IMC.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Mulher</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbF.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>Se você for <strong>Homem</strong>, sua taxa metabólica basal é de: <strong><mark>${tmbM.toFixed(2)}</mark></strong></p>`
            resultsec.innerHTML+=`<p>(Infelizmente precisei fazer dessa forma)</p>`
            resultsec.innerHTML+= `<p>Você precisa ingerir diariamente: <strong><mark>${agua}</mark></strong> ml de água 💧.</p>`
            resultsec.innerHTML+=`<p><mark class="três">Você está com <strong>OBESIDADE GRAU 2</strong>, se CUIDE!</mark></p>`
            resultsec.innerHTML+=`<p>Com base no seu nível de atividade física, sua necessidade calórica é de: <strong><mark>${totcal.toFixed(2)}</mark></strong> calorias por dia.</p>`
            resultsec.innerHTML+=`<p>Caso você queira ganhar peso, é necessário consumir por dia: <strong><mark>${gpeso.toFixed(2)}</mark></strong>kcal.</p>`
            resultsec.innerHTML+=`<p>Caso você queira perder peso, é necessário consumir por dia: <strong><mark>${ppeso.toFixed(2)}</mark></strong> kcal.</p>`
            //resultsec.style.background+=''
        
        }}
        
                
    

    
    
    
    
    