export default function Article (props) {
    return(
        <article>
            <h3>{props.title}</h3>
            <h5>{props.date}</h5>
            <p>{props.preview}</p>
        </article>
    )
}