fetch('http://localhost:3001/meals')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

const Meals = () => {
    return (
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
    )
}

export default Meals