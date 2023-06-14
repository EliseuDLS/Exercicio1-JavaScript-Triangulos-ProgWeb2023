//Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero em vermelho(3 lados iguais), Isósceles em azul(2 lados iguais) e Escaleno em verde(3 lados diferentes).

function triangulos(){

    const lado1 = document.getElementById("inLado1");
    const lado2 = document.getElementById("inLado2");
    const lado3 = document.getElementById("inLado3");
    const resp1 = document.querySelector("h3");
    const resp2 = document.querySelector("h4");
    
    const valor1 = Number(lado1.value);
    const valor2 = Number(lado2.value);
    const valor3 = Number(lado3.value);

    if (valor1 < (valor2 + valor3) && valor2 < (valor1 + valor3) && valor3 < (valor1 + valor2)){    
        resp1.innerText = "Pode formar um triângulo";
        resp1.style.color = "black";
    
        if (valor1 == valor2 && valor1 == valor3 && valor2 == valor3){
            resp2.innerText = "Triângulo Equilátero";
            resp2.style.color = "red";
        } else if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3){
            resp2.innerText = "Triângulo Isósceles";
            resp2.style.color = "blue";
        } else if (valor1 != valor2 && valor1 != valor3 && valor2 != valor3){
            resp2.innerText = "Triângulo Escaleno";
            resp2.style.color = "green";
        }
        
    } else {
        resp1.innerText = "Não pode formar um triângulo";
        resp1.style.color = "black";
    }
}
    
var botao = document.getElementById("botao")
botao.addEventListener("click", triangulos)
