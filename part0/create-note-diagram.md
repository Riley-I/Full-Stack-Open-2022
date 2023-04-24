### NEW NOTE

- user creates a new note on the page by writing something into the text field and clicking the submit button

1. HTML form button clicked (with new input)
2. HTTP POST request | action="/new_note" method="POST" (browser sends user input to the server at address /new_note)
3. The server responds to browser with HTTP status code 302. This is a URL redirect, with which the server asks the browser to do a new HTTP GET request to the address defined in the header's Location - the address notes.
   The reload causes three more HTTP requests - the style sheet (main.css) - the JavaScript code (main.js - not js CRUD operation on server) - the raw data of the notes (data.json)
   - network -> headers tab also shows the data submitted with the form
4. data sent to server as body of POST request
5. javascript CRUD (POST) operation runs on server on /new_note
6. The server runs javascript to create a new note object and adds it to an array called notes. The erver can access the data by accessing the req.body field of the request object
7. Server runs js code that returns the response (res) object to the HTTP client (browser) which will then "follow" the redirect and send an HTTP request to the new URL
8. The reload causes three more HTTP requests
   - the style sheet (main.css)
   - the JavaScript code (main.js - not js CRUD operation on server)
   - the raw data of the notes (data.json)
     - this will now contain the new note data and will be displayed on the browser once the js code from main.js runs to parse the JSON data and create a html element using the DOM API (which will be styled with css code from main.css)

sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTTP status code 302 (URL redirect)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: the html file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server-->>browser: the JavaScript file
deactivate server

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"asd","date":"2023-04-23T12:41:02.601Z"}, ... ]
    deactivate server

Note right of browser: The browser executes the callback function that renders the notes
