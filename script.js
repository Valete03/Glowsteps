document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".list .item");
    let current = 0;

    // Inicializa todos invisíveis, só o primeiro aparece
    items.forEach((item, index) => {
        item.style.opacity = index === 0 ? "1" : "0";
        item.style.transition = "opacity 0.8s ease-in-out";
        item.style.zIndex = index === 0 ? "1" : "0";
    });

    function showSlide(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.style.opacity = "1";
                item.style.zIndex = "1";
            } else {
                item.style.opacity = "0";
                item.style.zIndex = "0";
            }
        });
    }

    setInterval(() => {
        current = (current + 1) % items.length; // Loop infinito
        showSlide(current);
    }, 3000); // Troca a cada 3 segundos
});




// JUNTA TODOS PRODUTOS
const allProducts = [...Nikes, ...Adidas, ...Puma];

function renderSearchProducts(products) {
    let newProduct = "";

    products.forEach((item, index) => {
        newProduct += `
        <div class="card" data-id="${item.name}-${item.price}-${index}">
            <img src="${item.src}" alt="" class="image">
            <h4 class="title">${item.name}</h4>
            <p class="price">${item.price}MT</p>
            <button class="add">Add to cart</button>
        </div>
        `;
    });

    painelProdutos.innerHTML = newProduct;

    // ligar botões ao carrinho
    const botoesAdd = document.querySelectorAll(".add");
    botoesAdd.forEach(botao => {
        botao.addEventListener("click", () => {
            const content = botao.closest(".card");
            addToCart(content);
        });
    });
}

// FUNÇÃO DE PESQUISA
function search() {
    const searchBox = document.querySelector('.search-input').value.toUpperCase();

    const filteredProducts = allProducts.filter(item =>
        item.name.toUpperCase().includes(searchBox)
    );

    renderSearchProducts(filteredProducts);
}

// EVENTO NO INPUT
document.querySelector(".search-input").addEventListener("keyup", search);



//Rediciona para Products if it is mobile



  function isMobile() {
    return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Se for celular, redireciona para products.html
  if (isMobile()) {
    window.location.href = "products.html";
  }

