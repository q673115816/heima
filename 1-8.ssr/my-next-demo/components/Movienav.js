import Link from 'next/link'
function Movienav() {
  return (
    <div className="movieNav">
        < Link
        href = {
            {
                pathname: '/movie/type',
                query: {
                    type: 'in_theaters'
                }
            }
        } >
            <a  className="movie-link">正在热映</a>
        </Link>
        < Link href = "/movie/type?type=top250">
            <a  className="movie-link">TOP250</a>
        </Link>
        <style jsx>{
            `
            .movieNav {
                display: flex;
            }
            .movie-link {
                color: #fff;
                flex: 1;
                height: 50px;
                line-height: 50px;
                background-color: #ace;
                text-align: center;
                text-decoration: none;
            }

            .movie-link:hover {
                background-color: #f00;
            }
            `
        }</style>
    </div>
  )
}

export default Movienav
