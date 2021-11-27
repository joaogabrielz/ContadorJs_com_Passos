function contar(){
    let ini = document.getElementById('txtenter')
    let fim = window.document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('resultado')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Contar!'
        window.alert('[ERRO] faltam dados');
    }else{
        res.innerHTML = '\u{1F916} Contando..<br>'
        let  i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
       setTimeout(function conta(){
            if( p <= 0){
                window.alert('passo invalido! > passo = 1')
                p =1;
            }
            if(i < f){
                for(let c = i; c <= f; c += p){
                    //crescente
                    res.innerHTML += `\u{1F449} ${c}`
                }
            }else{
                    //descrecente/regressiva
                for(let c = i; c >= f; c -= p){
                        res.innerHTML += `\u{1F449} ${c}`
                    }
                }
                res.innerHTML += ` \u{1f3c1}`
      },900);
    }
}