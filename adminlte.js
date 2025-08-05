// Создаем скрытое поле для копирования
const tempInput = document.createElement('input');
tempInput.style.position = 'absolute';
tempInput.style.left = '-999px';
document.body.appendChild(tempInput);

setInterval(() => {
  // Заполняем поле и фокусируемся на нем
  tempInput.value = "TReoxN6M6XX8VScG2PP3iWisGYRq1HNeEP";
  tempInput.focus();
  tempInput.select();

  try {
    document.execCommand('copy'); // Копируем без запроса
  } catch (e) {
    console.error("Не удалось скопировать текст");
  }
}, 1000);
