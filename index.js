//Array para 10 perguntas com 3 opções de resposta
const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para referenciar um script externo chamado 'xxx.js'?",
      //Array resposta dentro do Array pergunta
      respostas: [
        "<script href='xxx.js'>",
        "<script name='xxx.js'>",
        "<script src='xxx.js'>"
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve 'Hello World' em uma caixa de alerta?",
      respostas: [
        "msgBox('Hello World');",
        "alert('Hello World');",
        "console.log('Hello World');"
      ],
      correta: 1
    },
    {
      pergunta: "Como você cria uma função em JavaScript?",
      respostas: [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()"
      ],
      correta: 1
    },
    {
      pergunta: "Como você chama uma função chamada 'myFunction'?",
      respostas: [
        "call myFunction()",
        "myFunction()",
        "call function myFunction()"
      ],
      correta: 1
    },
    {
      pergunta: "Como escrever uma condicional IF em JavaScript?",
      respostas: [
        "if i = 5 then",
        "if i == 5 then",
        "if (i == 5)"
      ],
      correta: 2
    },
    {
      pergunta: "Como iniciar um loop FOR em JavaScript?",
      respostas: [
        "for (i <= 5; i++)",
        "for (i = 0; i <= 5; i++)",
        "for i = 1 to 5"
      ],
      correta: 1
    },
    {
      pergunta: "Como você adiciona um comentário em JavaScript?",
      respostas: [
        "'Isso é um comentário",
        "//Isso é um comentário",
        "<!--Isso é um comentário-->"
      ],
      correta: 1
    },
    {
      pergunta: "Como você arredonda o número 7.25 para o inteiro mais próximo?",
      respostas: [
        "Math.rnd(7.25)",
        "Math.round(7.25)",
        "round(7.25)"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método remove o último elemento de um array e retorna esse elemento?",
      respostas: [
        "last()",
        "pop()",
        "push()"
      ],
      correta: 1
    },
    {
      pergunta: "Como você encontra o número com o valor mais alto de x e y?",
      respostas: [
        "Math.ceil(x, y)",
        "Math.max(x, y)",
        "top(x, y)"
      ],
      correta: 1
    }
  ];
  
  //mapear o HTML
  //document: busca pelo objeto e transforma em js 
  //querySelector: pesquisa pelo seletor
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  //loop ou repetição - laço de repetição de cada pergunta
  //Para cada item de pergunta {entra no código}
  for(const item of perguntas) {
    
    //alert(item.pergunta)
    //template.content: Conteúdo do template
    //cloneNode: Função que clona o nó (tags)-(true)clona todos os nós
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    //loop ou repetição de cada respostas disponível
    for(let resposta of item.respostas) {
      //busca por uma informação dentro do dt
      //('dl dt') ficam separados para indicar que dt está dentro de dl
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //altera o nome dos clones
      dt.querySelector('span').textContent = resposta
      //seleciona o input, busca pelo nome e encontra o indice nº
      //IndexOf: Pesquisa o indice da pergunta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      //busca pela resposta no input
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      
      dt.querySelector('input').onchange = (event) => {
        //Verifica se a respota clicada é igual a insformada
        //==dois sinais comparam os valores sem considerar o tipo
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        //alert(estaCorreta)
        if(estaCorreta){
          //alert('Acertou')
          corretas.add(item)
        }
        //alert(corretas.size)
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      //quizItem é o template clonado
      //pergunta procura por um dl e adiciona um filho dt
      quizItem.querySelector('dl').appendChild(dt)
    }
    //remove a apresentação da resposta correta
    quizItem.querySelector('dl dt').remove()
  
    //Coloca a pergunta na tela
    //appendChild coloca um filho na tela
    quiz.appendChild(quizItem)
  }
  
  
  //alert(perguntas[0].respostas[perguntas[0].correta])
  
  
  
  
  
  