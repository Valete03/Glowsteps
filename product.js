const produtos =[
      {id:1,name:'Campus', price:1800, src:'images/campus1.webp'},
    {id:2,name:'Sambas', price:1900, src:'types of shoes/Adidas/jdpt_product_list (1).webp'},
     {id:2,name:'Sambas', price:1900, src:'types of shoes/Adidas/jdpt_product_list (1).webp'},
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
    {name:'Dunk', price:2000, src:'shoes2/nike/m45022151126_1.jpg'},
{name:'Dunk', price:2000, src:'shoes2/nike/41hxrUprBwL._SL500.jpg'},
  {name:'Dunk', price:2000, src:'shoes2/nike/7144310582.jpg'},
     {name:'Dunk', price:2000, src:'shoes2/nike/2024120214290719-175.webp'},
     {name:'Retro 4', price:2000, src:'shoes2/nike/CT8527-700_2.webp'},
    {name:'Dunk', price:2000, src:'shoes2/nike/e7481f47ca3bb879d48c258387cf9ba3.jpg'},
     {name:'Dunk', price:2000, src:'shoes2/nike/becce9fc6575f718269f41e4435e4201.jpg'},
    {name:'Air force', price:2000, src:'shoes2/nike/jd_727078_b.webp'},
     {name:'Jordan', price:2000, src:'shoes2/nike/jd_752326_b.webp'},
      {name:'Jordan', price:2000, src:'shoes2/nike/jd_754823_b.webp'},
     {name:'Dunk', price:2000, src:'shoes2/nike/medium_25a35f0c-3fdb-4d59-9007-9cdc6372db4d.jpg'},
     {name:'Dunk', price:2000, src:'shoes2/nike/tenis-esportivo-nike-feminino-air-max-portal-hf3053-011-cinza-hf3053-011-6-.webp'},
     {name:'Dunk', price:2000, src:'shoes2/nike/jd_030664_b.webp'},
      {name:'Dunk', price:2000, src:'shoes2/nike/jd_133165_b.webp'},
      {name:'Dunk', price:2000, src:'shoes2/nike/jd_391425_b.webp'},
       {name:'Dunk', price:2000, src:'shoes2/nike/jd_457067_b.webp'},
      {name:'Dunk', price:2000, src:'shoes2/nike/jd_689803_b.webp'},
 {name:'Dunk', price:2000, src:'shoes2/nike/jd_726813_b.webp'},
 {name:'Dunk', price:2000, src:'shoes2/nike/jd_727078_b.webp'},
 {name:'Dunk', price:2000, src:'shoes2/nike/jd_727934_b.webp'},
 {name:'Dunk', price:2000, src:'shoes2/nike/jd_752280_b.webp'},
 {name:'Dunk', price:2000, src:'shoes2/nike/jd_752281_b.webp'},
 {name:'Dunk', price:2000, src:'shoes2/nike/jd_752326_b.webp'},
 {name:'Dunk', price:2000, src:'shoes2/nike/jd_752660_b.webp'},
 {name:'Dunk', price:2000, src:'shoes2/nike/jd_752664_b.webp'},
  {name:'Dunk', price:2000, src:'shoes2/nike/jd_754823_b.webp'},
   {name:'Dunk', price:2000, src:'shoes2/nike/jd_763075_b.webp'},
    {name:'Dunk', price:2000, src:'shoes2/nike/jd_763081_b.webp'},
     {name:'Dunk', price:2000, src:''},
      {name:'Dunk', price:2000, src:''},
       {name:'Dunk', price:2000, src:''},
        {name:'Dunk', price:2000, src:''},
         {name:'Dunk', price:2000, src:''},
          {name:'Dunk', price:2000, src:''},
           {name:'Dunk', price:2000, src:''},

];


