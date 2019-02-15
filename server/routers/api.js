const { Router } = require('express');

const keys = require('../../keys.json');
const { writeFileSync } = require('fs');
const router = Router();

router.post('/cmds', (req, res) => {
  if (keys.includes(req.headers.authorization)) {
    console.log(req.body.commands);
    writeFileSync(`${__dirname}/../build/static/commands.json`, JSON.stringify(req.body.commands, '', '  '));
    commands = req.body.commands;
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(401).json({ error: 'Get away you sick filth.' });
  }
});

router.get('/admin/data/', (req, res) => {
  if (req.session.user && req.session.user.id === '172571295077105664') {
    res.status(200).json({
      test: '6969'
    });
  } else {
    res.status(401).json({ message: 'No admin for you, tsk tsk tsk' });
  }
});

module.exports = router;
