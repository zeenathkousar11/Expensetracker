import React from 'react';

const Income = () => {
   const numbers = [1, -23, 3, 5, -6, 7, -8, 9, -8, 9, 4, 2, -55, 521, -24, -445, -515, 1515, 212];

  const positivenumbers = numbers.filter((num) => num > 0);
  const negativenumbers = numbers.filter((num) => num < 0);

  console.log(positivenumbers);
  console.log(negativenumbers);

  const positiveSum = positivenumbers.reduce((acc, ele) => acc + ele, 0);
  const negativeSum = negativenumbers.reduce((acc, ele) => acc + ele, 0);

  console.log(positiveSum);
  console.log(negativeSum);

  return (
    <div className="p-4">
      <div className="flex border-black border-2 p-4 justify-between">
        <div className="text-center">
          <h1>Income</h1>
          <p>{positiveSum}</p>
        </div>
        <div className="border-l-2 border-black mx-4"></div>
        <div className="text-center">
          <h1>Expense</h1>
          <p className="text-red-500">{negativeSum}</p>
        </div>
      </div>
    </div>
  );
};

export default Income;
