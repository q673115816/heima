import Link from 'next/link'


const teath = [
    {name: 'rose', id: 1},
    {name: 'rose2', id: 2},
    {name: 'rose3', id: 3},
]


export default () => {
    return (
        <div>
            <h1>teather</h1>
            <ul>
                {teath.map(item => {
                    return (
                        <li key={item.id}>
                            < Link as = {
                                {
                                    pathname: `/next-route/teather/${item.id}`
                                }
                            }
                            href = {
                                {
                                    pathname: '/next-route/teather/detail',
                                    query: {
                                        id: item.id
                                    }
                                }
                            } >
                            <a>
                            {item.name}
                            </a>
                            </Link>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}