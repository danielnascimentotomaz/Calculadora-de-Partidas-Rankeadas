

function saldoVitoria(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}



function nivelJogador(vitorias){
    if(vitorias < 10){
        return "Ferro"
    }else if(vitorias > 10 && vitorias <= 20){
        return "Bronze"
    }else if(vitorias > 20 && vitorias <= 50){
        return "Prata"
    }else if(vitorias > 50 && vitorias <= 80){
        return "Ouro"
    }else if(vitorias > 80 && vitorias <= 90){
        return "Diamante"
    }else if(vitorias > 90 && vitorias <= 100){
        return "Lendário"
    }else if(vitorias > 100){
        return "Imortal"
    }
}


function mensagem(saldoVitoria, nivelJogador){

    console.log(`O Herói tem de saldo de ${saldoVitoria} está no nível de ${nivelJogador}`)

}


/////////////////////////////////////////////////////////////////



let  _saldoVitoria = saldoVitoria(10, 5); 

let _nivelJogador = nivelJogador(_saldoVitoria);

mensagem(_saldoVitoria, _nivelJogador );

