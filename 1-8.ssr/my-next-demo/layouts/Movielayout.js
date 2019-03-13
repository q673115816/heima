import Movienav from '../components/Movienav'
import Moviehead from '../components/Moviehead'
const Movielayout = (props) => {

    return (

        <div className="movielayout">   
            <Moviehead></Moviehead>
            <Movienav></Movienav>
            {
                props.children
            }
        </div>
    )
}

export default Movielayout