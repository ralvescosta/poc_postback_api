const {writeFile} = require('fs/promises')
const {resolve} = require('path')

class WriteJsonRepository {
  async Write(data) {
    const filename = `${data.guid}-${Date.now()}.json`
    
    await writeFile(resolve(__dirname, "..", "..", filename), JSON.stringify(data))
  }
}

module.exports = WriteJsonRepository