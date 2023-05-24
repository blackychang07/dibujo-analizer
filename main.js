function setup()
{
    canvas= createCanvas(280, 280)
    background("white")
    canvas.mouseReleased(analizar)
}

function draw()
{
    strokeWeight (13)
    stroke ("blue")
    if(mouseIsPressed)
    {
        line(pmouseX,pmouseY, mouseX, mouseY)
    }
}

function borrar()
{
    background("white") 
}
0
function preload()
{
    model = ml5.imageClassifier("DoodleNet")
    texto_a_voz = window.speechSynthesis; 
}

function analizar()
{
model.classify(canvas, resultados)
}

function resultados(error, respuesta)
{

if(!error)
{
    console.log(respuesta)
    dibujo = respuesta[0].label
    confianza = Math.round(respuesta[0].confidence * 100) + "%"
    
    document.getElementById("dibujo").innerHTML = " dibujo: " + dibujo
    document.getElementById("confianza").innerHTML = " confianza: " + confianza
    hablar(dibujo)

}

}

function hablar(mensaje)
{
lectura = new SpeechSynthesisUtterance(mensaje)
texto_a_voz.speak(lectura)
}
