/*
1 = tijeras
2 = papel
3 = piedra
*/
// Math.floor(Math.random()* (3 - 0) + 0)
let movimiento_CPU = 0
let lista = ["tijera","papel","piedra"]
let mio = ""
let punto_mio = 0
let punto_cpu = 0
let vueltas = 0

document.getElementById("vueltas").innerHTML = vueltas;
document.getElementById("puntaje_Yo").innerHTML = punto_mio;
document.getElementById("punta_Cpu").innerHTML = punto_cpu;
function movimiento(y) {
    vueltas += 1
    document.getElementById("vueltas").innerHTML = vueltas;

   movimiento_CPU = lista[Math.floor(Math.random()* (3 - 0) + 0)]
    mio = lista[y]
   if (mio == movimiento_CPU) {
    console.log(`empate ${mio} y ${movimiento_CPU}`)
    document.getElementById("historial").innerHTML += `<li>------------------EMPATE------------------`
    console.log(animacion("a"))
}
   
   else{
    switch (mio + movimiento_CPU) {
    //victoria
        case "tijerapapel":
        case "papelpiedra":
        case "piedratijera":
            punto_mio += 1
            document.getElementById("puntaje_Yo").innerHTML = punto_mio
            document.getElementById("historial").innerHTML += `<li>Jugador1 a vencido a Jugador2 usando ${mio}</li>`
            console.log(animacion("a"))
            break;

        default:
            punto_cpu += 1
            document.getElementById("punta_Cpu").innerHTML = punto_cpu;
            document.getElementById("historial").innerHTML += `<li>Jugador2 a vencido a Jugador1 usando ${movimiento_CPU}</li>`
            console.log(animacion("a"))

    // derrota
    }
   }
}

function animacion(p) {
document.getElementById("botones").style.display = 'none'

  if (mio == movimiento_CPU) {  
    setTimeout(espera, 3000)
    console.log(`empate ${mio} y ${movimiento_CPU}`) 
    document.getElementById("estilo").innerHTML = `
<div id="caja_img_1">
    <img id="img_1"src="imagenes/${mio}.png"></img>
</div>

<div id="caja_img_2">
  <img id="img_2" src="imagenes/${movimiento_CPU}.png"></img>
</div>
    <style>
    #caja_img_1{
      animation-name:Em_mov_1;
      animation-duration: 3s;
    }
    #caja_img_2{
      animation-name:Em_mov_2;
      animation-duration: 3s;
    }
    </style>`
    
}
else{
  switch (mio + movimiento_CPU) {
    
  //victoria
      case "tijerapapel":
      case "papelpiedra":
      case "piedratijera":
        setTimeout(espera, 2000)
      document.getElementById("estilo").innerHTML = `
    <div id="caja_img_1">
      <img id="img_1"src="imagenes/${mio}.png"></img>
    </div>
  
    <div id="caja_img_2">
    <img id="img_2" src="imagenes/${movimiento_CPU}.png"></img>
    </div>
      <style>
      #caja_img_1{
        animation:  Vic_mov_1 2s;
      }
      #caja_img_2{
        animation:  Vic_mov_2 2s;
      }
      </style>`
      break;
      default:
        setTimeout(espera, 2000)
        document.getElementById("estilo").innerHTML = `
    <div id="caja_img_1">
      <img id="img_1"src="imagenes/${mio}.png"></img>
    </div>
  
    <div id="caja_img_2">
    <img id="img_2" src="imagenes/${movimiento_CPU}.png"></img>
    </div>
      <style>
      #caja_img_1{
        animation:  F_mov_1 2s;
      }
      #caja_img_2{
        animation:  F_mov_2 2s;
      }
      </style>`
      
  }

  }

}
function espera() {
  document.getElementById("botones").style.display = ''
}
