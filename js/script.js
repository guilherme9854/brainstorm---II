const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

export const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter, além de gerar imagens e áudios hiper-realistas. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Foi atrás de vídeos, artigos e mais informações sobre como utilizar essa tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre o tema. No fim de uma aula, ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para ajudar a encontrar informações relevantes para o trabalho e explicá-las em uma linguagem que facilite o entendimento.",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada, e isso ajudou muito em suas pesquisas sobre assuntos complexos."
                ]
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, em algumas pesquisas na internet e em conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever o trabalho.",
                    "Achou que era muito mais fácil procurar respostas utilizando meios mais tradicionais, mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar e, por isso, prefere fazer suas tarefas com pouca intromissão da tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foram feitas a pesquisa e a escrita. Nessa conversa, também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar as habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com a tecnologia.",
                    "Participa ativamente do desenvolvimento de soluções criativas e da melhoria de processos em IA."
                ]
            },
            {
                texto: "Preocupa-se com as pessoas que perderão seus empregos para máquinas e defende a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas a motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização da IA de forma ética.",
                    "Criou grupos de ética voltados para a IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre a IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Notou também que muitas pessoas ainda não sabem utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                    "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade e, por isso, vem estimulando pessoas em suas redes sociais a fazerem pintura em aquarela."
                ]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem por IA.",
                afirmacao: [
                    "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldade em desenhar manualmente a utilizá-los também!",
                    "Compartilhou artes nas redes sociais como forma de ensinar a se comunicar através da arte.",
                    "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tirarem suas ideias do papel."
                ]
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte. O andamento está um pouco atrasado e uma pessoa do seu grupo decidiu fazê-lo com a ajuda da IA. O problema é que o trabalho está totalmente idêntico ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho; por isso, não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente, passou a utilizar a IA para fazer todas as suas tarefas e agora se sente dependente dela para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção, pois toda máquina erra. Por isso, revisar o trabalho e contribuir com perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que a programou e que muito do que o chat escrevia não refletia o que você pensava. Por isso, sabe que os textos gerados pela IA devem servir como auxílio, e não como resultado final."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = ""; 
}

function aleatorio(lista) {
    if (Array.isArray(lista)) {
        const posicao = Math.floor(Math.random() * lista.length);
        return lista[posicao];
    }
    return lista;
}

mostraPergunta();