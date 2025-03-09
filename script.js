// Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can add code here to handle the form data (e.g., send it to a server)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  alert('Thank you for contacting us! We will get back to you soon.');
});