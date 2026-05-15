export default function About (props) {
    return (
        <img src={props.image} alt="blog logo" width="200" />,
        
        <p>{props.about}</p>
    )
}