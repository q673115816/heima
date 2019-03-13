import Link from 'next/link'
import jsonp from 'isomorphic-unfetch'
const type = (props) => {
    const {
        movieList
    } = props
        return (
            <div className="movie-list">
                {
                    movieList.map(item => {
                    return (<Link href="/movie/detail" key={item.id}>
                        <div className="movie-box">
                            <a>
                                <img src={item.img} alt={item.title}/>
                                <p>电影： {item.title}</p>
                                <p>类型： {item.genres.join(',')}</p>
                                <p>评分： {item.rating}</p>
                            </a>
                        </div>
                    </Link>)
                    })
                }
            </div>
        )
}

type.getInitialProps = async (context) => {
    const {query} = context
    var data = await jsonp(`http://localhost:3001/${query.type}`)
    var movieList = await data.json()
    
    return {
        movieList
    }
}

export default type