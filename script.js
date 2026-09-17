function copyCode(id, button) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    const old = button.innerText;
    button.innerText = '✓ Copied';
    setTimeout(() => button.innerText = old, 1400);
  }).catch(() => alert('Copy failed. Please copy the command manually.'));
}

console.log('🐼 Panda Forensics loaded.');