var express = require('express');
var router = express.Router();

/* GET informações do dia dos namorados. */
router.get('/', function(req, res, next) {

  // Versão final da tarefa:
  // const data = new Date("2025-06-12");

  // Gerar data a 5 segundos de "distância" da hora atual:
  const data = new Date();
  const atual = data.getTime(); // Number.
  data.setTime(atual + 5*1000);

  // "Output" (corpo da resposta):
  res.send({
    "nomeEvento": 'Dia dos Namorados',
    "data": data,
  });

  // Referência para Tarefa 03:
  // console.log(data.getDate()); // Dia do mês (Number).
  // console.log(data.getMonth() + 1); // O mês (Number).
  // console.log(data.getFullYear());  // O ano (Number).
  // console.log(data.getHours());
  // console.log(data.getMinutes());
  // console.log(data.getSeconds());
  // console.log(data.getMilliseconds());

});

module.exports = router;
