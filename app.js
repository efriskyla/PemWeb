let products = [];

const container = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const loading = document.getElementById("loading");
const productCount = document.getElementById("product-count");

function renderProducts(dataToRender) {
  const htmlContent = dataToRender.map(
    ({ title, price, category, thumbnail }) => {
      return `
        <div class="card">
          <img src="${thumbnail}" alt="${title}">
          <h3>${title}</h3>
          <p>Kategori: ${category}</p>
          <p>Harga: Rp ${price}</p>
        </div>
      `;
    }
  ).join("");

  container.innerHTML = htmlContent;

  // Statistik jumlah produk yang sedang ditampilkan
  const totalProducts = dataToRender.reduce((total) => total + 1, 0);
  productCount.innerHTML = `Total Produk: ${totalProducts}`;
}

async function fetchProducts() {
  try {
    // Loading state
    container.innerHTML = "<p>Sedang memuat data...</p>";

    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    products = data.products;

    // Sembunyikan loading
    loading.innerHTML = "";

    // Tampilkan produk
    renderProducts(products);

  } catch (error) {
    container.innerHTML = "<p>Gagal mengambil data.</p>";
    console.error(error);
  }
}

// Search real-time
searchInput.addEventListener("input", function (event) {
  const keyword = event.target.value.toLowerCase();

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(keyword)
  );

  renderProducts(filtered);
});

// Jalankan saat halaman pertama kali dibuka
fetchProducts();