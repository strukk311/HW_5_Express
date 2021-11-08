A simple server for “authors with posts list” application API using Node.js Express.js as a web framework

API provide the ability to perform the following actions:

Add author - to add new author (should not be possible to add author with the same id)
remove author - to remove author item
get authors - to get all existing authors
rename author - change author name
get posts by author - get all a that specific author has
get one post by author - get specific post by specific author
Author object example:

id: '12345',
name: 'John Doe',
posts: [
		{id: '1', text: 'Hello world'},
	        {id: '2', text: 'Post number 2'}
       ]
}
🛠️ Installation Steps
Clone the repository
Install dependencies:
npm install
Run the app:
npm start
Test app with Postman

Run unit tests:
npm test