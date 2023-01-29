/*fazer isso para selecionar algo do html com js
1 - cria uma constante e da um nome pra ela
2 - ultilize a função "document.querySelector(' aqui vai o nome da class/id la do html')"
3 - se usar document.querySelectorALL('') faz com que eu selecione todas as classes/id do meu html 
ex:
const div1 = document.querySelector('.div1')

criar um elemento pelo javascript, basta ultilizar a função document.createElement('aqui da o nome do elemento')
ex:
const p = document.createElement('p')
elemento criado, agora vou adicionar um texto nesse novo elemento p ultilizando a função p.innerHTML 
e depois adicinar na div1 ultilizando a função div1.append('p') 
ex:
p.innerHTML = "meu primeiro projeto ultilizando DOM"
div1.append(p)
*/

const bnt = document.querySelector("button");

//criando um vento para o botão quando ele for clicado
bnt.addEventListener("click", () => {
    const input = document.querySelector("input[type=text]").value;
    const tasks = document.querySelector(".tasks");
    const task = `<p>${input}</p>`;
    tasks.insertAdjacentHTML("afterbegin", task);
});