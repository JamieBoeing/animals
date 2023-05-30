const React = require('react')

function Show (props {
    return(
        <div>
            <h1>{props.animal.name}</h1>
            <a href="/animals">Go back to Index Page</a>
                <p>
                    {props.animal.name} is {props.animal.color} and
                    {props.animal.name} is a {props.animal.type}
                </p>
        </div>

    )
})