const nome = document.querySelector('#name');
const chat = document.querySelector('.chat');


const cardapio = [
    {
        id:1,
        sabor:'Calabresa',
        preco:30.00
    },
    {
        id:2,
        sabor:'Queijo',
        preco:40.00
    },
    {
        id:3,
        sabor:'Portuguesa',
        preco:50.00
    
    },
    {
        id:4,
        sabor:'Frango',
        preco:50.00
    },                                                           
]

function listaCardapio(){
    const h1 = document.createElement('h1')
    h1.append('CARDÁPIO');  
    chat.appendChild(h1);  
    for (let i = 0; i < cardapio.length; i++){
        const res = document.createElement('p');
        res.append(`ID: ${cardapio[i].id} Sabor: ${cardapio[i].sabor} Valor: ${cardapio[i].preco}`);
        chat.appendChild(res); 
    }
    perguntaPedido();
}

function devolveNome(){
    const res = document.createElement('p');
    res.append(`Seja Bem Vindo ${nome.value} á JVPIZZAS`);
    chat.appendChild(res);
    listaCardapio();
}

function perguntaPedido(){
    const pergunta = document.createElement('p');
    const inputPedido = document.createElement('input');
    const btnPedido = document.createElement('button');
    let pedido;
    pergunta.append(`Digite o id do pedido: ${nome.value}`);
    chat.appendChild(pergunta).value;
    chat.appendChild(inputPedido).value;
    btnPedido.textContent ='enivar';
    btnPedido.onclick = function(){
        pedido = inputPedido.value;
        const resultado = document.createElement('p');
        chat.appendChild(resultado);
        for (let i = 0; i < cardapio.length; i++){
            if(pedido == cardapio[i].id){
                resultado.append(`Seu pedido foi: ${cardapio[i].sabor}`);
                perguntaEndereco();
            }
        }
    }
    chat.appendChild(btnPedido);
    return pedido;
}

function perguntaEndereco(){
    const pergunta = document.createElement('p');
    const inputEndereço = document.createElement('input');
    const btnEndereço = document.createElement('button');
    let endereco;
    pergunta.append(`Qual é o seu endereço: `);
    chat.appendChild(pergunta).value;
    chat.appendChild(inputEndereço).value;
    btnEndereço.textContent ='enivar';
    btnEndereço.onclick = function(){
        endereco = inputEndereço.value;
        const resultado = document.createElement('p');
        resultado.append(`Seu endereço é: ${endereco}`);
        chat.appendChild(resultado);
    }
    chat.appendChild(btnEndereço);
}

function finalizaPedido(){
    const pergunta = document.createElement('p');
    const inputEndereço = document.createElement('input');
    const btnFinalizar = document.createElement('button');
    let finalizar;
    pergunta.append(`Seu pedido: ${pedido}`);
    chat.appendChild(pergunta).value;
    chat.appendChild(inputEndereço).value;
    btnEndereço.textContent ='enivar';
    btnEndereço.onclick = function(){
        endereco = inputEndereço.value;
        const resultado = document.createElement('p');
        resultado.append(`Seu endereço é: ${endereco}`);
        chat.appendChild(resultado);
    }
    chat.appendChild(btnEndereço);
}

