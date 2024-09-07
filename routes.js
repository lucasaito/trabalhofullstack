const express = require('express');
const pessoaController = require('./controllers/PessoaController');
const router = express.Router();

router.post('/pessoas', pessoaController.createPessoa);
router.get('/pessoas', pessoaController.getAllPessoas);
router.get('/pessoas', pessoaController.getPessoaById);
router.put('/pessoas', pessoaController.updatePessoa);
router.delete('/pessoas', pessoaController.deletePessoa);

module.exports = router;