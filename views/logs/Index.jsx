const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>Logs Index Page</h1>
            <a href="/logs/new">Create a new Log Here</a>
            <ul>
                {
                    props.logs.map((log) => {
                        return (
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.title}</a> is a {log.entry} and {log.shipIsBroken ? ' is broken' : 'is not broken'}
                                <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                    <input type='submit' value='delete this'></input>
                                </form>
                                // <a href ={`/logs/${log._id}/edit`}><button>Edit This</button></a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
            }

module.exports = Index