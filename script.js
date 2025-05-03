// Button click
document.getElementById('magicBtn').addEventListener('click', () => {
    alert("Button was clicked!");
    document.getElementById('magicBtn').style.backgroundColor = "skyblue";
  });
  
  // Hover effect
  document.getElementById('hoverBox').addEventListener('mouseover', () => {
    document.getElementById('hoverBox').style.color = "green";
  });
  
  // Keypress
  document.getElementById('keyInput').addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Double-click
  document.getElementById('doubleClickSecret').addEventListener('dblclick', () => {
    alert("You found the secret action! 🎉");
  });
  
  // Form validation
  document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
  
    alert('Form submitted successfully! ✅');
  });
  