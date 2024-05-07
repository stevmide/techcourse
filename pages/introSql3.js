import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContentPage3 = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      {/* Code Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">The MySQL DELETE Statement</h2>
        <p className="mb-4">The DELETE statement is used to delete existing records in a table.</p>
        
        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">DELETE Syntax</h2>
        <p className="mb-4"></p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
DELETE FROM table_name WHERE condition;
              `}
            </code>
          </pre>
        </div>
      </section>

      {/* Text Paragraphs Section */}
      <section className="mb-8">
      <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">Demo Database</h2>
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
      <tr>
        <td class="border border-gray-300 px-4 py-2">5</td>
        <td class="border border-gray-300 px-4 py-2">Berglunds snabbköp</td>
        <td class="border border-gray-300 px-4 py-2">Christina Berglund</td>
        <td class="border border-gray-300 px-4 py-2">Berguvsvägen 8</td>
        <td class="border border-gray-300 px-4 py-2">Luleå</td>
        <td class="border border-gray-300 px-4 py-2">S-958 22</td>
        <td class="border border-gray-300 px-4 py-2">Sweden</td>
      </tr>
    </tbody>
  </table>
</div>

      </section>

      {/* List Section */}
      <section>
      <hr className='mb-4'></hr>
      <h2 className="text-xl font-bold mb-4">SQL DELETE Example</h2>
        <p className="mb-4">The following SQL statement deletes the customer "Alfreds Futterkiste" from the "Customers" table:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>The "Customers" table will now look like this:</p>

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
        <td class="border border-gray-300 px-4 py-2">2</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo Emparedados y helados</td>
        <td class="border border-gray-300 px-4 py-2">Ana Trujillo</td>
        <td class="border border-gray-300 px-4 py-2">Avda. de la Constitución 2222</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">05021</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">3</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno Taquería</td>
        <td class="border border-gray-300 px-4 py-2">Antonio Moreno</td>
        <td class="border border-gray-300 px-4 py-2">Mataderos 2312</td>
        <td class="border border-gray-300 px-4 py-2">México D.F.</td>
        <td class="border border-gray-300 px-4 py-2">05023</td>
        <td class="border border-gray-300 px-4 py-2">Mexico</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2">4</td>
        <td class="border border-gray-300 px-4 py-2">Around the Horn</td>
        <td class="border border-gray-300 px-4 py-2">Thomas Hardy</td>
        <td class="border border-gray-300 px-4 py-2">120 Hanover Sq.</td>
        <td class="border border-gray-300 px-4 py-2">London</td>
        <td class="border border-gray-300 px-4 py-2">WA1 1DP</td>
        <td class="border border-gray-300 px-4 py-2">UK</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">5</td>
        <td class="border border-gray-300 px-4 py-2">Berglunds snabbköp</td>
        <td class="border border-gray-300 px-4 py-2">Christina Berglund</td>
        <td class="border border-gray-300 px-4 py-2">Berguvsvägen 8</td>
        <td class="border border-gray-300 px-4 py-2">Luleå</td>
        <td class="border border-gray-300 px-4 py-2">S-958 22</td>
        <td class="border border-gray-300 px-4 py-2">Sweden</td>
      </tr>
    </tbody>
  </table>
</div>


        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">Delete All Records</h2>
        <p className='mb-4'>It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
DELETE FROM table_name;
              `}
            </code>
          </pre>
        </div>
        <p className="mb-4 mt-4">The following SQL statement deletes all rows in the "Customers" table, without deleting the table:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
DELETE FROM Customers;
              `}
            </code>
          </pre>
        </div>
      </section>
      <hr></hr>

      <h2 className="text-xl font-bold mb-4">The MySQL WHERE Clause</h2>
      <p className='mb-4 mt-4'>The WHERE clause is used to filter records.</p>
      <p className='mb-4 mt-4'>It is used to extract only those records that fulfill a specified condition.</p>
      <h2 className="text-xl font-bold mb-4">WHERE Syntax</h2>

      <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT column1, column2, ...
FROM table_name
WHERE condition;
              `}
            </code>
          </pre>
        </div>
        <hr></hr>
        <h2 className="text-xl font-bold mb-4 mt-4">Demo Database</h2>
        <p className='mb-4'>Below is a selection from the "Customers" table in the Northwind sample database:</p>
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
      <tr>
        <td class="border border-gray-300 px-4 py-2">5</td>
        <td class="border border-gray-300 px-4 py-2">Berglunds snabbköp</td>
        <td class="border border-gray-300 px-4 py-2">Christina Berglund</td>
        <td class="border border-gray-300 px-4 py-2">Berguvsvägen 8</td>
        <td class="border border-gray-300 px-4 py-2">Luleå</td>
        <td class="border border-gray-300 px-4 py-2">S-958 22</td>
        <td class="border border-gray-300 px-4 py-2">Sweden</td>
      </tr>
    </tbody>
  </table>
</div>
<h2 className="text-xl font-bold mb-4 mt-4">WHERE Clause Example</h2>
<p className='mb-4'>The following SQL statement selects all the customers from "Mexico":</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
WHERE Country = 'Mexico';
              `}
            </code>
          </pre>
        </div>
        <hr></hr>
        <h2 className="text-xl font-bold mb-4 mt-4">Text Fields vs. Numeric Fields</h2>
        <p className='mb-4'>SQL requires single quotes around text values (most database systems will also allow double quotes).</p>
        <p className='mb-4'>However, numeric fields should not be enclosed in quotes:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
WHERE CustomerID = 1;
              `}
            </code>
          </pre>
        </div>
      
        
    </div>
    <Footer />
    </>
  );
};

export default ContentPage3;
