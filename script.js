console.log('%c JavaScript funguje ', 'background:black;color:yellow;');
/*
Příklad 1: Sudé a liché číslo
Zadání: Napište program, který zjistí, zda zadané číslo je sudé nebo liché, a výsledek vypíše na konzoli.
*/
const cislo = 6
console.log("číslo je " + cislo)

if ( cislo % 2 === 0) {
    console.log("Číslo je sudé.")
} else {
    console.log("Číslo je liché.")
}

/*
Příklad 2: Kontrola věku
Zadání: Napište program, který zkontroluje, zda je zadaný věk uživatele 18 let nebo více. Podle toho vypíše na konzoli, zda je uživatel starší nebo mladší 18 let.
*/
const vek = 20
console.log("věk je " + vek)
if ( vek >= 18 ) {
    console.log("Uživatel je plnoletý.")
} else {
    console.log("Uživatel není plnoletý.")
}

/*
Příklad 3: Porovnání čísel
Zadání: Napište program, který porovná dvě zadaná čísla a na konzoli vypíše, zda je první číslo větší, menší, nebo rovno druhému číslu.
*/
const cislo1 = 2
const cislo2 = 3
console.log("čísla jsou " + cislo1 + " " + cislo2)
if ( cislo1 > cislo2 ) {
    console.log("Číslo 1 je větší, než číslo 2.")
} else if ( cislo1 < cislo2) {
    console.log("Číslo 1 je menší, než číslo 2.")
} else {
    console.log("Číslo 1 a číslo 2 jsou stejné.")
}

/*
Příklad 4: Roční období
Zadání: Napište program, který podle zadaného čísla měsíce (1-12) určí, do jakého ročního období měsíc patří (jaro, léto, podzim, zima), a výsledek vypíše na konzoli. Pokud je zadaný neplatný měsíc, program vypíše na konzoli chybovou zprávu.
*/
const mesic = 1
console.log("Měsíc č. " + mesic)

if ( mesic > 12 || mesic === 0 ) {
    console.log("Neplatný název měsíce.")
} else if ( mesic >= 3 && mesic <= 5 ) {
    console.log("Jedná se o jarní měsíc.")
} else if ( mesic >= 6 && mesic <= 8 ) {
    console.log("Jedná se o letní měsíc.")
} else if ( mesic >= 9 && mesic <= 11 ) {
    console.log("Jedná se o podzimní měsíc.")
} else (console.log("Jedná se o zimní měsíc."))

/*
Příklad 5: Základní kalkulačka
Zadání: Napište základní kalkulačku, která podle zadané operace (+, -, *, /) provede výpočet se dvěma zadanými čísly a výsledek vypíše na konzoli. Symbol operace bude uložený v proměnné jako textový řetězec.
*/
const cislo3 = 12
const cislo4 = 10
const operator = "+"
const soucet = cislo3 + cislo4
const rozdil = cislo3 - cislo4
const nasobek = cislo3 * cislo4
const podil = cislo3 / cislo4

console.log("Čísla jsou " + cislo3 + " a " + cislo4)

if ( operator === "+" ) {
    console.log(soucet)
} else if ( operator === "-" ) {
    console.log(rozdil)
} else if ( operator === "*" ) {
    console.log(nasobek)
} else if ( operator === "/" ) {
    console.log(podil)
} else {
    console.log("Chybný operátor")
}

