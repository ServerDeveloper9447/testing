require('express')().get('/',async (req, res) => {
  if (!req.query.u) {
    res.send({error:"no"})
  } else {
    try {
      console.log(req.headers['user-agent'])
    require('node-fetch')(`https://www.instagram.com/${req.query.u}/feed/?__a=1&__d=dis`)
    .then(f => f.text())
    .then(e => {
      console.log(e)
      res.send(e)
    })
  } catch(err) {
    res.send(err)
    console.log(err)
  }
  }
}).listen(8000)