import './list.css';

const List = (props) => {
    return (
        props.data.map((item) => (
            <ul>
                <li key={item.id}>{item.title}</li>
            </ul>
        ))
    )
}

export default List;