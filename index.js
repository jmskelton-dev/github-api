/*https://api.github.com/users/jskelton36/repos */



function displayRepo () {

}

function getRepos (username) {
    const queryURL = `https://api.github.com/users/${username}/repos`
    
    fetch(queryURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayRepo(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function initialize () {
    $('form').on('submit', function(event) {
        event.preventDefault();
        const userInput = $('#js-username').val();
        const username = encodeURIComponent(userInput);
        getRepos(username);
    })
    /* watch for submit
    if clicked, prevent default
    get user value
    steralize user input
    pass user value to search query function
    
    generate stringy thingy thingy
    fetch
    if completed promise but full of lies, error
    else if awesome, run thingy
    catch failed promise
    clear results
    generate results
    append results
    */
}

$(initialize);