import MethodApi from '../constants/request-constant'

class ApiService {

    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async makeRequest(endpoint, method = MethodApi.GET,token = '',data = null) {
        const url = `${this.apiUrl}/${endpoint}`

        const options = {
            method,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(url, options);
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message || 'Erro na requisição da API');
            }

            return responseData;
        }catch(error){
            console.log('Erro na requisição da API', error.message);
            throw error;
        }
    }
}

export default ApiService;