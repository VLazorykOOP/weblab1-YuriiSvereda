window.onbeforeprint = function() {
    // Ваш код для дій перед друком
    console.log('Підготовка до друку...');
  };
  

  window.onload = function() {
    alert("СТОРІНКУ ЗАВАНТАЖЕНО >:)");
   // displayWindowSize();
  };

  
  var inputField = document.getElementById('focusInput');

    // Додаємо обробник події onfocus до поля вводу
    inputField.onfocus = function() {
      // Змінюємо колір рамки текстового поля на червоний
      inputField.style.border = '10px solid red';
      console.log("Елемент отримав фокус!!!!!!!!!!!!!!!");
    };

    // Можливо, ви також захочете повернути колір назад, коли фокус з поля забирається:
    inputField.onblur = function() {
      // Повертаємо колір рамки текстового поля на заводський
      inputField.style.border = '';
      alert("Елемент втратив фокус!!!!!!!!!!!!!!!");

    };


    // Функція, яка виводить розмір вікна
function displayWindowSize() {
    var windowSizeElement = document.getElementById('windowSize');
    windowSizeElement.textContent = window.innerWidth + ' x ' + window.innerHeight;
  }
  
  // Зв'язування події onresize з функцією displayWindowSize
  window.onresize = function() {
    displayWindowSize();
  };
  
  // Виклик функції для відображення розміру вікна при завантаженні сторінки
//   window.onload = function() {
//     displayWindowSize();
//   };
  

function handleEvent(eventType, element) {
  alert(`Подія ${eventType} сталася на елементі з класом "${element.className}"`);
  element.style.backgroundColor = "lightgreen";
}

function runTask() {
  // Отримання властивостей поточної сторінки
  const pageInfo = {
    'URL': window.location.href,
    'Title': document.title,
    'Width': window.innerWidth,
    'Height': window.innerHeight,
    'Browser Agent': navigator.userAgent,
    // Додайте інші властивості, якщо потрібно
  };

  // Отримання текстового поля
  const outputField = document.getElementById('output');

  // Виведення властивостей в текстове поле
  outputField.value = JSON.stringify(pageInfo);
  alert(JSON.stringify('URL:' + window.location.href + '    Title: ' + document.title + '    Width: ' + window.innerWidth + '    Height: ' + window.innerHeight + '    Browser Agent: ' + navigator.userAgent));

  // Виведення в консоль
  console.log(pageInfo);
}




function searchInfo() {
  const inputText = document.getElementById('inputText').value;

  // 1. Кількість слів
  const wordsCount = inputText.match(/\b\w+\b/g).length;


  // 2. Слова, які починаються з 'ш' і закінчуються на 'а'
  const specialWords = inputText.match(/\bш\w*а\b/g);

  // 3. Кількість цифр
  const digitsCount = inputText.match(/\d/g).length;

  // 4. Кількість цілих чисел
  const integersCount = inputText.match(/(?:^|\s)(-?\d+)(?=$|\s)/g).length;

  // Виведення результатів
  alert(`Кількість слів: ${wordsCount}\nСлова, які починаються з 'ш' і закінчуються на 'а': ${specialWords ? specialWords.join(', ') : 'Немає співпадінь'}\nКількість цифр: ${digitsCount}\nКількість цілих чисел: ${integersCount}`);

  // alert(`Кількість слів: ${wordsCount}`);
      
  //     if (specialWords) {
  //       alert(`Слова, які починаються з 'ш' і закінчуються на 'а': ${specialWords.join(', ')}`);
  //     } else {
  //       alert('Слів, які починаються з \'ш\' і закінчуються на \'а\', не знайдено');
  //     }
      
  //     alert(`Кількість цифр: ${digitsCount}\nКількість цілих чисел: ${integersCount}`);
}

