
URL Existence Checker (TypeScript)

A simple URL checker web app written in TypeScript with async URL existence validation and debounced calls.

---

## How to Run This Project

1. Clone the repository

   ```
   git clone https://github.com/aaryaa123/url-checker.git
   cd url-checker
   ```

2. Install TypeScript globally (if needed)

   ```
   npm install -g typescript
   ```

3. Compile TypeScript to JavaScript

   ```
   tsc
   ```

   This compiles `.ts` files from `src/` into `.js` files in `dist/`.

4. Serve the project with a local server

   Install `live-server` globally if not installed:

   ```
   npm install -g live-server
   ```

   Then start the server from the project root:

   ```
   live-server
   ```

5. Open the application

   After starting the server, open this URL in your browser:

   ```
   http://127.0.0.1:8080/index.html
   ```

   You should see the URL input box.

6. Use the app

   - Type a URL in the input box.
   - Invalid URLs will show "Invalid URL format" immediately.
   - Valid URLs will be checked asynchronously with results shown live.
