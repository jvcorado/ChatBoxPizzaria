const input = document.querySelector('#valor');
const enviar = document.querySelector('#enviar');
const chat = document.querySelector('.chat');
let pedido;
let nome;

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

const pagamento = [
    {
        id: 1,
        forma: 'Cartão crédito'
    },
    {
        id: 2,
        forma: 'Cartão Debito'
    },
    {
        id: 3,
        forma: 'Dinheiro'
    }
]

function resetInput(){
    input.value = '';
}

function devolveNome(){
    const res = document.createElement('p');
    nome = input.value;
    res.append(`Seja Bem Vindo ${nome} á JVPIZZAS`);
    chat.appendChild(res);
    listaCardapio();
     

}

function listaCardapio(){
    const h1 = document.createElement('h1')
    h1.append('CARDÁPIO');  
    chat.appendChild(h1);  
    for (let i = 0; i < cardapio.length; i++){
        const res = document.createElement('p');
        res.append(`ID: ${cardapio[i].id} Sabor: ${cardapio[i].sabor} Valor: ${cardapio[i].preco}`);
        chat.appendChild(res); 
        resetInput();
    }
    perguntaPedido();

}

function perguntaPedido(){
    const pergunta = document.createElement('p');
    pergunta.append(`${nome} Digite o id do pedido: `);
    chat.appendChild(pergunta).value;
    enviar.onclick = function(){
        pedido = input.value;
        const resultado = document.createElement('p');
        chat.appendChild(resultado);
        for (let i = 0; i < cardapio.length; i++){
            if(pedido == cardapio[i].id){
                resultado.append(`Seu pedido foi: ${cardapio[i].sabor}`);
                perguntaEndereco();
                resetInput();
            }
        }
    }
    chat.appendChild(btnPedido);
    return pedido;
}

function perguntaEndereco(){
    const pergunta = document.createElement('p');
    let endereco;
    pergunta.append(`Qual é o seu endereço:`);
    chat.appendChild(pergunta).value;
    enviar.onclick = function(){
        endereco = input.value;
        const resultado = document.createElement('p');
        resultado.append(`Seu endereço é: ${endereco}`);
        chat.appendChild(resultado);
        perguntaPagamento();
        resetInput();
    }
}

function listaPagamento(){
    const h1 = document.createElement('h1')
    h1.append('Forma de Pagamento');  
    chat.appendChild(h1);  
    for (let i = 0; i < pagamento.length; i++){
        const res = document.createElement('p');
        res.append(`ID: ${pagamento[i].id} Forma: ${pagamento[i].forma}`);
        chat.appendChild(res); 
        resetInput();
    }
}

function perguntaPagamento(){
    const pergunta = document.createElement('p');
    let pag;
    const resultado = document.createElement('p');
    resultado.append(`Valor total: R$${cardapio[pedido - 1].preco}`)
    chat.appendChild(resultado);
    listaPagamento();
    pergunta.append(`Qual é a forma de pagamento:`);
    chat.appendChild(pergunta).value;
    enviar.onclick = function(){
        pag = input.value;
        const resultado = document.createElement('p');
        chat.appendChild(resultado);
        for (let i = 0; i < pagamento.length; i++){
            if(pag == pagamento[i].id){
                resultado.append(`Forma de pagamento selecionado: ${pagamento[i].forma}`);
                resetInput();
            }
        }
    }
    chat.appendChild(btnPagamento);
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

