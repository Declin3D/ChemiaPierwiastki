function ZbadajPierwiastek(Z, A, okres, grupa, element){
    let Pokazany = document.getElementById('pierw')
    Pokazany.src = `img/${element.id.toString()}.png`
    
    let p = Z
    let e = Z
    let n = A - Z
    let elekKow = Z === 2 ? 2 : grupa > 10 ? grupa - 10 : grupa

    let pozostaleElek = e 
    let powloki = [`K`,`L`,`M`,`N`,'O',`P`,`Q`]
    let powlokiWPierw = ''
    let Konfiguracja = [0,0,0,0,0,0,0]

    let podpowloki = ["s","p","d","f"]
    let numerki =
        [
            [2],
            [2,6],
            [2,6,10],
            [2,6,10,14],
            [2,6,10,14],
            [2,6,10,14],
            [2,6,10]
        ]
    let podpowloka = ""
    let nazwyGrup = ['litowce','berylowce','skandynowce','tytanowce','wanadowce','chromowce','manganowce','żelazowce','kobaltowce','niklowce','miedziowce','cynkowce','borowce','węglowce','azotowce','tlenowce','fluorowce','helowce']
    let wybranaGrupa = nazwyGrup[grupa-1]

    let iloscElek = e

    let x = 0
    let y = 0
    for (let j = 0; j < 35; j++) {
        let elWPodPowloce = 0

        if(numerki[y][x] != null){
            if(iloscElek > numerki[y][x]) elWPodPowloce = numerki[y][x]
            else{
                elWPodPowloce = iloscElek
            }

            iloscElek -= numerki[y][x]
            if(elWPodPowloce > 0){
            podpowloka += `${y + 1}${podpowloki[x]}<sup>${elWPodPowloce}</sup> `
            }
            if(elWPodPowloce > 0) Konfiguracja[y] += elWPodPowloce

            if(Konfiguracja[y-1] === 0) Konfiguracja.pop()
            if(Konfiguracja[y] ===0) Konfiguracja.pop()
        }
        if(x === 0){
            x = y + 1;
            y = 0;
        }else{
            x--
            y++
        }
    }
    for (let i = 0; i < 7; i++) {
        if(Konfiguracja[i] > 0){
            powlokiWPierw += `${powloki[i]}<sup>${Konfiguracja[i]}</sup>`
        }
    }
    let tab = document.getElementById("TabelaInformacji").rows[1].cells
    let tab2 = document.getElementById("TabelaInformacji2").rows[1].cells
    tab[0].innerHTML = Z
    tab[1].innerHTML = A
    tab[2].innerHTML = okres
    tab[3].innerHTML = grupa
    tab[4].innerHTML = p
    tab[5].innerHTML = e
    tab[6].innerHTML = n
    tab[7].innerHTML = n + p
    tab[8].innerHTML = elekKow
    tab[9].innerHTML = wybranaGrupa
    tab2[0].innerHTML = `${powlokiWPierw}`
    tab2[1].innerHTML = `[${Konfiguracja}]`
    tab2[2].innerHTML = `${podpowloka}`

    document.getElementById("TabelaInformacji").style.display = "block"
    document.getElementById("TabelaInformacji2").style.display = "block"
    document.getElementById(`pierw`).style.boxShadow = "1px 1px 10px 13px yellow";
}


