import Link from 'next/link'
import Router from 'next/router'

export default () => {
    return (
        <div>
<Link href="/next-route/car">
            <a style={{color: 'red'}}>1car</a></Link>
            < Link href={{pathname: '/student', query: {id: 1}}}>
            <a>student</a></Link>
            {/* <span onClick={() => Router.push('/next-route/teather')}>teather</span> */}
            <span onClick={() => Router.push({pathname: '/next-route/teather'})}>teather</span>
        </div>
    )
}