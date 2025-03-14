# GraphQL + React Event Booking API
This code belongs to a tutorial series: [https://github.com/academind/yt-graphql-react-event-booking-api.git](https://github.com/academind/yt-graphql-react-event-booking-api.git)

Learn how to build a GraphQL API (with Node.js) and a React.js frontend from scratch in this series.

# Usage
Choose the right branch in this repository to get the code for the different parts of the series.

Install all dependencies
```sh
npm install
```

Run the server
```sh
npm start
```
Database Setup
Before running the server, you need to create the necessary database tables (job and application). You can do this by running the following commands:

Create Job Table
sh
Copy
Edit
psql -U <your-username> -d <your-database> -c "CREATE TABLE job (ID SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, description TEXT NOT NULL, company VARCHAR(255) NOT NULL, location VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
Create Application Table
sh
Copy
Edit
psql -U <your-username> -d <your-database> -c "CREATE TABLE application (ID SERIAL PRIMARY KEY, job_id INT NOT NULL, applicant_name VARCHAR(255) NOT NULL, applicant_email VARCHAR(255) NOT NULL, cover_letter TEXT NOT NULL, submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (job_id) REFERENCES job(id) ON DELETE CASCADE);"
Replace <your-username> and <your-database> with your actual PostgreSQL username and database name.

After creating the tables, you can start the server and interact with the API as usual.

pgsql
Copy
Edit

This will add the necessary SQL table creation commands to the `README.md` so that users can easily set
