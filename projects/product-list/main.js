const myApp = document.getElementById('app');
const productsContainer = document.createElement('div');
let products = [];

const createProductHtml = ({ price, name, image }) => {
  const productContainer = document.createElement('div');
  productContainer.classList.add('product');

  const productPriceHTML = document.createElement('p');
  const productImageHTML = document.createElement('p');
  const productNameHTML = document.createElement('p');

  productImageHTML.classList.add('product__image');

  productPriceHTML.innerText = `$${price}`;
  productNameHTML.innerText = name.toUpperCase();
  productImageHTML.innerText = image;

  productContainer.append(productImageHTML, productPriceHTML, productNameHTML);
  return productContainer;
};

const productsHTML = (products = []) => {
  products.forEach(product => {
    const productHtml = createProductHtml(product);
    productsContainer.append(productHtml);
  });
};

const getServerData = async url => {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  } else {
    throw Error(response.status);
  }
};

const init = async () => {
  try {
    products = await getServerData(
      'https://anamariasosam.github.io/productsAPI/products.json'
    );
    productsContainer.classList.add('productsContainer');
    myApp.append(productsContainer);
    productsHTML(products);
  } catch (e) {
    const error = document.createElement('p');
    error.innerText = `${e} - No fue posible obtener los productos`;
    document.querySelector('.filterAndSearch').style.display = 'none';
    myApp.append(error);
  }
};

const filterAndSort = {
  menorAMayor() {
    return [...products].sort((a, b) => a.price - b.price);
  },
  mayorAMenor() {
    return [...products].sort((a, b) => b.price - a.price);
  },
  limpiar() {
    return products;
  },
  porColor() {
    const select = document.getElementById('color');
    const { value: color } = select.options[select.selectedIndex];

    if (color === 'all') {
      return this.limpiar();
    } else {
      const filterByColor = products.filter(product => product.color === color);
      return filterByColor;
    }
  },
};

const filterOrSort = type => {
  productsContainer.innerHTML = '';
  const filteredProducts = filterAndSort[type]();
  productsHTML(filteredProducts);
};

init();
