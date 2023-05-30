const React = require('react')

function New(props) {
    return(
        <div>
            <h1>New Animal Page</h1>
            <a href="/animals">Go Back to Index Page</a>
            <form action="/animals" method="POST">
                Name: <input type="text" name="name"/><br/>
                Color: <input type="text" name="color"/><br/>
                Type of Animal: <input type="text" name="type"/><br/>
                <input type="submit" value="create Animal"/>
            </form>
        </div>
    )
}

module.exports = new