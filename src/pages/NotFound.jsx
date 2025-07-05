import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <section className="not-found">
            <p>Sorry, the page you were<br/> looking for was not found.</p>
            <Link to=".." relative="path">Return to Home</Link>
        </section>
    )
}