const Adidas = [
    {name:'Campus', price:1800, src:'images/campus1.webp'},
    {name:'Sambas', price:1900, src:'types of shoes/Adidas/jdpt_product_list (1).webp'},
    {name:'Spezial', price:1900, src:'types of shoes/Adidas/jdpt_product_list (2).webp'},
    {name:'forum', price:1900, src:'types of shoes/Adidas/Forum_Low_CL_Shoes_White_JI3269_01_00_standard.jpg'},
    {name:'Ultraboost', price:1900, src:'types of shoes/Adidas/HQ6351_1_FOOTWEAR_Photography_Side-Lateral-Center-View_white.jpg'},
    {name:'Ozweego', price:1950, src:'types of shoes/Adidas/ef6298-cbcbng_1.jpg'},
    {name:'Gazelle', price:1900, src:'types of shoes/Adidas/BB5478_01_standard.jpg'},
    {name:'Superstar', price:1900, src:'types of shoes/Adidas/jdpt_product_list (12).webp'},
    {name:'NMD', price:1900, src:'types of shoes/Adidas/seo-nmd-sizeguide-bodyimage2_185-545022(0).jpg'},
    {name:'Stan Smith', price:1900, src:'types of shoes/Adidas/M20324_01_standard(0).jpg'},
];

const Puma = [
{name:'Suede classic', price:1700, src:'images/pumas.webp'},
{name:'Speedcat og', price:1700, src:'types of shoes/puma/398846-02_sivasdescalzo-Puma-SPEEDCAT_OG-1718022190-1.jpg'},
{name:'Palermo', price:1700, src:'types of shoes/puma/Palermo-Leather-Sneakers-Unisex(1).jpeg'},
{name:'Basket classic', price:1700, src:'types of shoes/puma/png(0).jpeg'},
{name:'Majesty', price:1700, src:'types of shoes/puma/Majesty-Sneakers-Unisex(1).jpeg'},
{name:'H-street', price:1700, src:'types of shoes/puma/403692-04-1.jpg'},
{name:'Easy rider', price:1700, src:'types of shoes/puma/1261858-full_product.jpg'},
{name:'Clyde', price:1700, src:'types of shoes/puma/s-l1200.jpg'},
{name:'RS-X', price:1700, src:'types of shoes/puma/puma-rs-x-heritage(0).jpg'},
{name:'Deviate nitro', price:1700, src:'types of shoes/puma/1987999.jpg'},
{name:'Nuevos', price:1700, src:'types of shoes/puma/1027835-0102V1.jpg'},
{name:'Suede XL', price:1700, src:'types of shoes/puma/39520533_03.jpg'},
]


