# URL Checker

A simple TypeScript project that classifies URLs as files, folders, or not found using asynchronous mock logic. Includes unit tests for core modules like `mockServer` and `validators`.

---

## Getting Started

### Prerequisites

- Node.js (version 14+ recommended)
- npm (comes with Node.js)

---

### Installation

1. Clone the repository or download the source code.

2. Navigate into the cloned project directory:

```
cd url-checker
```

3. Install dependencies:

```
npm install
```

4. Compile TypeScript:

```
npx tsc
```

---

### Running the App

Serve the project over a local HTTP server because ES modules require HTTP:

```
npm install -g live-server
live-server
```

This will open the app in your default browser, typically at `http://127.0.0.1:8080/`.

---

### Sample URLs to Try in the App

When the app is running, you can test URLs like these to see how they are classified:

#### Valid URLs

- `http://example.com/folder/`  
  _(Detected as folder because it ends with `/`)_

- `http://example.com/file.txt`  
  _(Detected as file due to known extension `.txt`)_

- `http://example.com/readme`  
  _(Detected as file by default, no trailing slash or extension)_

#### Invalid / Not Found URLs

- `http://example.com/notfound`  
  _(Simulated as not found due to keyword detection)_

- `http://example.com/error404`  
  _(Simulated as not found due to keyword detection)_

- `invalid-url`  
  _(Invalid URL format, simulated as not found)_

---

## Running Test Cases

To run the test cases that cover `mockServer` and `validators` modules:

1. Ensure dependencies are installed:

```
npm install
```

2. Run tests with:

```
npm test
```

or

```
npx jest
```

Tests run using Jest’s default Node environment.

---

## Project Structure

```
src/
  ├── mockServer.ts      # Mock URL classification logic
  ├── validators.ts      # Validation utilities
  ├── constants.ts       # Constants like debounce delay
  ├── dom.ts             # DOM helpers (not currently tested)
  └── test/              # Jest test files
index.html

dist/                    # Compiled JS output (gitignored)
node_modules/            # npm dependencies (gitignored)
```

---
