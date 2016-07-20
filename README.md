# Mocking And False Positives

## Presentation

To run the presentation just open `/presentation/index.html` locally  
To open the notes, just open `/presentation/notes.txt` in a separate screen

## Running the examples

To run the presentation examples, enter the directory `/app/` using the latest version of node and execute the following command:

    $ npm install

To run a specific test, navigate to the `/test/token` directory and write a `describe.only(` to the first describe.

After that, run `npm test`.

To tweek the code, go to `/src/token` directory and change the contents of the `store-token*` files to force the test to either fail or succees as desired.
