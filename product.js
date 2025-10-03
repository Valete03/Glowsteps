const produtos = [
  {id:1, name:'NIKE SB', price:2200, src:'shoes2/nike/m45022151126_1.jpg'},
  {id:2, name:'NIKE Air MAX', price:2200, src:'shoes2/nike/41hxrUprBwL._SL500.jpg'},
  {id:3, name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/7144310582.jpg'}, 
  {id:4, name:'Nike', price:2100, src:'shoes2/nike/jd_752660_b.webp'},
  {id:5, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (23).webp'},
  {id:6, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (24).webp'},
  {id:7, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (25).webp'},
  {id:8, name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jd_619586_b.webp'},
  {id:9, name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jd_691345_c.webp'},
  {id:10, name:'ADIDAS', price:2199, src:'shoes2/Adidas/jdpt_product_list (4).webp'},
  {id:11, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (5).webp'},
  {id:12, name:'NIKE Retro 4', price:2200, src:'shoes2/nike/CT8527-700_2.webp'},
  {id:13, name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/e7481f47ca3bb879d48c258387cf9ba3.jpg'},
  {id:14, name:'NIKE Air Jordan', price:2200, src:'shoes2/nike/becce9fc6575f718269f41e4435e4201.jpg'},
  {id:15, name:'NIKE Air force', price:2100, src:'shoes2/nike/jd_727078_b.webp'},
  {id:16, name:'NIKE Jordan', price:2000, src:'shoes2/nike/jd_752326_b.webp'},
  {id:17, name:'ADIDAS', price:2100, src:'shoes2/Adidas/jdpt_product_list (6).webp'},
  {id:18, name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jdpt_product_list (7).webp'},
  {id:19, name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jdpt_product_list (8).webp'},
  {id:20, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (9).webp'},
  {id:21, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (10).webp'},
  {id:22, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (11).webp'},
  {id:23, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (12).webp'},
  {id:24, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (13).webp'},
  {id:25, name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (14).webp'},
  {id:26, name:'NEW BALANCE', price:2200, src:'shoes2/Adidas/jdpt_product_list (35).webp'},
  {id:27, name:'NEW BALANCE', price:2200, src:'shoes2/Adidas/jdpt_product_list (36).webp'},
  {id:28, name:'NIKE Air Max', price:2200, src:'shoes2/nike/2024120214290719-175.webp'},
  {id:29, name:'NIKE Jordan', price:2200, src:'shoes2/nike/jd_754823_b.webp'},
  {id:30, name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/medium_25a35f0c-3fdb-4d59-9007-9cdc6372db4d.jpg'},
  {id:31, name:'NIKE Air MAX', price:2200, src:'shoes2/nike/tenis-esportivo-nike-feminino-air-max-portal-hf3053-011-cinza-hf3053-011-6-.webp'},
  {id:32, name:'Campus', price:2200, src:'shoes2/Adidas/jd_619310_c.webp'},
  {id:33, name:'NEW BALANCE', price:2200, src:'shoes2/Adidas/jdpt_product_list (37).webp'},
  {id:34, name:'REEBOOK', price:2200, src:'shoes2/Adidas/jdpt_product_list (38).webp'},
  {id:35, name:'REEBOOK', price:2200, src:'shoes2/Adidas/jdpt_product_list (39).webp'},
  {id:36, name:'REEBOOK', price:2200, src:'shoes2/Adidas/jdpt_product_list (40).webp'},
  {id:37, name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (41).webp'},
  {id:38, name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (42).webp'},
  {id:39, name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (43).webp'},
  {id:40, name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (44).webp'}
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
           {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (8).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (9).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (10).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (11).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (12).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (13).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (14).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list.webp'},
    {name:' NIKE SB', price:2200, src:'shoes2/nike/m45022151126_1.jpg'},
{name:'NIKE Air MAX', price:2200, src:'shoes2/nike/41hxrUprBwL._SL500.jpg'},
  {name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/7144310582.jpg'},
     {name:'NIKE Air Max', price:2200, src:'shoes2/nike/2024120214290719-175.webp'},
     {name:'NIKE Retro 4', price:2200, src:'shoes2/nike/CT8527-700_2.webp'},
    {name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/e7481f47ca3bb879d48c258387cf9ba3.jpg'},
     {name:'NIKE Air Jordan', price:2200, src:'shoes2/nike/becce9fc6575f718269f41e4435e4201.jpg'},
    {name:'NIKE Air force', price:2100, src:'shoes2/nike/jd_727078_b.webp'},
     {name:'NIKE Jordan', price:2000, src:'shoes2/nike/jd_752326_b.webp'},
      {name:'NIKE Jordan', price:2200, src:'shoes2/nike/jd_754823_b.webp'},
     {name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/medium_25a35f0c-3fdb-4d59-9007-9cdc6372db4d.jpg'},
     {name:'NIKE Air MAX', price:2200, src:'shoes2/nike/tenis-esportivo-nike-feminino-air-max-portal-hf3053-011-cinza-hf3053-011-6-.webp'},
     {name:'NIKE Air FORCE', price:2100, src:'shoes2/nike/jd_030664_b.webp'},
      {name:'NIKE', price:2200, src:'shoes2/nike/jd_133165_b.webp'},
      {name:'NIKE Air Jordan 1', price:2200, src:'shoes2/nike/jd_391425_b.webp'},
       {name:'NIKE', price:2200, src:'shoes2/nike/jd_457067_b.webp'},
      {name:'NIKE', price:2100, src:'shoes2/nike/jd_689803_b.webp'},
 {name:'NIKE', price:2200, src:'shoes2/nike/jd_726813_b.webp'},
 {name:'NIKE', price:2200, src:'shoes2/nike/jd_727934_b.webp'},
 {name:'NIKE', price:2100, src:'shoes2/nike/jd_752280_b.webp'},
 {name:'NIKE', price:2200, src:'shoes2/nike/jd_752281_b.webp'},
 {name:'NIKE', price:2200, src:'shoes2/nike/jd_752660_b.webp'},
 {name:'NIKE', price:2100, src:'shoes2/nike/jd_752664_b.webp'},
   {name:'NIKE', price:2100, src:'shoes2/nike/jd_763075_b.webp'},
    {name:'NIKE', price:2200, src:'shoes2/nike/jd_763081_b.webp'},
     {name:'NIKE', price:2200, src:'shoes2/nike/jd_763142_b.webp'},
      {name:'NIKE', price:2200, src:'shoes2/nike/jd_763147_b.webp'},
       {name:'NIKE', price:2200, src:'shoes2/nike/jd_763545_b.webp'},
        {name:'NIKE', price:2200, src:'shoes2/nike/jd_763546_b.webp'},
         {name:'NIKE', price:1999, src:'shoes2/nike/jd_763831_b.webp'},
          {name:'NIKE', price:2200, src:'shoes2/nike/jd_764400_b.webp'},
{name:'NIKE', price:2200, src:'shoes2/nike/jd_764404_b.webp'},
 {name:'NIKE', price:2200, src:'shoes2/nike/jd_764405_b.webp'},
  {name:'NIKE', price:2200, src:'shoes2/nike/jd_765172_b.webp'},
   {name:'NIKE', price:2200, src:'shoes2/nike/jd_765173_b.webp'},
    {name:'NIKE', price:2100, src:'shoes2/nike/jd_772995_b.webp'},
     {name:'NIKE', price:2200, src:'shoes2/nike/jd_773071_b.webp'},
      {name:'NIKE', price:2200, src:'shoes2/nike/jd_773072_b.webp'},
       {name:'NIKE', price:2199, src:'shoes2/nike/jdpt_product_list (1).webp'},
        {name:'NIKE', price:2200, src:'shoes2/nike/jdpt_product_list (2).webp'},
         {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (3).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (4).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (5).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (6).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (7).webp'},
   
];


const Adidas = [
    {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jd_619310_c.webp'},
    {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jd_619586_b.webp'},
    {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jd_691345_c.webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (4).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (5).webp'},
    {name:'ADIDAS ', price:2100, src:'shoes2/Adidas/jdpt_product_list (6).webp'},
    {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jdpt_product_list (7).webp'},
    {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jdpt_product_list (8).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (9).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (10).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (11).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (12).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (13).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (14).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (15).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (16).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (17).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (18).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (19).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (20).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (21).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (22).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (23).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (24).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (25).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list.webp'},
];

const Puma = [
{name:'PUMA', price:2180, src:'shoes2/Adidas/jdpt_product_list (26).webp'},
    {name:'PUMA', price:2180, src:'shoes2/Adidas/jdpt_product_list (27).webp'},
    {name:'PUMA', price:2180, src:'shoes2/Adidas/jdpt_product_list (28).webp'},
    {name:'PUMA', price:2180, src:'shoes2/Adidas/jdpt_product_list (29).webp'},
    {name:'PUMA', price:2099, src:'shoes2/Adidas/jdpt_product_list (30).webp'},
    {name:'PUMA', price:2180, src:'shoes2/Adidas/jdpt_product_list (31).webp'},
    {name:'PUMA', price:2180, src:'shoes2/Adidas/jdpt_product_list (32).webp'},
    {name:'PUMA', price:2180, src:'shoes2/Adidas/jdpt_product_list (33).webp'},
    {name:'PUMA', price:2180, src:'shoes2/Adidas/jdpt_product_list (34).webp'},
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
    let newLI4 = "";
    Puma.forEach((item, index) => {
        newLI4 += `<div class="card" data-id="${item.name}-${item.price}-${index}">
            <img src="${item.src}" alt="" class="image">
            <h4 class="title">${item.name}</h4>
            <p class="price">${item.price}MT</p>
            <button class="add">Add to cart</button>
        </div>`;
    });

    painelProdutos.innerHTML = newLI4;
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


const shoes = [
    {name:' NIKE SB', price:2200, src:'shoes2/nike/m45022151126_1.jpg'},
{name:'NIKE Air MAX', price:2200, src:'shoes2/nike/41hxrUprBwL._SL500.jpg'},
  {name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/7144310582.jpg'},
     {name:'NIKE Air Max', price:2200, src:'shoes2/nike/2024120214290719-175.webp'},
     {name:'NIKE Retro 4', price:2200, src:'shoes2/nike/CT8527-700_2.webp'},
    {name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/e7481f47ca3bb879d48c258387cf9ba3.jpg'},
     {name:'NIKE Air Jordan', price:2200, src:'shoes2/nike/becce9fc6575f718269f41e4435e4201.jpg'},
    {name:'NIKE Air force', price:2100, src:'shoes2/nike/jd_727078_b.webp'},
     {name:'NIKE Jordan', price:2000, src:'shoes2/nike/jd_752326_b.webp'},
      {name:'NIKE Jordan', price:2200, src:'shoes2/nike/jd_754823_b.webp'},
     {name:'NIKE SB Dunk', price:2200, src:'shoes2/nike/medium_25a35f0c-3fdb-4d59-9007-9cdc6372db4d.jpg'},
     {name:'NIKE Air MAX', price:2200, src:'shoes2/nike/tenis-esportivo-nike-feminino-air-max-portal-hf3053-011-cinza-hf3053-011-6-.webp'},
     {name:'NIKE Air FORCE', price:2100, src:'shoes2/nike/jd_030664_b.webp'},
      {name:'NIKE', price:2200, src:'shoes2/nike/jd_133165_b.webp'},
      {name:'NIKE Air Jordan 1', price:2200, src:'shoes2/nike/jd_391425_b.webp'},
       {name:'NIKE', price:2200, src:'shoes2/nike/jd_457067_b.webp'},
      {name:'NIKE', price:2100, src:'shoes2/nike/jd_689803_b.webp'},
    {name:'NIKE', price:2200, src:'shoes2/nike/jd_752281_b.webp'},
 {name:'NIKE', price:2200, src:'shoes2/nike/jd_752660_b.webp'},
 {name:'NIKE', price:2100, src:'shoes2/nike/jd_752664_b.webp'},
   {name:'NIKE', price:2100, src:'shoes2/nike/jd_763075_b.webp'},
    {name:'NIKE', price:2200, src:'shoes2/nike/jd_763081_b.webp'},
     {name:'NIKE', price:2200, src:'shoes2/nike/jd_763142_b.webp'},
      {name:'NIKE', price:2200, src:'shoes2/nike/jd_763147_b.webp'},
       {name:'NIKE', price:2200, src:'shoes2/nike/jd_763545_b.webp'},
        {name:'NIKE', price:2200, src:'shoes2/nike/jd_763546_b.webp'},
         {name:'NIKE', price:1999, src:'shoes2/nike/jd_763831_b.webp'},
          {name:'NIKE', price:2200, src:'shoes2/nike/jd_764400_b.webp'},
          {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jd_619586_b.webp'},
    {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jd_691345_c.webp'},
    {name:'ADIDAS', price:1890, src:'shoes2/Adidas/jdpt_product_list (4).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (5).webp'},
    {name:'ADIDAS ', price:2100, src:'shoes2/Adidas/jdpt_product_list (6).webp'},
    {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jdpt_product_list (7).webp'},
    {name:'ADIDAS Campus', price:2200, src:'shoes2/Adidas/jdpt_product_list (8).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (9).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (10).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (11).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (12).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (13).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (14).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (15).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (16).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (17).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (18).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (19).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (20).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (21).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (22).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (23).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (24).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list (25).webp'},
    {name:'NEW BALANCE', price:2200, src:'shoes2/Adidas/jdpt_product_list (35).webp'},
    {name:'NEW BALANCE', price:2200, src:'shoes2/Adidas/jdpt_product_list (36).webp'},
    {name:'NEW BALANCE', price:2200, src:'shoes2/Adidas/jdpt_product_list (37).webp'},
    {name:'REEBOOK', price:2200, src:'shoes2/Adidas/jdpt_product_list (38).webp'},
    {name:'REEBOOK', price:2200, src:'shoes2/Adidas/jdpt_product_list (39).webp'},
    {name:'REEBOOK', price:2200, src:'shoes2/Adidas/jdpt_product_list (40).webp'},
    {name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (41).webp'},
    {name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (42).webp'},
    {name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (43).webp'},
    {name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (44).webp'},
    {name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (45).webp'},
    {name:'ALL STAR', price:2200, src:'shoes2/Adidas/jdpt_product_list (46).webp'},
    {name:'ADIDAS', price:2200, src:'shoes2/Adidas/jdpt_product_list.webp'},
{name:'NIKE', price:2200, src:'shoes2/nike/jd_764404_b.webp'},
 {name:'NIKE', price:2200, src:'shoes2/nike/jd_764405_b.webp'},
  {name:'NIKE', price:2200, src:'shoes2/nike/jd_765172_b.webp'},
   {name:'NIKE', price:2200, src:'shoes2/nike/jd_765173_b.webp'},
    {name:'NIKE', price:2100, src:'shoes2/nike/jd_772995_b.webp'},
     {name:'NIKE', price:2200, src:'shoes2/nike/jd_773071_b.webp'},
      {name:'NIKE', price:2200, src:'shoes2/nike/jd_773072_b.webp'},
       {name:'NIKE', price:2199, src:'shoes2/nike/jdpt_product_list (1).webp'},
        {name:'NIKE', price:2200, src:'shoes2/nike/jdpt_product_list (2).webp'},
         {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (3).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (4).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (5).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (6).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (7).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (8).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (9).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (10).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (11).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (12).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (13).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list (14).webp'},
          {name:'NIKE', price:2100, src:'shoes2/nike/jdpt_product_list.webp'},
   
 ];

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


window.addEventListener("load", () => {
    // verifica se já existe a chave "primeiraVez"
    if (!localStorage.getItem("primeiraVez")) {
        alert("Escolha os produtos e coloque no carrinho!");
        // cria a chave para não mostrar de novo
        localStorage.setItem("primeiraVez", "true");
    }
});
