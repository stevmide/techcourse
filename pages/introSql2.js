import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContentPage2 = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      {/* Code Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">The MySQL CREATE TABLE Statement</h2>
        <p className="mb-4">The CREATE TABLE statement is used to create a new table in a database..</p>
        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
              `}
            </code>
          </pre>
        </div>
      </section>

      {/* Text Paragraphs Section */}
      <section className="mb-8">
      <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4"></h2>
        <p className="mb-4">The column parameters specify the names of the columns of the table. The datatype parameter specifies the type of data the column can hold (e.g. varchar, integer, date, etc.).</p>
        <h2 className="text-xl font-bold mb-4">Data Types</h2>
        <p className="mb-4"></p>

        <div class="container mx-auto py-8">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">Data type</th>
        <th class="border border-gray-300 px-4 py-2">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">CHAR(size)</td>
        <td class="border border-gray-300 px-4 py-2">A FIXED length string (can contain letters, numbers, and special characters). The size parameter specifies the column length in characters - can be from 0 to 255. Default is 1</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">VARCHAR(size)</td>
        <td class="border border-gray-300 px-4 py-2">A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum column length in characters - can be from 0 to 65535</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">BINARY(size)</td>
        <td class="border border-gray-300 px-4 py-2">Equal to CHAR(), but stores binary byte strings. The size parameter specifies the column length in bytes. Default is 1</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">VARBINARY(size)</td>
        <td class="border border-gray-300 px-4 py-2">Equal to VARCHAR(), but stores binary byte strings. The size parameter specifies the maximum column length in bytes.</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">TINYBLOB</td>
        <td class="border border-gray-300 px-4 py-2">For BLOBs (Binary Large OBjects). Max length: 255 bytes</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">TINYTEXT</td>
        <td class="border border-gray-300 px-4 py-2">Holds a string with a maximum length of 255 characters</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">TEXT(size)</td>
        <td class="border border-gray-300 px-4 py-2">Holds a string with a maximum length of 65,535 bytes</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">BLOB(size)</td>
        <td class="border border-gray-300 px-4 py-2">For BLOBs (Binary Large OBjects). Holds up to 65,535 bytes of data</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">MEDIUMTEXT</td>
        <td class="border border-gray-300 px-4 py-2">Holds a string with a maximum length of 16,777,215 characters</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">MEDIUMBLOB</td>
        <td class="border border-gray-300 px-4 py-2">For BLOBs (Binary Large OBjects). Holds up to 16,777,215 bytes of data</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">LONGTEXT</td>
        <td class="border border-gray-300 px-4 py-2">Holds a string with a maximum length of 4,294,967,295 characters</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">LONGBLOB</td>
        <td class="border border-gray-300 px-4 py-2">For BLOBs (Binary Large OBjects). Holds up to 4,294,967,295 bytes of data</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">ENUM(val1, val2, val3, ...)</td>
        <td class="border border-gray-300 px-4 py-2">A string object that can have only one value, chosen from a list of possible values. You can list up to 65535 values in an ENUM list. If a value is inserted that is not in the list, a blank value will be inserted. The values are sorted in the order you enter them</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">SET(val1, val2, val3, ...)</td>
        <td class="border border-gray-300 px-4 py-2">A string object that can have 0 or more values, chosen from a list of possible values. You can list up to 64 values in a SET list</td>
      </tr>
    </tbody>
  </table>
