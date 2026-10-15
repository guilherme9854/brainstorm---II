import {aleatorio} from &#39;./aleatorio.js&#39;;
import {perguntas} from &#39;./perguntas.js&#39;;

const caixaPrincipal = document.querySelector(&quot;.caixa-principal&quot;);
const caixaPerguntas = document.querySelector(&quot;.caixa-perguntas&quot;);
const caixaAlternativas = document.querySelector(&quot;.caixa-alternativas&quot;);
const caixaResultado = document.querySelector(&quot;.caixa-resultado&quot;);
const textoResultado = document.querySelector(&quot;.texto-resultado&quot;);
const botaoJogarNovamente = document.querySelector(&quot;.novamente-btn&quot;);

let atual = 0;
let perguntaAtual;
let historiaFinal = &quot;&quot;;

function mostraPergunta() {
if (atual &gt;= perguntas.length) {
mostraResultado();
return;
}

perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = &quot;&quot;;
mostraAlternativas();
}

function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement(&quot;button&quot;);
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener(&quot;click&quot;, () =&gt; respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + &quot; &quot;;
atual++;
mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = &quot;Em 2049...&quot;;
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = &quot;&quot;;
caixaResultado.classList.add(&quot;mostrar&quot;);
botaoJogarNovamente.addEventListener(&quot;click&quot;, jogaNovamente);
}

function jogaNovamente(){
atual = 0;
historiaFinal = &quot;&quot;;
caixaResultado.classList.remove(&quot;mostrar&quot;);

mostraPergunta();
}

mostraPergunta();