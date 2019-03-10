import Link from 'next/link'
import jsonp from 'jsonp'
const type = (props) => {
    console.log(props)
    // const {data} = props
    // const {subjects} = data
    return (
        <div className="movieType">
            电影列表页
            {/* {subjects.map(item => {
                return (<Link href="/movie/detail" key={item}>
                <div className="movieBox">
                        <img src={item.images.medium} alt={item.title}/>
                    <p></p>
                </div>
            </Link>)
            })} */}
            
        </div>
    )
}

type.getInitialProps = async (context) => {

    jsonp('https://api.douban.com/v2/movie/in_theaters', null, function(req, res) {
        console.log(req,res)
    })
    
    return {
        // data
    }
}

export default type