</div>

      </section>

      {/* List Section */}
      <section>
      
      <h2 className="text-xl font-bold mb-4">MySQL CREATE TABLE Example</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
              `}
            </code>
          </pre>
        </div>
        <p className="mb-4">The following example creates a table called "Persons" that contains five columns: PersonID, LastName, FirstName, Address, and City:</p>
        <hr className='mb-4'></hr>
        <p className="mb-4">The PersonID column is of type int and will hold an integer.

            The LastName, FirstName, Address, and City columns are of type varchar and will hold characters, and the maximum length for these fields is 255 characters.

            The empty "Persons" table will now look like this:</p>
        <p>Tip: The empty "Persons" table can now be filled with data with the SQL INSERT INTO statement.</p>    
       
      </section>
      <hr></hr>
      <h2 className="text-xl font-bold mb-4 mt-4">The MySQL INSERT INTO Statement</h2>
      <p className="mb-4">The INSERT INTO statement is used to insert new records in a table.</p>
      <h2  className="text-xl font-bold mb-4">INSERT INTO Syntax</h2>
      <p className= "mb-4">It is possible to write the INSERT INTO statement in two ways:</p>
      <p className="mb-4">1. Specify both the column names and the values to be inserted:</p>
      <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
              `}
            </code>
          </pre>
        </div>
        <p className="mb-4">INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
              `}
            </code>
          </pre>
        </div>
        <hr></hr>
        <h2 className="text-xl font-bold mb-4 mt-4">Demo Database</h2>
        <p className="mb-4">Below is a selection from the "Customers" table in the Northwind sample database:</p>
        <div class="container mx-auto py-8">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">CustomerID</th>
        <th class="border border-gray-300 px-4 py-2">CustomerName</th>
        <th class="border border-gray-300 px-4 py-2">ContactName</th>
        <th class="border border-gray-300 px-4 py-2">Address</th>
        <th class="border border-gray-300 px-4 py-2">City</th>
        <th class="border border-gray-300 px-4 py-2">PostalCode</th>
        <th class="border border-gray-300 px-4 py-2">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">89</td>
        <td class="border border-gray-300 px-4 py-2">White Clover Markets</td>
        <td class="border border-gray-300 px-4 py-2">Karl Jablonski</td>
        <td class="border border-gray-300 px-4 py-2">305 - 14th Ave. S. Suite 3B</td>
        <td class="border border-gray-300 px-4 py-2">Seattle</td>
        <td class="border border-gray-300 px-4 py-2">98128</td>
        <td class="border border-gray-300 px-4 py-2">USA</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">90</td>
        <td class="border border-gray-300 px-4 py-2">Wilman Kala</td>
        <td class="border border-gray-300 px-4 py-2">Matti Karttunen</td>
        <td class="border border-gray-300 px-4 py-2">Keskuskatu 45</td>
        <td class="border border-gray-300 px-4 py-2">Helsinki</td>
        <td class="border border-gray-300 px-4 py-2">21240</td>
        <td class="border border-gray-300 px-4 py-2">Finland</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">91</td>
        <td class="border border-gray-300 px-4 py-2">Wolski</td>
        <td class="border border-gray-300 px-4 py-2">Zbyszek</td>
        <td class="border border-gray-300 px-4 py-2">ul. Filtrowa 68</td>
        <td class="border border-gray-300 px-4 py-2">Walla</td>
        <td class="border border-gray-300 px-4 py-2">01-012</td>
        <td class="border border-gray-300 px-4 py-2">Poland</td>
      </tr>
    </tbody>
  </table>
  <hr></hr>
  <h2 className="text-xl font-bold mb-4 mt-4">INSERT INTO Example</h2>
  <p className="mb-4">The following SQL statement inserts a new record in the "Customers" table:</p>
  <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
              `}
            </code>
          </pre>
        </div>
        <p className="mb-4 mt-4">The selection from the "Customers" table will now look like this:</p>
        <div class="container mx-auto py-8">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">CustomerID</th>
        <th class="border border-gray-300 px-4 py-2">CustomerName</th>
        <th class="border border-gray-300 px-4 py-2">ContactName</th>
        <th class="border border-gray-300 px-4 py-2">Address</th>
        <th class="border border-gray-300 px-4 py-2">City</th>
        <th class="border border-gray-300 px-4 py-2">PostalCode</th>
        <th class="border border-gray-300 px-4 py-2">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">89</td>
        <td class="border border-gray-300 px-4 py-2">White Clover Markets</td>
        <td class="border border-gray-300 px-4 py-2">Karl Jablonski</td>
        <td class="border border-gray-300 px-4 py-2">305 - 14th Ave. S. Suite 3B</td>
        <td class="border border-gray-300 px-4 py-2">Seattle</td>
        <td class="border border-gray-300 px-4 py-2">98128</td>
        <td class="border border-gray-300 px-4 py-2">USA</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">90</td>
        <td class="border border-gray-300 px-4 py-2">Wilman Kala</td>
        <td class="border border-gray-300 px-4 py-2">Matti Karttunen</td>
        <td class="border border-gray-300 px-4 py-2">Keskuskatu 45</td>
        <td class="border border-gray-300 px-4 py-2">Helsinki</td>
        <td class="border border-gray-300 px-4 py-2">21240</td>
        <td class="border border-gray-300 px-4 py-2">Finland</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">91</td>
        <td class="border border-gray-300 px-4 py-2">Wolski</td>
        <td class="border border-gray-300 px-4 py-2">Zbyszek</td>
        <td class="border border-gray-300 px-4 py-2">ul. Filtrowa 68</td>
        <td class="border border-gray-300 px-4 py-2">Walla</td>
        <td class="border border-gray-300 px-4 py-2">01-012</td>
        <td class="border border-gray-300 px-4 py-2">Poland</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">92</td>
        <td class="border border-gray-300 px-4 py-2">Cardinal</td>
        <td class="border border-gray-300 px-4 py-2">Tom B. Erichsen</td>
        <td class="border border-gray-300 px-4 py-2">Skagen 21</td>
        <td class="border border-gray-300 px-4 py-2">Stavanger</td>
        <td class="border border-gray-300 px-4 py-2">4006</td>
        <td class="border border-gray-300 px-4 py-2">Norway</td>
      </tr>
    </tbody>
  </table>
