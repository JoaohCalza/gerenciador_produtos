import { useEffect, useState } from "react";
import axios from "axios";
import { Image, Spinner, Button } from "react-bootstrap";

const TelaImagem = () => {
    const [loading, setLoading] = useState(true);
    const [imgUrl, setImgUrl] = useState<string>("");
    const [error, setError] = useState<string>("");

    const fetchImagem = () => {
        setLoading(true);
        setError("");
        axios.get("https://picsum.photos/id/237/400/600")
            .then((response) => {
                const url = response.config.url;
                if (typeof url === 'string') {
                    setImgUrl(url);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError("Erro ao carregar a imagem.");
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchImagem();
    }, []);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : error ? (
                <div>{error}</div>
            ) : (
                <>
                    <Image src={imgUrl} alt="Carregar Imagem" />
                    <Button 
                        onClick={fetchImagem} 
                        style={{ backgroundColor: '#45a049', borderColor: '#28a745' }}
                    >
                        Carregar Imagem
                    </Button>
                </>
            )}
        </>
    );
};

export default TelaImagem;
