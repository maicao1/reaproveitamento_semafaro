const imagem = document.getElementById('img');
const botoes = document.getElementById('buttons');
//variaves de por  o intervalo
let indiceCor = 0;
let idIntervalo = null;

//controla o indice das  cores (0,1,2 e volta para o 0)
const proximoIndice = ()=>{
    indiceCor =  indiceCor < 2 ? ++indiceCor : 0;
    // indece for menor que 2 volta para o 0 ,
    // se for verdadeiro acrecento 1 se for falso volta para o 0 

}
// objeto responsavel por ligar cada cor 
const ligar = {
  'apagada':()=> imagem.src = './img/luz apagada.png',
  'ligada':()=> imagem.src = '/img/luz ligada.png',
  'quase':()=> imagem.src = '/img/quase sem luz.png',
  'automatic':()=>idIntervalo = setInterval(mudarCor, 100)
  // pega o intervalo e muda com o tempo

}
//altera automaticamente as cores
const mudarCor = () => {
    const cores = ['quase','ligada','apagada'];
    const cor = cores [indiceCor];
    ligar [cor]();
    proximoIndice();
}
/////////////////////////////////
//modo automatico
// cria um funçao para ligar ou para ele  
const pararAutomatico = ()=>{
    clearInterval(idIntervalo);
}
//controla o click dos botao
const controlarluz = (event) =>{
    pararAutomatico();
    ligar [event.target.id]();
    
}
botoes.addEventListener('click',controlarluz);