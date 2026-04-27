import React from "react";
import { baseUrl } from "../../App"

const Article = props => {
    return (
        <div className="article article-text">
            <span>
                This is a simple Pokedex Web Application developed using Vite and React.
                Data is received from the <a href={baseUrl}>PokeAPI</a>.
            </span>
        </div>
    )
}

export default Article