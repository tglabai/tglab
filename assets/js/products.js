document.addEventListener("DOMContentLoaded", () => {
    fetch('assets/data/products.json')
      .then(response => response.json())
      .then(products => {
        const container = document.getElementById('all-products');
        if (!container) return;
  
        products.forEach(product => {
          const card = document.createElement('div');
          card.className = 'product';
  
          const image = document.createElement('img');
          image.src = product.image || 'assets/images/no-image.jpg';
          image.alt = product.name;
  
          const name = document.createElement('p');
          name.textContent = product.name;
  
          const link = document.createElement('a');
          link.href = product.link || '#';
          link.target = '_blank';
          link.className = 'btn btn-primary';
          link.textContent = 'Buy Now';
  
          card.appendChild(image);
          card.appendChild(name);
          card.appendChild(link);
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error("Error loading products:", error);
      });
  });
  
  $scope.products.forEach(product => {
    const safeName = product.name.toLowerCase()
      .replace(/[^a-z0-9]/gi, '-')  // Replace non-alphanumeric with dashes
      .replace(/-+/g, '-')          // Replace multiple dashes with one
      .replace(/^-|-$/g, '');       // Trim dashes at start/end
    product.image = "assets/images/" + safeName + ".jpg";
  });
  