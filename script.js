document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').textContent = "Merci pour ton message ! Je te répondrai bientôt.";
    this.reset();
  });
  