import Mynav from '../components/Mynav'

export default (props) => {
    return (
        <div>
            <Mynav></Mynav>
            {
                props.children
            }
        </div>
    )
}