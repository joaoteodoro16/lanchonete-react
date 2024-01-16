import ApiService from '../core/helpers/api-service'
import MethodApi from '../core/constants/request-constant'

class ProdutoService {

    apiservice = new ApiService("http://localhost:8080")
    
    getProducts(){
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImpvYW8iLCJleHAiOjE3MDUzNzU5Nzd9.Xj29ycSme6gZRsELZXTE6QUDtx1MNTTApABDQ9zbK3c"
        try{
            const produtos = this.apiservice.makeRequest('produtos',MethodApi.GET,token);
            return produtos 
        }catch(e){
            console.log(e)
            return []
        }
    }
}

export default ProdutoService;

