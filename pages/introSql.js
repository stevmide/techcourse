import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContentPage = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      {/* Code Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">What is SQL</h2>
        <p className="mb-4">SQL is the standard language for dealing with Relational Databases.</p>
        <p className="mb-4">SQL is used to insert, search, update, and delete database records.</p>
        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">How to Use SQL</h2>
        <p className="mb-4">The following SQL statement selects all the records in the "Customers" table:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers;
              `}
            </code>
          </pre>
        </div>
      </section>

      {/* Text Paragraphs Section */}
      <section className="mb-8">
      <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">Keep in Mind That</h2>
        <p className="mb-4">SQL keywords are NOT case sensitive: select is the same as SELECT.</p>
        <p className="mb-4">Another paragraph of text goes here.In this tutorial we will write all SQL keywords in upper-case.</p>
      </section>

      {/* List Section */}
      <section>
      <hr className='mb-4'></hr>
      <h2 className="text-xl font-bold mb-4">Semicolon after SQL Statements?</h2>
        <p className="mb-4">Some database systems require a semicolon at the end of each SQL statement.

        Semicolon is the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.

        In this tutorial, we will use semicolon at the end of each SQL statement.</p>
        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">Some of The Most Important SQL Commands</h2>
        <ul className="list-disc pl-4">
          <li className="mb-2">SELECT - extracts data from a database</li>
          <li className="mb-2">UPDATE - updates data in a database</li>
          <li className="mb-2">DELETE - deletes data from a database</li>
          <li className="mb-2">INSERT INTO - inserts new data into a database</li>
          <li className="mb-2">CREATE DATABASE - creates a new database</li>
          <li className="mb-2">ALTER DATABASE - modifies a database</li>
          <li className="mb-2">CREATE TABLE - creates a new table</li>
          <li className="mb-2">ALTER TABLE - modifies a table</li>
          <li className="mb-2">DROP TABLE - deletes a table</li>
          <li className="mb-2">CREATE INDEX - creates an index (search key)</li>
          <li className="mb-2">DROP INDEX - deletes an index</li>
        </ul>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ContentPage;