const Diversos = [
{name:'crocs', price:1000, src:'types of shoes/Crocs/jdpt_product_list.webp'},
{name:'crocs', price:1000, src:'types of shoes/Crocs/jd_019760_b.webp'},
{name:'crocs', price:1000, src:'types of shoes/Crocs/jdpt_product_list (1).webp'},
{name:'crocs', price:1000, src:'types of shoes/Crocs/jdpt_product_list (2).webp'},
{name:'crocs', price:1000, src:'types of shoes/Crocs/jdpt_product_list (3).webp'},
{name:'crocs', price:1000, src:'types of shoes/Crocs/jdpt_product_list (4).webp'},
{name:'crocs', price:1000, src:'types of shoes/Crocs/jdpt_product_list (6).webp'},
{name:'crocs', price:1000, src:'types of shoes/Crocs/jdpt_product_list (47).webp'},
{name:'crocs', price:1000, src:'types of shoes/Crocs/jdpt_product_list.webp'},
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

 //Botão Diversos
document.querySelector('.Diversos').addEventListener('click', () => {
    let newLI5 = "";
      Diversos.forEach((item, index) => {
         newLI5 += `<div class="card" data-id="${item.name}-${item.price}-${index}">
             <img src="${item.src}" alt="" class="image">
             <h4 class="title">${item.name}</h4>
             <p class="price">${item.price}MT</p>
             <button class="add">Add to cart</button>
             </div>`;     
            });

     painelProdutos.innerHTML = newLI5;
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

document.querySelector('.Diversos').addEventListener('click', () => { 
    renderProducts(produtos); });


const shoes = [
{name:'Suede', price:1700, src:'images/pumas.webp'},
{name:'Suede', price:1700, src:'types of shoes/puma/Suede.avif'},
 {name:'Suede', price:1700, src:'types of shoes/puma/suede2.jpg'},
 {name:'Suede', price:1700, src:'others/puma/4061a40770731c300d35a6cecb2649c4.jpg'},
 {name:'Suede', price:1700, src:'others/puma/Suede-Classic-XXI-Trainers.jpeg'},

 {name:'Clyde', price:1700, src:'types of shoes/puma/s-l1200.jpg'},
 {name:'Clyde', price:1700, src:'others/puma/Clyde-OG-Sneakers (1).jpeg'},
 {name:'Clyde', price:1700, src:'others/puma/Clyde-OG-Sneakers.jpeg'},
 {name:'Clyde', price:1700, src:'others/puma/Clyde-Soph-Sneakers.jpeg'},
  {name:'Clyde', price:1700, src:' others/puma/390091-02_sivasdescalzo-Puma-Clyde_Base-1679658095-1.jpg'},

 {name:'Rs-X', price:1700, src:'types of shoes/puma/puma-rs-x-heritage.jpg'},
 {name:'Rs-X', price:1700, src:'types of shoes/puma/puma-rs-x-heritage(0).jpg'},
  {name:'Rs-X', price:1700, src:'others/puma/RS-X-Black-and-White-Sneakers.jpeg'},
   {name:'Rs-X', price:1700, src:'others/puma/RS-X-Alternate-Route-Sneakers.jpeg'},
    {name:'Rs-X', price:1700, src:'others/puma/RS-X-Reinvention-Trainers.jpeg'},

    {name:'Deviate nitro', price:1700, src:'types of shoes/puma/1987999.jpg'},
    {name:'Deviate nitro', price:1700, src:'others/puma/Deviate-NITRO™-3-Running-Shoes-Men (1).jpeg'},
    {name:'Deviate nitro', price:1700, src:'others/puma/Deviate-NITRO™-3-Running-Shoes-Men.jpeg'},
    {name:'Deviate nitro', price:1700, src:'others/puma/Deviate-NITRO™-3-Running-Shoes-Women.jpeg'},
    {name:'Deviate nitro', price:1700, src:'others/puma/puma__pum-309707-05__sideview06_2048x.jpg'},

 {name:'Easy rider', price:1700, src:'types of shoes/puma/1261858-full_product.jpg'},
  {name:'Easy rider', price:1700, src:'others/puma/87397-1.jpg'},
   {name:'Easy rider', price:1700, src:'others/puma/399028-10_sivasdescalzo-Puma-EASY_RIDER_VINTAGE-1719314835-1.jpg'},
    {name:'Easy rider', price:1700, src:'others/puma/Easy-Rider-Vintage-Sneakers.jpeg'},
     {name:'Easy rider', price:1700, src:'others/puma/s-l1200.jpg'},

{name:'H-street', price:1700, src:'types of shoes/puma/403692-04-1.jpg'},
{name:'H-street', price:1700, src:'others/puma/403692-02_sivasdescalzo-Puma-H-STREET_OG-1750235725-1.webp'},
{name:'H-street', price:1700, src:'others/puma/H-Street-OG-Unisex-Sneakers.jpeg'},
{name:'H-street', price:1700, src:'others/puma/sz_758770_a.jpeg'},
{name:'H-street', price:1700, src:'others/puma/hpxTrYtAYTYfBD7ZJBGQ-403775-02-Puma-H-Street-Puma-Black-Yellow-Sizzle-os-1.jpg'},

 {name:'Nuevos', price:1700, src:'types of shoes/puma/nuevos.jpeg'},
 {name:'Nuevos', price:1700, src:'types of shoes/puma/nuevos1.avif'},
 {name:'Nuevos', price:1700, src:'types of shoes/puma/nuevos2.webp'},
 {name:'Nuevos', price:1700, src:' others/puma/1027835-0102V1.jpg'},
 {name:'Nuevos', price:1700, src:' others/puma/images (5).jpeg'},
 {name:'Nuevos', price:1700, src:'others/puma/images (4).jpeg'},
  {name:'Nuevos', price:1700, src:' others/puma/p-37095709-1-ce84e144-a5f4-45e8-8e43-8b0c420dd555.jpg'},

{name:'Majesty', price:1700, src:'others/puma/Majesty-Sneakers-Unisex (1).jpeg'},
{name:'Majesty', price:1700, src:'others/puma/Majesty-Sneakers-Unisex.jpeg'},

  {name:'Basket Classic', price:1700, src:'others/puma/Basket-Classic-XXI-Sneakers.jpeg'},
  {name:'Basket Classic', price:1700, src:'others/puma/Basket-Classic-XXI-Trainers.jpeg'},
  {name:'Basket Classic', price:1700, src:'others/puma/Heritage-Basket-Classic-Sneakers.jpeg'},
  {name:'Basket Classic', price:1700, src:'others/puma/PUMA-Smash-Retro-Sneakers.jpeg'},

  {name:'Palermo', price:1700, src:'others/puma/Palermo-Leather-Sneakers.jpeg'},
  {name:'Palermo', price:1700, src:'others/puma/359-396464M14.jpg'},
   {name:'Palermo', price:1700, src:'others/puma/383011-13_sivasdescalzo-Puma-PALERMO_OG-1731938464-1.webp'},
    {name:'Palermo', price:1700, src:'others/puma/png (1).jpeg'},
     {name:'Palermo', price:1700, src:'others/puma/png.jpeg'},
 
 {name:'Speedcat', price:1700, src:'others/puma/398846-06_sivasdescalzo-Puma-SPEEDCAT_OG-1732704477-1.webp'},
 {name:'Speedcat', price:1700, src:'others/puma/Suede-Classic-XXI-Trainers.jpeg'},
 {name:'Speedcat', price:1700, src:'others/puma/Speedcat-Leather-Sneakers-Unisex.jpeg'},
 {name:'Speedcat', price:1700, src:'others/puma/Speedcat-OG-Sneakers.jpeg'},

   {name:'Campus', price:1800, src:'images/campus1.webp'},
   {name:'Campus', price:1800, src:'types of shoes/Adidas/jd_619586_b.webp'},
    {name:'Campus', price:1800, src:'types of shoes/Adidas/jd_691345_c.webp'},
     {name:'Campus', price:1800, src:'types of shoes/Adidas/jdpt_product_list (5).webp'},
      {name:'Campus', price:1800, src:'types of shoes/Adidas/jdpt_product_list (8).webp'},
      {name:'Campus', price:1800, src:'types of shoes/Adidas/jdpt_product_list (23).webp'},
    
   {name:'Samba', price:1900, src:'types of shoes/Adidas/jdpt_product_list (1).webp'},
   {name:'Samba', price:1900, src:'others/adidas/Samba_OG_Shoes_White_ID0478_01_standard.jpg'},
   {name:'Samba', price:1900, src:'others/adidas/Samba_OG_Shoes_White_IG1963_01_standard.jpg'},
   {name:'Samba', price:1900, src:'others/adidas/Samba_XLG_Shoes_White_IE1377_01_standard.jpg'},
    
   {name:'Spezial', price:1900, src:'types of shoes/Adidas/jdpt_product_list (2).webp'},
   {name:'Spezial', price:1900, src:'others/adidas/20250512033110423.jpg'},
   {name:'Spezial', price:1900, src:'others/adidas/Handball_Spezial_Shoes_Brown_IF6490_01_00_standard.jpg'},
   {name:'Spezial', price:1900, src:'others/adidas/IE3698_01_standard.jpg'},
   {name:'Spezial', price:1900, src:'others/adidas/sapatilhas-adidas-originals-womens-handball-spezial-if6562.jpg'},
    
   {name:'forum', price:1900, src:'types of shoes/Adidas/Forum_Low_CL_Shoes_White_JI3269_01_00_standard.jpg'},
    {name:'forum', price:1900, src:'others/adidas/5c70162e795067916cd165883df1d1f9cde04b80_original.jpeg'},
     {name:'forum', price:1900, src:'others/adidas/D_NQ_NP_634442-MLA54978866422_042023-O.webp'},
      {name:'forum', price:1900, src:'others/adidas/FB9-7702-014_zoom1.jpg'},
      {name:'forum', price:1900, src:'others/adidas/IG377-7-100-1-AW-800x1000.jpg'},
   
    
   {name:'Ultraboost', price:1900, src:'types of shoes/Adidas/HQ6351_1_FOOTWEAR_Photography_Side-Lateral-Center-View_white.jpg'},
   {name:'Ultraboost', price:1900, src:'others/adidas/HQ4199_sivasdescalzo-adidas-ULTRABOOST_1.0-1683886798-1.jpg'},
   {name:'Ultraboost', price:1900, src:'others/adidas/adidas-ultraboost-5-running-shoes.jpg'},
   {name:'Ultraboost', price:1900, src:'others/adidas/2ec0b0fc9ded40a5aac3794a1df4a216.jpg'},
   {name:'Ultraboost', price:1900, src:'others/adidas/IH3110_left.webp'},
    
   {name:'Ozweego', price:1950, src:'types of shoes/Adidas/ef6298-cbcbng_1.jpg'},
   {name:'Ozweego', price:1950, src:'others/adidas/EE6999_01_00_standard.jpg'},
   {name:'Ozweego', price:1950, src:'others/adidas/EE6462_01_standard.jpg'},
   {name:'Ozweego', price:1950, src:'others/adidas/ID0672_01_standard.jpg'},
    
   {name:'Gazelle', price:1900, src:'types of shoes/Adidas/BB5478_01_standard.jpg'},
    {name:'Gazelle', price:1900, src:'others/adidas/Gazelle_Shoes_Black_CQ2809_01_standard.jpg'},
     {name:'Gazelle', price:1900, src:'others/adidas/Gazelle_Shoes_White_JS3892_db01_00_standard.tiff.jpg'},
      {name:'Gazelle', price:1900, src:'others/adidas/BB5478_01_standard.jpg'},
      {name:'Gazelle', price:1900, src:' others/adidas/BB5497_01_standard.jpg'},
   
   {name:'Superstar', price:1900, src:'types of shoes/Adidas/jdpt_product_list (12).webp'},
    {name:'Superstar', price:1900, src:'others/adidas/EG4958_01_00_standard.jpg'},
     {name:'Superstar', price:1900, src:'others/adidas/JI0079_04_standard.jpg'},
   {name:'Superstar', price:1900, src:'others/adidas/Superstar_II_Shoes_Beige_JR4234_01_00_standard.jpg'},
   {name:'Superstar', price:1900, src:'others/adidas/Superstar_II_Shoes_White_JQ3208_01_00_standard.jpg'},
   {name:'Superstar', price:1900, src:'others/adidas/Superstar_Shoes_Black_IH3121_01_standard.jpg'},
    
   {name:'NMD', price:1900, src:'types of shoes/Adidas/seo-nmd-sizeguide-bodyimage2_185-545022(0).jpg'},
    {name:'NMD', price:1900, src:'others/adidas/7b5ffb52b7374efa921d1b05556093c8.jpg'},
    {name:'NMD', price:1900, src:'others/adidas/260945142ba5f427dec.jpg'},
    {name:'NMD', price:1900, src:'others/adidas/c5c566f4-d902-4d0b-9cc9-79ed317e4e7e.jpg'}, 
    {name:'NMD', price:1900, src:'others/adidas/NMD_R1_Shoes_Black_GZ9258_01_standard.jpg'},

   {name:'Stan Smith', price:1900, src:'types of shoes/Adidas/M20324_01_standard(0).jpg'},
   {name:'Stan Smith', price:1900, src:'others/adidas/Stan_Smith_Shoes_Black_M20327_01_standard.jpg'},
   {name:'Stan Smith', price:1900, src:'others/adidas/Stan_Smith_Shoes_Kids_Black_IG7689_01_standard (1).jpg'},
   {name:'Stan Smith', price:1900, src:'others/adidas/Stan_Smith_Shoes_Kids_Black_IG7689_01_standard.jpg'},
  {name:'Stan Smith', price:1900, src:'others/adidas/Stan_Smith_Shoes_White_FX5501_db01_standard.jpg'},

 {name:'Retro 4', price:2000, src:'images/retro4.webp'},
    {name:'Retro 4', price:2000, src:'types of shoes/nike/jd_764400_b.webp'},
    {name:'Retro 4', price:2000, src:'types of shoes/nike/jd_752690_b.webp'},
    {name:'Retro 4', price:2000, src:'types of shoes/nike/jd_752664_b.webp'},
    {name:'Retro 4', price:2000, src:'types of shoes/nike/jd_727934_b.webp'},
     {name:'Retro 4', price:2000, src:'types of shoes/nike/jd_763147_b.webp'},
     {name:'Retro 4', price:2000, src:'types of shoes/nike/jdpt_product_list.webp'},

      {name:'Air jordan', price:2300, src:'types of shoes/nike/jd_763545_b.webp'},
       {name:'Air jordan', price:2300, src:'types of shoes/nike/jd_763546_b.webp'},
        {name:'Air jordan', price:2300, src:'types of shoes/nike/jd_773072_b.webp'},
       {name:'Air jordan', price:2300, src:'types of shoes/nike/jd_773071_b.webp'},
         {name:'Air jordan', price:2300, src:'types of shoes/nike/jd_763142_b.webp'},
         {name:'Air jordan 1', price:2300, src:'types of shoes/nike/jd_391425_b.webp'},
    {name:'Air jordan 1', price:2300, src:'types of shoes/nike/jd_457067_b.webp'},
     {name:'Air jordan 1', price:2300, src:'types of shoes/nike/jd_772995_b.webp'},
   {name:'Air jordan 1', price:2300, src:'types of shoes/nike/jd_765172_b.webp'},
      {name:'Air jordan 1', price:2300, src:'types of shoes/nike/jd_752280_b.webp'},
     {name:'Air jordan 1', price:2300, src:'types of shoes/nike/jdpt_product_list (7).webp'},
    {name:'Air jordan 1', price:2300, src:'types of shoes/nike/jd_752660_b.webp'},

       {name:'Air max', price:2000, src:'others/NIKE/61enWtztGtL._UY900_.jpg'},
        {name:'Air max', price:2000, src:'others/NIKE/AIR MAX 90.png'},
         {name:'Air max', price:2000, src:'others/NIKE/NIKE AIR MAX 1.png'},
          {name:'Air max', price:2000, src:'others/NIKE/Nike-Air-Max-1-Deep-Royal-Blue_1.jpg'},
           {name:'Air max', price:2000, src:'types of shoes/nike/s-l1200.png'},

        {name:'React', price:2000, src:'types of shoes/nike/13678807_21606602_600.jpg'},
        {name:'React', price:2000, src:'others/NIKE/Nike React Vision Industrial Blue.001.jpeg'},
        {name:'React', price:2000, src:'others/NIKE/NIKE_REACT_VISION_GS_7406954f-5216-4290-914a-a968843a2d1e.jpg'},
        {name:'React', price:2000, src:'others/NIKE/HJ8997_001_9Y_PREM.jpeg'},
    
     { name:'Dunk', price:1800, src:'types of shoes/nike/NIKE DUNK LOW RETRO.png'},
     { name:'Dunk', price:1800, src:'others/NIKE/NIKE DUNK LOW RETRO SE.png'},
     { name:'Dunk', price:1800, src:'others/NIKE/NIKE DUNK LOW RETRO SE(0).png'},
     { name:'Dunk', price:1800, src:'others/NIKE/DD139-1-103-1.jpg'},
     { name:'Dunk', price:1800, src:'others/NIKE/ef662e36acc144b1b09dd5a442dfac26.jpg'},
     

{name:'Air force', price:1900, src:'types of shoes/nike/jdpt_product_list (5).webp'},
{name:'Air force', price:1900, src:'types of shoes/nike/jdpt_product_list (6).webp'},
{name:'Air force', price:1900, src:'types of shoes/nike/jdpt_product_list (8).webp'},
{name:'Air force', price:1900, src:'types of shoes/nike/jdpt_product_list (9).webp'},
{name:'Air force', price:1900, src:'types of shoes/nike/jdpt_product_list (10).webp'},
{name:'Air force', price:1900, src:'types of shoes/nike/jdpt_product_list (11).webp'},
{name:'Air force', price:1900, src:'types of shoes/nike/jdpt_product_list (12).webp'},
{name:'Air force', price:1900, src:'types of shoes/nike/jdpt_product_list (14).webp'}
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
