import path from 'path'
import multer from 'multer'

/**
 * Manipulador de upload, é utilizado como arquivo de configurações para o 
 * multer empacotar os uplods de imagem
 */
class Upload {
    /**
     * Variável de configuração do armazenamento
     */
    public storage : multer.StorageEngine
    /**
     * Instancia a propriedade [[storage]] e define onde serão armazenados os dados do upload
     */
    public constructor() {
        this.storage = multer.diskStorage({
            destination: path.resolve(__dirname,'..', '..', 'uploads'),
            filename: (req, file, cb) => {
                const ext = path.extname(file.originalname)
                const name = path.basename(file.originalname, ext)                

                cb(null, `${name}-${Date.now()}${ext}`)
            }
        })
    }
}

export default new Upload()