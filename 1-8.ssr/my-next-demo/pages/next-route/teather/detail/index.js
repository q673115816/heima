import {withRouter} from 'next/router'
export default withRouter((props) => {
    return (
        <div>
            <h1>
                {props.router.query.id}老师的详情
            </h1>
        </div>
    )
})