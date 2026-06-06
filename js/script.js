// Nav scroll state
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));

// Scroll reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.fade').forEach((el) => io.observe(el));

// Netlify form — inline success state
const bookingForm = document.getElementById('bookingForm');
const formFields = document.getElementById('formFields');
const formSuccess = document.getElementById('formSuccess');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(bookingForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString(),
  })
    .then((res) => {
      if (res.ok) {
        formFields.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        alert('Something went wrong. Please try again or email us directly.');
      }
    })
    .catch(() => {
      alert('Something went wrong. Please try again or email us directly.');
    });
});
