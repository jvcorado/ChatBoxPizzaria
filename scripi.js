const input = document.querySelector('#valor');
const enviar = document.querySelector('#enviar');
const chat = document.querySelector('.chat');
const titulo = document.createElement('h1')

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
        preco:50.50
    
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
    const entrada = document.createElement('p')
    entrada.classList.add('espec')
    const res = document.createElement('p');
    nome = input.value;
    entrada.append(nome)
    res.append(`Seja Bem Vindo ${nome} á JVPIZZAS`);
    chat.appendChild(entrada);
    chat.appendChild(res);
    listaCardapio();
}

function listaCardapio(){
    titulo.append('CARDÁPIO');  
    chat.appendChild(titulo);  
    for (let i = 0; i < cardapio.length; i++){
        const res = document.createElement('p');
        res.append(`ID: ${cardapio[i].id} Sabor: ${cardapio[i].sabor} Valor: ${cardapio[i].preco}`);
        chat.appendChild(res); 
        resetInput();
    }
    perguntaPedido();

}

function perguntaPedido(){
    const res = document.createElement('p');
    const entrada = document.createElement('p')
    const resultado = document.createElement('p');
    res.append(`${nome} Digite o id do pedido: `);
    chat.appendChild(res).value;
    enviar.onclick = function(){
        pedido = input.value;
        for (let i = 0; i < cardapio.length; i++){
            if(pedido == cardapio[i].id){
                entrada.classList.add('espec')
                entrada.append(pedido)
                chat.appendChild(entrada)
                resultado.append(`Seu pedido foi: ${cardapio[i].sabor}`)
                chat.appendChild(resultado);
                perguntaEndereco();
                resetInput();
            }
        }
    }
}

function perguntaEndereco(){
    const pergunta = document.createElement('p');
    const res = document.createElement('p');
    const entrada = document.createElement('p')
    let endereco;
    pergunta.append(`Qual é o seu endereço:`);
    chat.appendChild(pergunta).value;
    enviar.onclick = function(){
        endereco = input.value;
        entrada.classList.add("espec")
        entrada.append(endereco)
        chat.appendChild(entrada);
        res.append(`Seu endereço é: ${endereco}`);
        chat.appendChild(res);
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