</div>
<hr></hr>
<h2 className="text-xl font-bold mb-4 mt-4">Insert Data Only in Specified Columns</h2>
<p className='mb-t'>It is also possible to only insert data in specific columns.</p>
<p className='mb-t'>The following SQL statement will insert a new record, but only insert data in the "CustomerName", "City", and "Country" columns (CustomerID will be updated automatically):</p>
</div>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');
              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>The selection from the "Customers" table will now look like this:</p>
        <div class="container mx-auto py-8">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">CustomerID</th>
        <th class="border border-gray-300 px-4 py-2">CustomerName</th>
        <th class="border border-gray-300 px-4 py-2">ContactName</th>
        <th class="border border-gray-300 px-4 py-2">Address</th>
        <th class="border border-gray-300 px-4 py-2">City</th>
        <th class="border border-gray-300 px-4 py-2">PostalCode</th>
        <th class="border border-gray-300 px-4 py-2">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">89</td>
        <td class="border border-gray-300 px-4 py-2">White Clover Markets</td>
        <td class="border border-gray-300 px-4 py-2">Karl Jablonski</td>
        <td class="border border-gray-300 px-4 py-2">305 - 14th Ave. S. Suite 3B</td>
        <td class="border border-gray-300 px-4 py-2">Seattle</td>
        <td class="border border-gray-300 px-4 py-2">98128</td>
        <td class="border border-gray-300 px-4 py-2">USA</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">90</td>
        <td class="border border-gray-300 px-4 py-2">Wilman Kala</td>
        <td class="border border-gray-300 px-4 py-2">Matti Karttunen</td>
        <td class="border border-gray-300 px-4 py-2">Keskuskatu 45</td>
        <td class="border border-gray-300 px-4 py-2">Helsinki</td>
        <td class="border border-gray-300 px-4 py-2">21240</td>
        <td class="border border-gray-300 px-4 py-2">Finland</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">91</td>
        <td class="border border-gray-300 px-4 py-2">Wolski</td>
        <td class="border border-gray-300 px-4 py-2">Zbyszek</td>
        <td class="border border-gray-300 px-4 py-2">ul. Filtrowa 68</td>
        <td class="border border-gray-300 px-4 py-2">Walla</td>
        <td class="border border-gray-300 px-4 py-2">01-012</td>
        <td class="border border-gray-300 px-4 py-2">Poland</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">92</td>
        <td class="border border-gray-300 px-4 py-2">Cardinal</td>
        <td class="border border-gray-300 px-4 py-2">null</td>
        <td class="border border-gray-300 px-4 py-2">null</td>
        <td class="border border-gray-300 px-4 py-2">Stavanger</td>
        <td class="border border-gray-300 px-4 py-2">null</td>
        <td class="border border-gray-300 px-4 py-2">Norway</td>
      </tr>
    </tbody>
  </table>
</div>
<hr></hr>

