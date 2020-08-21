const printNumber =  function(req, res) {
    try {
        let result =  numberToString(req.body.number);
      return res
        .status(200)
        .send(result);
    } catch (err) {
      return res
        .status(500)
        .send(err.message);
    }
  }


  function numberToString (n) {
      let temp = [];
      for (let i = 1; i<=n; i++){
              temp.push(i);
        }
      return JSON.stringify(temp.join(','))
  }
  module.exports = {
    printNumber
  };