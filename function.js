let nave = prompt("Digite o nome da nave")

let speed = 0

let chosen

function showMenu() {
    let option
    while(option != "1" && option!= "2" && option!= "3" && option!= "4"){
        option = prompt("Oque dese fazer?\n"+
        "1- Acelerar a nave em 5km/s\n" +
        "2- Desacelerar a nave em 5km/s\n" +
        "3- Imprimir dados de bordo\n" +
        "4- Sair do programa")
    }
    return option
}

function speedUp(velocity){

    let newvelocity = velocity + 5
    return newvelocity
}

function slow(velocity){
    let newvelocity = velocity - 5
    if(newvelocity < 0){
        newvelocity = 0
    }
return newvelocity

}

function printspace(nave, velocity){

    alert("Espaçonave: " + nave + "\nVelocidade: " + speed + "km/s")
}
do {
    chosen = showMenu()
    switch(chosen){

        case "1":
        speed = speedUp(speed)
        break
        case "2":
        speed = slow(speed)
        break
        case "3":
        speed = printspace(nave, speed)
        break
        default:
            alert("Encerrando programa de bordo")
        }
} while(chosen != "4")