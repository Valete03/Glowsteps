const produtos =[
     {name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{id:1, name:'Retro 4', price:800, src:'images/retro4.webp'},
 {id:2, name:'Retro 4', price:800, src:'images/retro4.webp'},
{id:3, name:'Retro 4', price:800, src:'images/retro4.webp'},
{id:4, name:'Retro 4', price:800, src:'images/retro4.webp'},
{id:5, name:'Retro 4', price:800, src:'images/retro4.webp'},
{id:6, name:'Retro 4', price:800, src:'images/retro4.webp'},
 {id:7, name:'Retro 4', price:800, src:'images/retro4.webp'},
{id:8, name:'Retro 4', price:800, src:'images/retro4.webp'},
{id:9, name:'Retro 4', price:800, src:'images/retro4.webp'},
 {id:10, name:'Retro 4', price:800, src:'images/retro4.webp'},
 {id:11, name:'Retro 4', price:800, src:'images/retro4.webp'},
{id:12, name:'Retro 4', price:800, src:'images/retro4.webp'},
];

const productList = document.querySelector(".product-list");
const cart = document.querySelector('.cartcontent');
const fecharCart = document.querySelector('.close');
const openCart = document.querySelector('.openCart');
const conteudo = document.querySelector('.conteudo');
const precoTotalEl = document.querySelector('.preco-total');
const buyBtn = document.querySelector('.finalizador button');

let cartCount = 0;
const cartCountSpan = document.querySelector('.cart-count');

function partVisual() {
    let newLI = "";
    produtos.forEach((item) => {
        newLI += `<div class="card" data-id="${item.id}">
            <img src="${item.src}" alt="" class="image">
            <h4 class="title">${item.name}</h4>
            <p class="price">${item.price}MT</p>
            <button class="add">Add to cart</button>
        </div>`;
    });

    productList.innerHTML = newLI;

    const botoesAdd = document.querySelectorAll(".add");
  botoesAdd.forEach(botao => {
    botao.addEventListener("click", () => {
      const content = botao.closest(".card");
      addToCart(content);
    });
  });
}

// Primeira visualização
partVisual();

// Esconder carrinho
cart.style.display = 'none';

// Abrir
openCart.addEventListener('click', () => {
    cart.style.display = "block";
});

// Fechar
fecharCart.addEventListener('click', () => {
    cart.style.display = 'none';
});

function atualizarPrecoTotal() {
    let total = 0;
    const cartItems = document.querySelectorAll('.cartBox');

    cartItems.forEach(item => {
        const unitPrice = parseFloat(item.querySelector('.price').dataset.preco);
        const quantity = parseInt(item.querySelector('.quantidade').textContent);
        total += unitPrice * quantity;
    });

    document.querySelector(".preco-total").textContent = "Preço total: " + total + "MT";
}

//adicionar ao carrinho
function addToCart(produto) {
    const productId = produto.dataset.id;
    const productImg = produto.querySelector('img').src;
    const productTitle = produto.querySelector('h4.title').textContent;
    const productPrice = parseFloat(produto.querySelector('.price').textContent);

    const cartItem = document.querySelectorAll(".cartBox");
    for (let item of cartItem) {
        if (item.dataset.id === productId) {
            const quantityEL = item.querySelector(".quantidade");
            let quantity = parseInt(quantityEL.textContent);
            quantity++;
            quantityEL.textContent = quantity;

            cartCount++;
            cartCountSpan.textContent = cartCount;

            const subtotal = productPrice * quantity;
            item.querySelector(".subtotal").textContent = "Subtotal: " + subtotal + "MT";
            atualizarPrecoTotal();
            alert("Produto adicionado!")
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("cartBox");
    cartBox.dataset.id = productId;

    cartBox.innerHTML = `
    <img src="${productImg}" alt="">
    <p class="nome">${productTitle}</p>
    <p class="price" data-preco="${productPrice}">${productPrice}MT</p>
    <div class="advance">
      <button class="increase">+</button>
      <span class="quantidade">1</span>
      <button class="decrease">-</button>
      <button class="delete"><i class="bi bi-trash3"></i></button>
    </div>
    <p class="subtotal">Subtotal: ${productPrice}MT</p>`;

    conteudo.appendChild(cartBox);

    cartCount++;
    cartCountSpan.textContent = cartCount;
    atualizarPrecoTotal();

    // Aumentar
    cartBox.querySelector(".increase").addEventListener('click', () => {
        let quantityEL = cartBox.querySelector(".quantidade");
        let quantity = parseInt(quantityEL.textContent);
        quantity++;
        quantityEL.textContent = quantity;

        cartCount++;
        cartCountSpan.textContent = cartCount;

        const subtotal = productPrice * quantity;
        cartBox.querySelector(".subtotal").textContent = "Subtotal: " + subtotal + "MT";
        atualizarPrecoTotal();
    });

    // Diminuir
    cartBox.querySelector(".decrease").addEventListener("click", () => {
        let quantityEL = cartBox.querySelector(".quantidade");
        let quantity = parseInt(quantityEL.textContent);

        if (quantity > 1) {
            quantity--;
            quantityEL.textContent = quantity;

            cartCount--;
            cartCountSpan.textContent = cartCount;

            const subtotal = productPrice * quantity;
            cartBox.querySelector(".subtotal").textContent = "Subtotal: " + subtotal + "MT";
            atualizarPrecoTotal();
        }
    });

    // Deletar
    cartBox.querySelector(".delete").addEventListener("click", () => {
        let quantityEL = cartBox.querySelector(".quantidade");
        let quantity = parseInt(quantityEL.textContent);

        cartCount -= quantity;
        if (cartCount < 0) cartCount = 0;
        cartCountSpan.textContent = cartCount;

        cartBox.remove();
        atualizarPrecoTotal();
    });
}

const menus = document.querySelector('.menu');
const fecharMenu = document.querySelector('.fecharMenu');
const openMenu = document.querySelector(".burger-icon i")


menus.style.display='none'

openMenu.addEventListener('click', () =>{
    menus.style.display='block';
});

fecharMenu.addEventListener('click', ()=>{
    menus.style.display="none";
});


const Nikes = [
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    
];


const Adidas = [
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
];

const Puma = [
    {name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
{name:'Suede', price:700, src:'images/pumas.webp'},
]

const painelProdutos = document.querySelector('.product-list');

// Botão Nike
document.querySelector('.Nike').addEventListener('click', () => {
    let newLI1 = "";
    Nikes.forEach((item, index) => {
        newLI1 += `<div class="card" data-id="${item.name}-${item.price}-${index}">
            <img src="${item.src}" alt="" class="image">
            <h4 class="title">${item.name}</h4>
            <p class="price">${item.price}MT</p>
            <button class="add">Add to cart</button>
        </div>`;
    });
    painelProdutos.innerHTML = newLI1;
});

// Botão Diversos
// document.querySelector('.Diversos').addEventListener('click', () => {
//     let newLI1 = "";
//      produtos.forEach((item, index) => {
//         newLI1 += `<div class="card" data-id="${item.name}-${item.price}-${index}">
//             <img src="${item.src}" alt="" class="image">
//             <h4 class="title">${item.name}</h4>
//             <p class="price">${item.price}MT</p>
//             <button class="add">Add to cart</button>
//         </div>`;
//     });
//     painelProdutos.innerHTML = newLI1;
// });

// Botão Adidas
document.querySelector('.Adidas').addEventListener('click', () => {
    let newLI2 = "";
    Adidas.forEach((item, index) => {
        newLI2 += `<div class="card" data-id="${item.name}-${item.price}-${index}">
            <img src="${item.src}" alt="" class="image">
            <h4 class="title">${item.name}</h4>
            <p class="price">${item.price}MT</p>
            <button class="add">Add to cart</button>
        </div>`;
    });
    painelProdutos.innerHTML = newLI2;
});

//puma

document.querySelector('.Puma').addEventListener('click', () => {
    let newLI2 = "";
    Puma.forEach((item, index) => {
        newLI2 += `<div class="card" data-id="${item.name}-${item.price}-${index}">
            <img src="${item.src}" alt="" class="image">
            <h4 class="title">${item.name}</h4>
            <p class="price">${item.price}MT</p>
            <button class="add">Add to cart</button>
        </div>`;
    });
    painelProdutos.innerHTML = newLI2;
});

// função que mostra produtos e liga botões ao carrinho
function renderProducts(lista) {
    let html = "";
    lista.forEach((item, index) => {
        html += `<div class="card" data-id="${item.name}-${item.price}-${index}">
            <img src="${item.src}" alt="" class="image">
            <h4 class="title">${item.name}</h4>
            <p class="price">${item.price}MT</p>
            <button class="add">Add to cart</button>
        </div>`;
    });
    painelProdutos.innerHTML = html;

    // adicionar evento para cada botão
     const botoesAdd = document.querySelectorAll(".add");
  botoesAdd.forEach(botao => {
    botao.addEventListener("click", () => {
      const content = botao.closest(".card");
      addToCart(content);
    });
  });
}  
// Botão Nike
document.querySelector('.Nike').addEventListener('click', () => {
    renderProducts(Nikes);
});

// Botão Adidas
document.querySelector('.Adidas').addEventListener('click', () => {
    renderProducts(Adidas);
});

// Botão Puma
document.querySelector('.Puma').addEventListener('click', () => {
    renderProducts(Puma);
});

document.querySelector('.Diversos').addEventListener('click', () => { 
    renderProducts(produtos); });


const shoes = [
    {name:'Suede', price:700, src:'images/pumas.webp'},
     {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},
 {name:'Suede', price:700, src:'images/pumas.webp'},

    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},
    {name:'Campus', price:700, src:'images/campus1.webp'},

 {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
    {name:'Retro 4', price:800, src:'images/retro4.webp'},
]

function renderSearcProdutos(products) {
    let newProduct = '';

    products.forEach((item, index) => {
        newProduct += `<div class="card" data-id="${item.name}-${item.price}-${index}">
            <img src="${item.src}" alt="" class="image">
            <h4 class="title">${item.name}</h4>
            <p class="price">${item.price}MT</p>
            <button class="add">Add to cart</button>
        </div>`;
    });

    painelProdutos.innerHTML = newProduct;

    // Aqui ligamos os botões ao carrinho
    const botoesAdd = document.querySelectorAll(".add");
    botoesAdd.forEach(botao => {
        botao.addEventListener("click", () => {
            const content = botao.closest(".card");
            addToCart(content);
            saveCart(); // salva sempre que adicionar
        });
    });
}

function search() {
    const searchBox = document.querySelector('.search-input').value.toUpperCase().trim();

    if (searchBox === "") {
        // Input vazio: mostrar produtos iniciais
        renderProducts(produtos);
        return;
    }

    // Filtrar produtos da lista "shoes"
    const filteredProducts = shoes.filter(item =>
        item.name.toUpperCase().includes(searchBox)
    );

    renderSearcProdutos(filteredProducts);
}


//local stotage
function saveCart() {
    const cartItems = [];
    document.querySelectorAll('.cartBox').forEach(item => {
        cartItems.push({
            id: item.dataset.id,
            name: item.querySelector('.nome').textContent,
            price: parseFloat(item.querySelector('.price').dataset.preco),
            quantity: parseInt(item.querySelector('.quantidade').textContent),
            src: item.querySelector('img').src
        });
    });

    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    savedCart.forEach(item => {
        const cartBox = document.createElement('div');
        cartBox.classList.add('cartBox');
        cartBox.dataset.id = item.id;
        cartBox.innerHTML = `
            <img src="${item.src}" alt="">
            <p class="nome">${item.name}</p>
            <p class="price" data-preco="${item.price}">${item.price}MT</p>
            <div class="advance">
                <button class="increase">+</button>
                <span class="quantidade">${item.quantity}</span>
                <button class="decrease">-</button>
                <button class="delete">x</button>
            </div>
            <p class="subtotal">Subtotal: ${item.price * item.quantity}MT</p>
        `;
        conteudo.appendChild(cartBox);

        // Aqui você deve adicionar os eventos de aumentar/diminuir/excluir
        attachCartEvents(cartBox);
    });

    atualizarPrecoTotal();
}

// Função para ligar os botões do carrinho
function attachCartEvents(cartBox) {
    const price = parseFloat(cartBox.querySelector('.price').dataset.preco);

    cartBox.querySelector('.increase').addEventListener('click', () => {
        const quantityEL = cartBox.querySelector('.quantidade');
        quantityEL.textContent = parseInt(quantityEL.textContent) + 1;
        cartBox.querySelector('.subtotal').textContent = "Subtotal: " + price * parseInt(quantityEL.textContent) + "MT";
        saveCart();
        atualizarPrecoTotal();
    });

    cartBox.querySelector('.decrease').addEventListener('click', () => {
        const quantityEL = cartBox.querySelector('.quantidade');
        let qty = parseInt(quantityEL.textContent);
        if (qty > 1) qty--;
        quantityEL.textContent = qty;
        cartBox.querySelector('.subtotal').textContent = "Subtotal: " + price * qty + "MT";
        saveCart();
        atualizarPrecoTotal();
    });

    cartBox.querySelector('.delete').addEventListener('click', () => {
        cartBox.remove();
        saveCart();
        atualizarPrecoTotal();
    });
}


 
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector(".finalizarcompra");
  if (!btn) {
    console.error('Botão .finalizarcompra não encontrado');
    return;
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault(); // evita reload se estiver dentro de um form

    const itens = document.querySelectorAll(".cartBox");
    if (itens.length === 0) {
      alert("O carrinho está vazio.");
      return;
    }

    let mensagem = "Olá, quero comprar estes produtos:\n\n";
    let total = 0;

    itens.forEach(item => {
      const nome = item.querySelector(".nome")?.textContent?.trim() || "Produto";
      // tenta ler preço do atributo data-preco (o teu HTML já tem isso)
      let preco = parseFloat(item.querySelector(".price")?.dataset?.preco) || 0;
      // se não existir data-preco, tenta limpar o texto e converter
      if (!preco) {
        const textoPreco = item.querySelector(".price")?.textContent || "0";
        preco = parseFloat(textoPreco.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
      }
      const quantidade = parseInt(item.querySelector(".quantidade")?.textContent) || 1;
      const subtotal = preco * quantidade;
      total += subtotal;

      mensagem += `📦 ${nome}\nPreço unit.: ${preco}MT\nQtd: ${quantidade}\nSubtotal: ${subtotal}MT\n\n`;
    });

    mensagem += `💰 Total: ${total}MT`;

    // -> coloque o seu número no formato internacional, sem "+" e sem espaços:
    const numero = "258873660433";

    // montar link (wa.me funciona bem). alternativa: https://api.whatsapp.com/send?phone=...
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // abre nova aba; se o popup for bloqueado, redireciona na mesma aba
    const win = window.open(url, "_blank");
    if (!win) window.location.href = url;
  });
});
