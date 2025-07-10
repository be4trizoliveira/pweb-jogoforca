function jogarForca() {
            var palavras = ["amor", "baixinho", "coração", "docinho", "escola", "feijão", "gente", "humano", "igualdade", "juventude", "moleque", "natureza", "obrigado", "proteção", "queijo", "riacho", "saudade", "vitória", "universo", "zebra"];
            var partida = true;
            while (partida) {
                var palavra = palavras[Math.floor(Math.random() * 20)];
                var letraCerta = [];
                var letraErrada = [];
                var tentativas = 7;
                for (var i = 0; i < palavra.length; i++) {
                    letraCerta[i] = "_";
                }
                while (tentativas > 0) {
                    var andamento = "";
                    var listaErradas = "";
                    for (var i = 0; i < letraCerta.length; i++) {
                        andamento += letraCerta[i] + " ";
                    }
                    for (var i = 0; i < letraErrada.length; i++) {
                        listaErradas += letraErrada[i] + " ";
                    }
                    var jogada = prompt(andamento + "\nJogadas: " + listaErradas + "\nTentativas: " + tentativas + "\nDigite uma letra: ");
                    if (jogada.length !== 1) {
                        alert("Siga as regras do jogo.");
                        continue;
                    }
                    jogada = jogada.toLowerCase();
                    var letraRepetida = false;
                    for (var i = 0; i < letraCerta.length; i++) {
                        if (letraCerta[i] == jogada) {
                            letraRepetida = true;
                            break;
                        }
                    }
                    for (var i = 0; i < letraErrada.length; i++) {
                        if (letraErrada[i] == jogada) {
                            letraRepetida = true;
                            break;
                        }
                    }
                    if (letraRepetida) {
                        alert("Letra repetida.");
                        continue;
                    }
                    var acertou = false;
                    for (var i = 0; i < palavra.length; i++) {
                        if (palavra[i] == jogada) {
                            letraCerta[i] = jogada;
                            acertou = true;
                        }
                    }
                    if (!acertou) {
                        letraErrada[letraErrada.length] = jogada;
                        tentativas--;
                    }
                    var venceu = true;
                    for (var i = 0; i < letraCerta.length; i++) {
                        if (letraCerta[i] == "_") {
                            venceu = false;
                            break;
                        }
                    }
                    if (venceu) {
                        alert("Você acertou a palavra " + palavra);
                        break;
                    }
                }
                if (tentativas == 0) {
                    alert("Você errou a palavra " + palavra);
                }
                var resposta = prompt("Deseja jogar novamente? (Sim ou Não): ");
                if (!resposta || resposta.toLowerCase() !== "sim") {
                    partida = false;
                }
            }
        }