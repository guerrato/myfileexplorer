const express = require('express');
const router = express.Router();
const fileService = require('../services/fileService')

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/listdirs', async (req, res, next) => {
  const { path } = req.query

  const dirs = await fileService.listDirs(path)
  res.send(dirs)
})

router.get('/readimg', async (req, res, next) => {
  const { path } = req.query

  const data = await fileService.readFile(path)
  res.send(data)
})

module.exports = router;
