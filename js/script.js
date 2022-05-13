const input = document.querySelector('#valor');
const enviar = document.querySelector('#enviar');
const chat = document.querySelector('.chat');
const text = document.querySelector('.text');
const texto = document.querySelector('.texto');
const titulo = document.createElement('h1')

let pedido;
let nome;
let endereco;
let pag;
let troco;
let valor;

const cardapio = [
    {
        id:1,
        sabor:'Calabresa',
        preco:29.90
    },
    {
        id:2,
        sabor:'Queijo',
        preco: 32.90
    },
    {
        id:3,
        sabor:'Portuguesa',
        preco:40.00
    
    },
    {
        id:4,
        sabor:'Frango',
        preco:35.00
    },    
    {
        id:5,
        sabor:'Canadense',
        preco:47.70
    },  
    {
        id:6,
        sabor:'Cubana',
        preco:35.00
    },
    {
        id:7,
        sabor:'Mussarela',
        preco:35.00
    },     
    {
        id:8,
        sabor:'Atum',
        preco:49.60
    },     
    {
        id:9,
        sabor:'Bacon',
        preco:41.60
    },  
    {
        id:10,
        sabor:'Bauru',
        preco:47.70
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


function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    textArray.forEach((letra, i) => {
        elemento.innerHTML = '';
        console.log(letra);
        setTimeout( ()=>{
            elemento.innerHTML += letra
        }, 75 * i)
    })
}

typeWriter(text);


function resetInput(){
    input.value = '';
}

function devolveNome(){
    const entrada = document.createElement('p')
    const res = document.createElement('p');
    nome = input.value;
    entrada.classList.add('espec')
    entrada.append(nome)
    res.classList.add('success')
    res.append(`Seja Bem Vindo ${nome} á JVPIZZAS`);
    chat.appendChild(entrada);
    typeWriter(res)
    chat.appendChild(res);
    listaCardapio();
}

function listaCardapio(){
    titulo.append('CARDÁPIO');
    chat.appendChild(titulo);  
    for (let i = 0; i < cardapio.length; i++){
        const res = document.createElement('p');
        res.classList.add('danger')
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
    typeWriter(res);
    chat.appendChild(res).value;
    enviar.onclick = function(){
        pedido = input.value;
        for (let i = 0; i < cardapio.length; i++){
            if(pedido == cardapio[i].id){
                entrada.classList.add('espec')
                entrada.append(pedido)
                chat.appendChild(entrada)
                resultado.append(`Seu pedido foi: ${cardapio[i].sabor}`)
                typeWriter(resultado)
                chat.appendChild(resultado);
                const perguntaNovoPedido = document.createElement('p');
                perguntaNovoPedido.append('Deseja efetuar um novo pedido? (S/N)')
                chat.appendChild(perguntaNovoPedido);
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
        res.classList.add('primary')
        res.append(`ID: ${pagamento[i].id} Forma: ${pagamento[i].forma}`);
        chat.appendChild(res); 
        resetInput();
    }
}

function perguntaPagamento(){
    const pergunta = document.createElement('p');
    const entrada = document.createElement('p');
    const resultado = document.createElement('p');
    resultado.append(`Valor total: R$${cardapio[pedido - 1].preco}`)
    chat.appendChild(resultado);
    listaPagamento();
    pergunta.append(`Qual é a forma de pagamento:`);
    chat.appendChild(pergunta).value;
    enviar.onclick = function(){
        pag = input.value;
        const resultado = document.createElement('p');
        for (let i = 0; i < pagamento.length; i++){
            if(pag == pagamento[i].id){
                entrada.classList.add("espec")
                entrada.append(pag)
                chat.appendChild(entrada);
                resultado.append(`Forma de pagamento selecionado: ${pagamento[i].forma}`);
                chat.appendChild(resultado);
                resetInput();
                if(pag == pagamento[2].id){
                    const perg = document.createElement('p');
                    perg.append('Digite o valor do troco:');
                    chat.appendChild(perg);
                    enviar.onclick= function(){
                        const res = document.createElement('p');
                        troco = input.value;
                        const entrada = document.createElement('p');
                        entrada.classList.add("espec")
                        entrada.append(`R$${troco}`)
                        chat.appendChild(entrada);
                        valor = troco - cardapio[pedido - 1].preco
                        res.append(`Valor do troco a devolver: R$${valor}`)
                        chat.appendChild(res)
                        resetInput()
                        finalizaPedido()
                    }
                }
                else{
                    const res = document.createElement('p')
                    res.classList.add('danger')
                    troco = 0;
                    valor = 0;
                    res.append('O motoboy levara a maquininha')
                    chat.appendChild(res)
                    finalizaPedido()
                }
            }
        }  
    }
}

function finalizaPedido(){
    const resultado = document.createElement('p');
    const pergunta = document.createElement('p');
    resultado.classList.add('bg-primary')
    resultado.classList.add('text-white')
    resultado.append(`Pedido: ${cardapio[pedido-1].sabor}, Valor Total: R$${cardapio[pedido - 1].preco}, endereco:${endereco}, Forma de Pagamento:${pagamento[pag-1].forma} Valor:R$${troco} Troco:R$${valor}`)
    chat.appendChild(resultado);
    pergunta.append('Confirmar Pedido: S/N')
    chat.appendChild(pergunta)
    confirmar = input.value
    enviar.onclick = function(){
        if(confirmar === 'S' || 's'){
            const res = document.createElement('p');
            res.append('Pedido Efetuado com Sucesso');
            chat.appendChild(res)
        }
        else if(confirmar === 'N' || 'n'){
            alert('Pedido Cancelado')
            devolveNome();
        }
    }
}

