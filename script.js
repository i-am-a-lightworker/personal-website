const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = form.checkValidity();
    if (!isValid) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    console.log('Form submitted:', values);
    alert('Thank you — your message was received.');
  });
});

const fadeItems = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeItems.forEach((item) => observer.observe(item));
} else {
  fadeItems.forEach((item) => item.classList.add('is-visible'));
}
