import { useEffect, useState } from "react";
import { getArticles } from "../../services/serviceArticle";

function Articles() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        async function loadArticles() {

            try {
                const data = await getArticles();
                setArticles(data.docs);
            } catch(error) {
                console.error(error.message);
            }
        }

        loadArticles();
    }, []);

    return (
        <div className="container">
            <h2 className="my-4">
                Nos articles
            </h2>
            <div className="row">
                {
                    articles.map(article => (
                        <div 
                            className="col-md-4 mb-4"
                            key={article.id}
                        >
                            <div className="card h-100">
                                <img
                                    src={`http://localhost:3000${article.image.url}`}
                                    className="card-img-top"
                                    alt={article.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {article.title}
                                    </h5>
                                    <p className="card-text">
                                        {article.excerpt}
                                    </p>
                                    <small>
                                        Par {article.author}
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Articles;