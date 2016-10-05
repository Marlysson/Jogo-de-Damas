//DEFINIR CORES DE POSSÍVEIS PEÇAS
cor_player = {
	1: randomColor({hue:'blue',count:1}),
	2: randomColor({hue:'red',count:1})
};


//CHAMAR AS FUNÇÕES APÓS CARREGAR O "DOM"
document.addEventListener('DOMContentLoaded',function(){
	drawPecas();
	colorPecas();
});

//FUNÇÃO DE DESENHAR AS PEÇAS DOS OPONENTES.
function drawPecas(){

	var linhas = document.querySelectorAll('tr');

	function draw_player(jogador,inicio,final){

		//PEGA AS PRIMEIRAS OU AS ULTIMAS LINHAS
		for(linha = inicio ; linha < final ; linha++ ){

			if (linha % 2 == 0){ var resto = 0; }
			else{ resto = 1; }

			var celulas = linhas[linha].querySelectorAll('td');
			
			for(j = 0 ; j < celulas.length ; j++){
				if (j % 2 == resto){
					celulas[j].innerHTML += "<span class='player "+jogador+"'></span>";	
				}
			}	
		}	
	}


	draw_player('play1',0,3);
	draw_player('play2',5,8);

}

//FUNÇÃO DE COLORIR AS PEÇAS.
//**Pesquisar sobre closure.

function colorPecas(){

	function color_player(player,cor){
		player = document.getElementsByClassName(player);

		for(i = 0; i < player.length; i++){
			player[i].style.background = cor_player[cor];
		}
	}

	color_player('play1',1);
	color_player('play2',2);

}