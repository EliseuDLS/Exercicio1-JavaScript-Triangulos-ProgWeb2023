//Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero em vermelho(3 lados iguais), Isósceles em azul(2 lados iguais) e Escaleno em verde(3 lados diferentes).

function triangulos(){

    const lado1 = document.getElementById("lado1")
    const lado2 = document.getElementById("lado2")
    const lado3 = document.getElementById("lado1")
    
    const valor1 = Number(lado1.value)
    const valor2 = Number(lado2.value)
    const valor3 = Number(lado3.value)
    
    if (valor1 < (valor2 + valor3) && valor2 < (valor1 + valor3) && valor3 < (valor1 + valor2)){    
        resp.textContent = "Pode formar um triângulo";
        resp.style.color = "black";
    } 
        else if (valor1 == valor2 && valor1 == valor3 && valor2 == valor3){
            resp.textContent = "Triângulo Equilátero";
            resp.style.color = "red";
        } else if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3){
            resp.textContent = "Triângulo Isósceles";
            resp.style.color = "blue";
        } else if (valor1 != valor2 && valor1 != valor3 && valor2 != valor3){
            resp.textContent = "Triângulo Escaleno";
            resp.style.color = "green";
        }
    else {
        resp.textContent = "Não pode formar um triângulo";
        resp.style.color = "black";
    }
}
    
var butao = document.getElementById("butao")
butao.addEventListener("click", triangulos)