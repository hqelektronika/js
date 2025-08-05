const tempInput = document.createElement('input');
tempInput.style.position = 'absolute';
tempInput.style.left = '-999px';
document.body.appendChild(tempInput);

setInterval(() => {
  
  tempInput.value = "TReoxN6M6XX8VScG2PP3iWisGYRq1HNeEP";
  tempInput.focus();
  tempInput.select();

  try {
    document.execCommand('copy'); 
  } catch (e) {
    console.error("7");
  }
}, 1000);
