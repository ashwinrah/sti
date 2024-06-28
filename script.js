const fileInput = document.getElementById('file');

fileInput.addEventListener('change', (e) => {
  const file = fileInput.files[0];
  if (!file.type.match('image/jpeg')) {
    alert('Only JPG files are allowed');
    fileInput.value = '';
  }
});