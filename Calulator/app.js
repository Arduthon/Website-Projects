var result;
    function appendToResult(val) {
      document.getElementById("result").value += val;
    }

    function clearResult() {
      document.getElementById("result").value = "";
    }

    function backspace() {
      var currentResult = document.getElementById("result").value;
      document.getElementById("result").value = currentResult.slice(0, -1);
    }

    function calculate() {
      var expression = document.getElementById("result").value;
      var result = eval(expression);
      document.getElementById("result").value = result;
    }
    function root() {
      var expression = document.getElementById("result").value;
      var result = (Math.pow(parseInt(expression), 0.5)).toFixed(3);
      document.getElementById("result").value = result;
    }
    function sqr() {
      var expression = document.getElementById("result").value;
      var result = Math.pow(Number(expression), 2);
      document.getElementById("result").value = result;
    }