const image = document.querySelector('img');
const input = document.querySelector('input');
const botao = document.querySelector('button');
const pontuacaoContainer = document.querySelector('.pontuacao-container');
const pontuacao = document.querySelector('pontuacao');
const campoErro = document.getElementById('erro');

const numeroMaximoDePersonagens = 671;
let pontos = 0;
let nomeDoPersonagem;

generateRandomNumber = () => {
	return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

pegarPersonagem = () => {
	const id = generateRandomNumber();
	return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
					"Content-Type": 'application/json'
				}
			}).then((response) => response.json()).then((data) => {
		image.src = data.image;
		image.alt = 'Imagem do personagem: ' + data.name;
		nomeDoPersonagem = data.name;
	})
}

jogar = () => {
	pegarPersonagem();
	pontuacaoContainer.style.display = 'flex';
	botao.innerHTML = 'Jogar';
	nomeDoPersonagem = nomeDoPersonagem;
	let nomeDigitado = input.value;
	
	if (input.style.opacity == 1) {
	if (nomeDoPersonagem == nomeDigitado) {
		pontos += 1;
	} else if (nomeDigitado != null){
		campoErro.innerHTML = `Você errou. O nome era ${nomeDoPersonagem}`;
	}
	}
	input.style.opacity = 1;
	
	pontuacao.innerHTML = pontos;
}

botao.onclick = jogar;