document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  const expressionDisplay = document.getElementById('expression');
  const resultDisplay = document.getElementById('result');
  const buttons = document.querySelectorAll('.btn');
  let currentExpression = '';
  let lastResult = '';

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const value = this.dataset.value;

      if (value === undefined) {
        switch (this.id) {
          case 'clear':
            currentExpression = '';
            resultDisplay.innerText = '0';
            expressionDisplay.innerText = '';
            break;
          case 'del':
            currentExpression = currentExpression.slice(0, -1);
            resultDisplay.innerText = currentExpression || '0';
            break;
          case 'equals':
            try {
              currentExpression = currentExpression.replace('√', 'Math.sqrt');
              currentExpression = currentExpression.replace('%', '/100');
              lastResult = eval(currentExpression).toString();
              resultDisplay.innerText = lastResult;
            } catch (error) {
              resultDisplay.innerText = 'Error';
            }
            break;
          case 'ans':
            currentExpression += lastResult;
            resultDisplay.innerText = currentExpression;
            break;
        }
      } else {
        currentExpression += value;
        resultDisplay.innerText = currentExpression;
      }
      expressionDisplay.innerText = currentExpression;
    });
  });
});
