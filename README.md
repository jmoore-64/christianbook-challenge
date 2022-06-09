# christianbook-challenge


# OVERVIEW
I used React.js for the front-end and Express.js + Node.js for the back-end.

Notable files:
- App.js - main front-end file
- CustomForm.js - front-end
- ProductPane.js - front-end
- index.js - back-end
- build.sh* - downloads all dependencies for the system
- run.sh* - starts the server as well as client

The front-end runs on port 3000, and the back-end listens for requests on port 3001. The front-end sends and receives API requests through port 3001. 

\* I made sure to make both scripts executable on Linux as well as convert Windows-style (my OS) line endings to Linux-style to ensure cross-platform compatibility. I did some testing on Linux and I believe it should work fine on both OS

# PERFORMANCE
- My system reads through the product listing file one-by-one to find a matching ID, which is O(n) complexity. I have since realized that I could have pre-processed the JSON by sorting in order of IDs, which should be O(log n). However, for number of products < 100 my system should perform very well
- With some research I found that Express.js servers can generally handle ~15k requests per second. Furthermore, Node.js servers can generally handle several thousand concurrent users. Since my system implements very basic versions of these frameworks, I believe these numbers are decent ballpark estimates for performance.

# REFERENCES
I used countless online resources (this is my first time using React, Express, or Node so I had to learn a lot), but these are the most frequent:
- https://reactjs.org/
- https://reactjs.org/docs/forms.html
- https://nodejs.org/en/docs/
- https://nodejs.org/api/http.html#http_class_http_serverresponse
- https://expressjs.com/en/guide/routing.html
- https://expressjs.com/en/5x/api.html
- https://stackoverflow.com/
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/




# REFLECTION

I've spent roughly 12 - 15 hours on this project. Most of this was spent learning these frameworks and figuring them out, as well as learning how to connect the front and back-end.

If I had more time, my #1 priority would be to implement the file name into the run.sh script arguments, which I realized that I forgot to implement. Currently, the run.sh script takes no parameters and the server code reads directly from the /server/products.json file. Next, I would implement more robust error checking on both ends. I know that all network facing code should be written defensively, which is something I didn't enforce. Lastly, I would spend some serious time improving the looks of the front-end, for obvious reasons. I wanted to implement some React-Bootstrap components to have a sleek design. 

Critiques:
- Missing parameter for run.sh script
- Lack of error checking + handling
- Bad front-end design
- Lack of pre-processing JSON
