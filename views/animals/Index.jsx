const React = require('react');

function Index(props) {
  return (
    <div>
      <h1>Animal List</h1>
      <a href="/animals/new">Add a new Animal</a>
      <ul>
        {props.animals.map((animal) => (
          <li key={animal._id}>
            <a href={`/animals/${animal._id}`}>{animal.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
  

module.exports = Index