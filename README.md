First of all the application is created for the purpose of creating event with name and date.
After user created the event it will be demonstrated in all events section and also users can edit
or delete the event when users need to make changes. In order to make this dynamic web application I
opened different folders and codes like javascript, ejs files. As an example app.js which is used for
handle incoming HTTP requests, render views using EJS, serve static assets, and manage errors.
Key Functions: Import Necessary Modules: path: Handles file path operations.
express: Creates the web server framework.
cors: Enables cross-origin requests.
PORT: Specifies the server's listening port (imported from config).
ErrorHandlerMiddleware: Middleware for handling errors (custom).
route: Contains defined routes (likely from a separate file).
Create Express App:
const app = express();
Configure Views:
Sets EJS as the view engine: app.set("view engine", "ejs");
Specifies the path to views: app.set("views", path.join(process.cwd(), "source", "views"));
Serve Static Assets:
Serves files from the "public" directory under "/assets": app.use("/assets", express.static(path.join(process.cwd(), "source", "public")));
Middleware:
Parses different request body types: app.use(express.urlencoded({ extended: true }));, app.use(express.json());
Enables CORS: app.use(cors());
Applies routes (likely defined in route.js): app.use(route);
Handles 404 Not Found errors: app.use("/\*", ...);
Manages errors: app.use(ErrorHandlerMiddleware);
Start Server:
Then also used event.ejs for the html of the web application additionally style.css in order to give
some styles and buttons. Here you can see the main.js file which shows that this code provides a client-side solution for editing and deleting events displayed on a web page. It allows users to directly modify event details and triggers server-side updates (PUT request) or deletion (DELETE request) when the save or delete button is clicked. In order to store and accept the information that user wrote event.json was used. The aim of error-handler.js is this middleware acts as a safety net for Express application. It intercepts any errors that occur during request processing and ensures a proper response is sent to the client. It differentiates between custom errors (providing specific messages) and unexpected errors (providing a generic message). This helps improve the user experience by providing more meaningful feedback in case of errors. For validation I opened folder called
"controller" and inside it index.js file this code provides a basic event management system using an Express application. It allows users to: View a list of existing events (using the GET route).
Create new events (using the CREATE route).
Update existing events (using the UPDATE route).
Delete events (using the DELETE route).
It utilizes a simple JSON file for data storage and leverages redirects to potentially update the UI after each operation. Focusing on reader and writer.js these codes help to provides a reusable function for reading JSON data from files in a structured way. It constructs the file path considering the project's base directory and uses synchronous file reading for potentially simpler usage (but be aware of potential performance implications for large files). The parsed JSON data is returned for further use in your application and for writing data to JSON files in a structured and consistent way. It handles file path construction and JSON stringification for convenience. It uses synchronous file writing for potentially simpler usage, but be mindful of potential performance implications for large files or frequent calls.

https://github.com/00017159/WT_CW2
