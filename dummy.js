
  // Example data
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

  const container = document.getElementById('container');

  function renderItems(startIndex, endIndex) {
    container.innerHTML = '';
    for (let i = startIndex; i <= endIndex; i++) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.textContent = items[i];
      container.appendChild(item);
    }
  }

  function calculateVisibleItems() {
    const { scrollTop, offsetHeight } = container;
    const startIndex = Math.floor(scrollTop / 50); // Assuming each item is 50px in height
    const endIndex = Math.min(startIndex + Math.ceil(offsetHeight / 50), items.length - 1);
    return { startIndex, endIndex };
  }

  function handleScroll() {
    const { startIndex, endIndex } = calculateVisibleItems();
    renderItems(startIndex, endIndex);
  }

  container.addEventListener('scroll', handleScroll);

  // Initial render
  handleScroll();