<h2 className="text-xl font-bold mb-4 mt-4">The MySQL UPDATE Statement</h2>
<p className="mb-4"> The UPDATE statement is used to modify the existing records in a table.</p>
<h2 className="text-xl font-bold mb-4 mt-4"> UPDATE Syntax</h2>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
              `}
            </code>
          </pre>
        </div>
        <h2 className="text-xl font-bold mb-4 mt-4">Demo Database</h2>
        <p className="mb-4">Below is a selection from the "Customers" table in the Northwind sample database:</p>
        <div class="container mx-auto py-8">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">CustomerID</th>
        <th class="border border-gray-300 px-4 py-2">CustomerName</th>
        <th class="border border-gray-300 px-4 py-2">ContactName</th>
        <th class="border border-gray-300 px-4 py-2">Address</th>
        <th class="border border-gray-300 px-4 py-2">City</th>
        <th class="border border-gray-300 px-4 py-2">PostalCode</th>
        <th class="border border-gray-300 px-4 py-2">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">1</td>
        <td class="border border-gray-300 px-4 py-2">Alfreds Futterkiste</td>
        <td class="border border-gray-300 px-4 py-2">Maria Anders</td>
        <td class="border border-gray-300 px-4 py-2">Obere Str. 57</td>
        <td class="border border-gray-300 px-4 py-2">Berlin</td>
        <td class="border border-gray-300 px-4 py-2">12209</td>
        <td class="border border-gray-300 px-4 py-2">Germany</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">2</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo Emparedados y helados</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo</td>
        <td class="border border-gray-300 px-4 py-2">Avda. de la Constitución 2222</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">05021</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">3</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno Taquería</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno</td>
        <td class="border border-gray-300 px-4 py-2">Mataderos 2312</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">05023</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">4</td>
        <td class="border border-gray-300 px-4 py-2">Around the Horn</td>
        <td class="border border-gray-300 px-4 py-2">Thomas Hardy</td>
        <td class="border border-gray-300 px-4 py-2">120 Hanover Sq.</td>
        <td class="border border-gray-300 px-4 py-2">London</td>
        <td class="border border-gray-300 px-4 py-2">WA1 1DP</td>
        <td class="border border-gray-300 px-4 py-2">UK</td>
      </tr>
    </tbody>
  </table>
</div>
<h2 className="text-xl font-bold mb-4 mt-4">UPDATE Table</h2>
<p className='mb-4'>The following SQL statement updates the first customer (CustomerID = 1) with a new contact person and a new city.</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
WHERE CustomerID = 1;
              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>The selection from the "Customers" table will now look like this:</p>
        <div class="container mx-auto py-8">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">CustomerID</th>
        <th class="border border-gray-300 px-4 py-2">CustomerName</th>
        <th class="border border-gray-300 px-4 py-2">ContactName</th>
        <th class="border border-gray-300 px-4 py-2">Address</th>
        <th class="border border-gray-300 px-4 py-2">City</th>
        <th class="border border-gray-300 px-4 py-2">PostalCode</th>
        <th class="border border-gray-300 px-4 py-2">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">1</td>
        <td class="border border-gray-300 px-4 py-2">Alfreds Futterkiste</td>
        <td class="border border-gray-300 px-4 py-2">Alfred Schmidt</td>
        <td class="border border-gray-300 px-4 py-2">Obere Str. 57</td>
        <td class="border border-gray-300 px-4 py-2">Frankfurt</td>
        <td class="border border-gray-300 px-4 py-2">12209</td>
        <td class="border border-gray-300 px-4 py-2">Germany</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">2</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo Emparedados y helados</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo</td>
        <td class="border border-gray-300 px-4 py-2">Avda. de la Constitución 2222</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">05021</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">3</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno Taquería</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno</td>
        <td class="border border-gray-300 px-4 py-2">Mataderos 2312</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">05023</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">4</td>
        <td class="border border-gray-300 px-4 py-2">Around the Horn</td>
        <td class="border border-gray-300 px-4 py-2">Thomas Hardy</td>
        <td class="border border-gray-300 px-4 py-2">120 Hanover Sq.</td>
        <td class="border border-gray-300 px-4 py-2">London</td>
        <td class="border border-gray-300 px-4 py-2">WA1 1DP</td>
        <td class="border border-gray-300 px-4 py-2">UK</td>
      </tr>
    </tbody>
  </table>
  
</div>
<hr></hr>
<h2 className="text-xl font-bold mb-4 mt-4">UPDATE Multiple Records</h2>
<p className='mb-4'>It is the WHERE clause that determines how many records will be updated.</p>
<p className='mb-4'>The following SQL statement will update the PostalCode to 00000 for all records where country is "Mexico":</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
UPDATE Customers
SET PostalCode = 00000
WHERE Country = 'Mexico';
              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>The selection from the "Customers" table will now look like this:</p>
        <div class="container mx-auto py-8">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">CustomerID</th>
        <th class="border border-gray-300 px-4 py-2">CustomerName</th>
        <th class="border border-gray-300 px-4 py-2">ContactName</th>
        <th class="border border-gray-300 px-4 py-2">Address</th>
        <th class="border border-gray-300 px-4 py-2">City</th>
        <th class="border border-gray-300 px-4 py-2">PostalCode</th>
        <th class="border border-gray-300 px-4 py-2">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">1</td>
        <td class="border border-gray-300 px-4 py-2">Alfreds Futterkiste</td>
        <td class="border border-gray-300 px-4 py-2">Alfred Schmidt</td>
        <td class="border border-gray-300 px-4 py-2">Obere Str. 57</td>
        <td class="border border-gray-300 px-4 py-2">Frankfurt</td>
        <td class="border border-gray-300 px-4 py-2">12209</td>
        <td class="border border-gray-300 px-4 py-2">Germany</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">2</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo Emparedados y helados</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo</td>
        <td class="border border-gray-300 px-4 py-2">Avda. de la Constitución 2222</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">00000</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">3</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno Taquería</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno</td>
        <td class="border border-gray-300 px-4 py-2">Mataderos 2312</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">00000</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">4</td>
        <td class="border border-gray-300 px-4 py-2">Around the Horn</td>
        <td class="border border-gray-300 px-4 py-2">Thomas Hardy</td>
        <td class="border border-gray-300 px-4 py-2">120 Hanover Sq.</td>
        <td class="border border-gray-300 px-4 py-2">London</td>
        <td class="border border-gray-300 px-4 py-2">WA1 1DP</td>
        <td class="border border-gray-300 px-4 py-2">UK</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 className="text-xl font-bold mb-4 mt-4">Update Warning!</h2>
<p className="mb-4">Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
UPDATE Customers
SET PostalCode = 00000;
              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>The selection from the "Customers" table will now look like this:</p>
        <div class="container mx-auto py-8">
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-4 py-2">CustomerID</th>
        <th class="border border-gray-300 px-4 py-2">CustomerName</th>
        <th class="border border-gray-300 px-4 py-2">ContactName</th>
        <th class="border border-gray-300 px-4 py-2">Address</th>
        <th class="border border-gray-300 px-4 py-2">City</th>
        <th class="border border-gray-300 px-4 py-2">PostalCode</th>
        <th class="border border-gray-300 px-4 py-2">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2">1</td>
        <td class="border border-gray-300 px-4 py-2">Alfreds Futterkiste</td>
        <td class="border border-gray-300 px-4 py-2">Alfred Schmidt</td>
        <td class="border border-gray-300 px-4 py-2">Obere Str. 57</td>
        <td class="border border-gray-300 px-4 py-2">Frankfurt</td>
        <td class="border border-gray-300 px-4 py-2">00000</td>
        <td class="border border-gray-300 px-4 py-2">Germany</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">2</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo Emparedados y helados</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo</td>
        <td class="border border-gray-300 px-4 py-2">Avda. de la Constitución 2222</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">00000</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">3</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno Taquería</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno</td>
        <td class="border border-gray-300 px-4 py-2">Mataderos 2312</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">00000</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">4</td>
        <td class="border border-gray-300 px-4 py-2">Around the Horn</td>
        <td class="border border-gray-300 px-4 py-2">Thomas Hardy</td>
        <td class="border border-gray-300 px-4 py-2">120 Hanover Sq.</td>
        <td class="border border-gray-300 px-4 py-2">London</td>
        <td class="border border-gray-300 px-4 py-2">00000</td>
        <td class="border border-gray-300 px-4 py-2">UK</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
    <Footer />
    </>
  );
};

export default ContentPage2;
