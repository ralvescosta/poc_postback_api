class PostbackService {
  constructor(writeJsonRepository){
    this.writeJsonRepository = writeJsonRepository
  }

  async Postback(data) {
    await this.writeJsonRepository.Write(data)
  }
}

module.exports = PostbackService