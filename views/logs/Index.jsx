const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>Logs Index Page</h1>
            <a href="/logs/new">Creat a new Log Here</a>
            <ul>
                {
                    props.logs.mp((log) => {
                        return (
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index