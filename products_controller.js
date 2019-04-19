module.exports = {
  create(req, res) {
    let {name, description, price, image_url} = req.body
    const db = req.app.get('db')
    db.create_product([name, description, price, image_url]).then(response => {
      res.status(200).send(response)
    }).catch(err => {
      console.log('We have a problem', err)
    })
  },
  getOne(req, res) {
    const db = req.app.get('db')
    db.read_product([req.params.id]).then(response => {
      res.status(200).send(response)
    }).catch(err => {
      console.log('We have a problem', err)
    })
  },
  getAll(req, res) {
    const db = req.app.get('db')
    db.read_products().then(response => {
      res.status(200).send(response)
    }).catch(err => {
      console.log('We have a problem', err)
    })
  },
  update(req, res) {
    console.log('working')
    const db = req.app.get('db')
    db.update_product([req.params.id, req.query.desc]).then(response => {
      console.log(req.params.id)
      res.status(200).send(response)
    }).catch(err => {
      console.log('We have a problem', err)
    })
  },
  delete(req, res) {
    const db = req.app.get('db')
    db.delete_product([req.params.id]).then(response => {
      res.status(200).send(response)
    }).catch(err => {
      console.log('We have a problem', err)
    })
  }
}