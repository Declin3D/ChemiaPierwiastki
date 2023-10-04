function ZbadajPierwiastek(Z, A, okres, grupa, element){
    let Pokazany = document.getElementById('pierw')
    Pokazany.src = `img/${element.id.toString()}.png`
    
    let p = Z
    let e = Z
    let n = A - Z
    let elekKow = Z == 2 ? 2 : grupa
        grupa > 2? grupa += 10: null
    let iloscPowlok = okres
    let pozostaleElek = e 
    let powloki = [`K`,`L`,`M`,`N`,'O',`P`,`Q`]
    let powlokiWPierw = ''
    let Konfiguracja = [iloscPowlok]
    Konfiguracja[iloscPowlok-1] = elekKow
    pozostaleElek -= elekKow
    let maksElekWPowloce
    let i = 0
    while (i < iloscPowlok - 1) {

        maksElekWPowloce = 2 * (i + 1) ** 2
        if (pozostaleElek > maksElekWPowloce) {
            Konfiguracja[i] = maksElekWPowloce
            powlokiWPierw += `${powloki[i]}<sup>${maksElekWPowloce}</sup>`
            pozostaleElek -= maksElekWPowloce
        } else {
            Konfiguracja[i] = pozostaleElek
            powlokiWPierw += `${powloki[i]}<sup>${pozostaleElek}</sup>`
        }
        i++
    }
    Z == 2 ? powlokiWPierw += `${powloki[0]}<sup>${2}</sup>`: powlokiWPierw += `${powloki[i]}<sup>${elekKow}</sup>`

    let tab = document.getElementById("TabelaInformacji").rows[1].cells
    tab[0].innerHTML = Z
    tab[1].innerHTML = A
    tab[2].innerHTML = okres
    tab[3].innerHTML = grupa
    tab[4].innerHTML = p
    tab[5].innerHTML = e
    tab[6].innerHTML = n
    tab[7].innerHTML = n + p
    tab[8].innerHTML = elekKow
    tab[9].innerHTML = `${powlokiWPierw}`
    tab[10].innerHTML = `[${Konfiguracja}]`

    document.getElementById("TabelaInformacji").style.display = "block"
    document.getElementById(`pierw`).style.boxShadow = "1px 1px 10px 13px yellow";
}


