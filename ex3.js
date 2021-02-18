//Задание 3
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    
    return new Promise((resolve, reject) => {
        const delay = randomIntegerFromInterval(200, 500);
        setTimeout(() => {
            let iD = transaction.id;
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
                resolve([iD, delay]);
            } else {
                reject(iD);
            }
        }, delay);
    });
};


const logSuccess = (arrayResolve) => {
  console.log(`Transaction ${arrayResolve[0]} processed in ${arrayResolve[1]}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 // Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
    .catch(logError);
