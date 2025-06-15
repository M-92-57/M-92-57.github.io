// ✅ Validation du formulaire de contact
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  // Sécurité : vérifier que les éléments existent
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const prenom = document.getElementById('prenom')?.value.trim();
      const nom = document.getElementById('nom')?.value.trim();
      const sujet = document.getElementById('sujet')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (!prenom || !nom || !sujet || !message) {
        alert("Merci de remplir tous les champs !");
        return;
      }

      alert(`Merci ${prenom}, votre message a bien été envoyé !`);
      form.reset();
    });
  }

  // ✅ Toggle menu responsive
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
});
