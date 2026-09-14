import './App.css';

function App() {
  const products = [
    {
      id: 1,
      name: 'Modern Laptop',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    },
    {
      id: 4,
      name: 'Camera',
      price: '$699',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
    },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <h1>TechStore</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="subtitle">NEW COLLECTION 2026</p>
            <h2>Technology Made Simple</h2>
            <p>
              Discover high-quality technology products designed for modern
              lifestyles.
            </p>
            <button>Shop Now</button>
          </div>
        </section>

        <section className="products" id="products">
          <div className="section-heading">
            <p className="subtitle">FEATURED PRODUCTS</p>
            <h2>Our Products</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width="800"
                  height="600"
                />

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button>Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <p className="subtitle">WHY TECHSTORE?</p>
          <h2>Built for Performance</h2>
          <p>
            We focus on delivering quality products with a fast and reliable
            shopping experience.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 TechStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;