import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <div>
            <h4>Sorry</h4>
            <p>page not found</p>
            <Link to="/">Back to homepage....</Link>
        </div>
    )
}