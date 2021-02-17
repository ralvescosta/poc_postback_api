class PostbackController {

  constructor(service){
    this.postbackService = service
  }

  async Post(req,res){
    const {body} = req

    if(!body.guid || typeof body.guid !== 'string') {
      return res.status(400).json({message: 'wrong body format'})
    }
    if(!body.dtPagamento || typeof body.dtPagamento !== 'string' ){
      return res.status(400).json({message: 'wrong body format'})
    }

    try {
      await this.postbackService.Postback(body);
    }catch(err){
      return res.status(500).json({message: 'ERROOOUUUUU!!!'})
    }
    
    return res.status(200).json({message: 'É isso ai!'})
  }
}

module.exports = PostbackController