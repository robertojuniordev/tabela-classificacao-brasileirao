var americaMg = {
    nome: "América-MG",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var athleticoPr = {
    nome: "Athletico-PR",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var atleticoGo = {
    nome: "Atlético-Go",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var atleticoMg = {
    nome: "Atlético-Mg",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var bahia = {
    nome: "Bahia",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var bragantino = {
    nome: "Bragantino",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var ceara = {
    nome: "Ceará",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var chapecoense = {
    nome: "Chapecoense",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var corinthians = {
    nome: "Corinthians",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var cuiaba = {
    nome: "Cuiabá",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var flamengo = {
    nome: "Flamengo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var fluminense = {
    nome: "Fluminense",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var fortaleza = {
    nome: "Fortaleza",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var gremio = {
    nome: "Grêmio",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var internacional = {
    nome: "Internacional",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var juventude = {
    nome: "Juventude",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var palmeiras = {
    nome: "Palmeiras",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var santos = {
    nome: "Santos",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var saoPaulo = {
    nome: "São Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

var sport = {
    nome: "Sport",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0    
}

americaMg.pontos = calculaPontos(americaMg)
athleticoPr.pontos = calculaPontos(athleticoPr)
atleticoGo.pontos = calculaPontos(atleticoGo)
atleticoMg.pontos = calculaPontos(atleticoMg)
bahia.pontos = calculaPontos(bahia)
bragantino.pontos = calculaPontos(bragantino)
ceara.pontos = calculaPontos(ceara)
chapecoense.pontos = calculaPontos(chapecoense)
corinthians.pontos = calculaPontos(corinthians)
cuiaba.pontos = calculaPontos(cuiaba)
flamengo.pontos = calculaPontos(flamengo)
fluminense.pontos = calculaPontos(fluminense)
fortaleza.pontos = calculaPontos(fortaleza)
gremio.pontos = calculaPontos(gremio)
internacional.pontos = calculaPontos(internacional)
juventude.pontos = calculaPontos(juventude)
palmeiras.pontos = calculaPontos(palmeiras)
santos.pontos = calculaPontos(santos)
saoPaulo.pontos = calculaPontos(saoPaulo)
sport.pontos = calculaPontos(sport)

var times = [
    americaMg, athleticoPr, atleticoGo, atleticoMg, bahia, 
    bragantino, ceara, chapecoense, corinthians, cuiaba, 
    flamengo, fluminense, fortaleza, gremio, internacional, 
    juventude, palmeiras, santos, saoPaulo, sport
]

function addVitoria(i) {
    var time = times[i]
    time.vitorias++
    time.pontos = calculaPontos(time)
    exibirTimesNaTela(times)
}

function addEmpate(i) {
    var time = times[i]
    time.empates++
    time.pontos = calculaPontos(time)
    exibirTimesNaTela(times)
}

function addDerrota(i) {
    var time = times[i]
    time.derrotas++
    exibirTimesNaTela(times)
}

function calculaPontos(time) {
    var pontos = (time.vitorias * 3) + time.empates
    return pontos 
}

exibirTimesNaTela(times)

function exibirTimesNaTela(times) {
    var html = ""
    for(var i=0; i < times.length; i++){
        html += "<tr><td>" + times[i].nome + "</td>"
        html += "<td>" + times[i].vitorias + "</td>"
        html += "<td>" + times[i].empates + "</td>"
        html += "<td>" + times[i].derrotas + "</td>"
        html += "<td>" + times[i].pontos + "</td>"
        html += "<td><button onclick='addVitoria(" + i + ") '>Vitória</button></td>"
        html += "<td><button onclick='addEmpate(" + i + ") '>Empate</button></td>"
        html += "<td><button onclick='addDerrota(" + i + ") '>Derrota</button></td></tr>"
    }
    var tabelaTimes = document.getElementById('tabelaTimes')
    tabelaTimes.innerHTML = html
}

