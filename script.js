function verificar () {
    var data = new Date() // Pega a data completa do sistema
    var ano = data.getFullYear() // Pega da var data somente o ano
    var fano = document.getElementById('txtano') 
    // Pega o elemento por ID (caixa texto p/ número)
    var res = document.querySelector('div#res')
    // Pega o elemento por SELETOR (elemento#ID)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Ano inexistente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        // Pega elemento por NOME / radsex = 0 (masc) / radsex = 1 (fem)
        var idade = ano - Number(fano.value)
        // ano do sistema - ano do formulário, var idade recebe        
        var genero = '' // Cria var genero sem nada        
        var img = document.createElement('img') // Cria elemento img        
        img.setAttribute('id', 'foto') // Ao elemento img atribua id='foto'        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Crianca
                classificacaoIdade = 'Criança'
                img.setAttribute('src', 'homem_crianca.png')
            } else if (idade < 21) {
                // Jovem
                classificacaoIdade = 'Jovem'
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade < 50) {
                // Adulto
                classificacaoIdade = 'Adulto'
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                // Idoso
                classificacaoIdade = 'Idoso'
                img.setAttribute('src', 'homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Crianca
                classificacaoIdade = 'Criança'
                img.setAttribute('src', 'mulher_crianca.png')
            } else if (idade < 21) {                
                // Jovem
                classificacaoIdade = 'Jovem'
                img.setAttribute('src', 'mulher_jovem.png')
            } else if (idade < 50) {
                // Adulto
                classificacaoIdade = 'Adulta'
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
                // Idoso
                classificacaoIdade = 'Idosa'
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} ${classificacaoIdade} com ${idade} anos.`
        res.appendChild(img) // Adiciona elemento img
    }
}