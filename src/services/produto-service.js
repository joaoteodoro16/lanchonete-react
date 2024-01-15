import Produto from '../models/produto-model'



class ProdutoService {
    getAll() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImpvYW8iLCJleHAiOjE3MDUyOTMxMDd9.h602wjIS8wdgX6TSDc7yvZGSkjTokVkhQEKmsakhhww";

        return fetch("http://localhost:8080/produtos", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                return response.json();
            })
            .then((produtos) => {
                return produtos.map((produto) => {
                    return new Produto(
                        produto.id,
                        produto.name,
                        produto.price,
                        produto.description,
                        produto.sector,
                        produto.stock,
                        produto.created_at,
                        produto.img_path
                    );
                });
            });
    }
}

export default ProdutoService;

