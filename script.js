const campoAnos = document.getElementById("campo-anos");
const campoMeses = document.getElementById("campo-meses");
const botaoCalcular = document.getElementById("botao-calcular");

const resultadoVazio = document.getElementById("resultado-vazio");
const resultadoConteudo = document.getElementById("resultado-conteudo");
const idadeHumana = document.getElementById("idade-humana");
const faseVida = document.getElementById("fase-vida");

botaoCalcular.addEventListener("click", function () {
  const anos = Number(campoAnos.value);
  const meses = Number(campoMeses.value);
  const idadeMeses = anos * 12 + meses;

  let idadeHumanaCalculada;
  let fase;

  if (idadeMeses <= 7) {
    idadeHumanaCalculada = [0, 1, 2, 4, 6, 8, 10, 12][idadeMeses];
  } else if (idadeMeses <= 24) {
    if (idadeMeses === 12) {
      idadeHumanaCalculada = 15;
    } else if (idadeMeses === 18) {
      idadeHumanaCalculada = 21;
    } else {
      idadeHumanaCalculada = 24;
    }
  } else {
    idadeHumanaCalculada = 24 + ((idadeMeses - 24) / 12) * 4;
  }

  if (idadeMeses <= 6) {
    fase = "Filhote";
  } else if (idadeMeses <= 24) {
    fase = "Jovem";
  } else if (idadeMeses <= 84) {
    fase = "Adulto";
  } else if (idadeMeses <= 144) {
    fase = "Meia-idade";
  } else {
    fase = "Idoso";
  }

  idadeHumana.textContent = Math.round(idadeHumanaCalculada) + " anos";
  faseVida.textContent = "Fase: " + fase;

  resultadoVazio.style.display = "none";
  resultadoConteudo.style.display = "block";

  document.getElementById("resultado").scrollIntoView({ behavior: "smooth", block: "start" });
});




const carrosseis = document.querySelectorAll(".esteira-gatos");

carrosseis.forEach((esteira) => {
    for (let repeticao = 0; repeticao < 8; repeticao++) {
        for (let i = 0; i <= 16; i++) {
            const gato = document.createElement("img");

            gato.src = `img/cat${i}.jpeg`;
            gato.className = "gato-fundo";
            gato.alt = "";

            esteira.appendChild(gato);
        }
    }
});


const imagemGato = document.querySelector(".imagem-gato img");

const numeroAleatorio = Math.floor(Math.random() * 21);

imagemGato.src = `img/cat${numeroAleatorio}.jpeg`;
