function displayQuote() {
  showLoadingSpinner();
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quote = data.content;
      const author = data.author;
      document.getElementById('quote').textContent = quote;
      document.getElementById('author').textContent = author;
      hideLoadingSpinner();
    })
    .catch(error => {
      console.error('Error:', error);
      hideLoadingSpinner();
    });
}

function showLoadingSpinner() {
  const loadingSpinner = document.querySelector('.loading-spinner');
  loadingSpinner.style.display = 'block';
}

function hideLoadingSpinner() {
  const loadingSpinner = document.querySelector('.loading-spinner');
  loadingSpinner.style.display = 'none';
}
