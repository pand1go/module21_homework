function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  let number;
  function usePromise() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
          number = getRandomInt(1, 100);
          if (number % 2 === 0) {
              resolve(number);
          } else {
              reject(number);
          }		
      }, 3000);
    });
    myPromise
      .then((result) => {
        console.log(`Завершено успешно. Сгенерированное число — ${result}`);
      })
      .catch((error) => {
        console.log(`Завершено с ошибкой. Сгенерированное число — ${error}`);
      })
  }
  usePromise();
  