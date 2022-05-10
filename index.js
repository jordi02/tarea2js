let PedirNotas = Number(prompt("Ingresa tu primer nota"))
let PedirNotas2 = Number(prompt("Ingresa tu segunda nota"))
let PedirNotas3 = Number(prompt("Ingresa tu tercer nota"))

let Resultado = (PedirNotas+PedirNotas2+PedirNotas3)/3
alert("La nota promedio es de " + Resultado)
while(isNaN(Resultado)){
    PedirNotas = Number(prompt("Ingresa tu primer nota"))
    PedirNotas2 = Number(prompt("Ingresa tu segunda nota"))
    PedirNotas3 = Number(prompt("Ingresa tu tercer nota"))
    if(Resultado>=6){
        alert("EL ESTADO DE LA MATERIA ES: APROBADO")
        break
    } 
    else{
        alert("EL ESTADO DE LA MATERIA ES: DESAPROBADO")
        break
    }
}


