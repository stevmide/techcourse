import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContentPage4 = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      {/* Code Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">The MySQL AND, OR and NOT Operators</h2>
        <p className="mb-4">The WHERE clause can be combined with AND, OR, and NOT operators.</p>
        <p className="mb-4">The AND and OR operators are used to filter records based on more than one condition:</p>
        <ul>
            <il>
                <p>The AND operator displays a record if all the conditions separated by AND are TRUE.</p>
            </il>
            <il>
                <p>The OR operator displays a record if any of the conditions separated by OR is TRUE.</p>
            </il>
        </ul>
        <p className='mb-4 mt-4'>The NOT operator displays a record if the condition(s) is NOT TRUE.</p>
        <h2 className="text-xl font-bold mb-4">AND Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
              `}
            </code>
          </pre>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-4">OR Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
              `}
            </code>
          </pre>
        </div>
        <h2 className="text-xl font-bold mb-4 mt-4">NOT Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
              `}
            </code>
          </pre>
        </div>
        <h2 className="text-xl font-bold mb-4 mt-4">Demo Database</h2>
        <p>The table below shows the complete "Customers" table from the Northwind sample database:</p>
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
        <tr>
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
        <tr>
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
        <tr>
          <td class="border border-gray-300 px-4 py-2">6</td>
          <td class="border border-gray-300 px-4 py-2">Blauer See Delikatessen</td>
          <td class="border border-gray-300 px-4 py-2">Hanna Moos</td>
          <td class="border border-gray-300 px-4 py-2">Forsterstr. 57</td>
          <td class="border border-gray-300 px-4 py-2">Mannheim</td>
          <td class="border border-gray-300 px-4 py-2">68306</td>
          <td class="border border-gray-300 px-4 py-2">Germany</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">7</td>
          <td class="border border-gray-300 px-4 py-2">Blondel père et fils</td>
          <td class="border border-gray-300 px-4 py-2">Frédérique Citeaux</td>
          <td class="border border-gray-300 px-4 py-2">24, place Kléber</td>
          <td class="border border-gray-300 px-4 py-2">Strasbourg</td>
          <td class="border border-gray-300 px-4 py-2">67000</td>
          <td class="border border-gray-300 px-4 py-2">France</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">8</td>
          <td class="border border-gray-300 px-4 py-2">Bólido Comidas preparadas</td>
          <td class="border border-gray-300 px-4 py-2">Martín Sommer</td>
          <td class="border border-gray-300 px-4 py-2">C/ Araquil, 67</td>
          <td class="border border-gray-300 px-4 py-2">Madrid</td>
          <td class="border border-gray-300 px-4 py-2">28023</td>
          <td class="border border-gray-300 px-4 py-2">Spain</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">9</td>
          <td class="border border-gray-300 px-4 py-2">Bon app'</td>
          <td class="border border-gray-300 px-4 py-2">Laurence Lebihans</td>
          <td class="border border-gray-300 px-4 py-2">12, rue des Bouchers</td>
          <td class="border border-gray-300 px-4 py-2">Marseille</td>
          <td class="border border-gray-300 px-4 py-2">13008</td>
          <td class="border border-gray-300 px-4 py-2">France</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">10</td>
          <td class="border border-gray-300 px-4 py-2">Bottom-Dollar Marketse</td>
          <td class="border border-gray-300 px-4 py-2">Elizabeth Lincoln</td>
          <td class="border border-gray-300 px-4 py-2">23 Tsawassen Blvd.</td>
          <td class="border border-gray-300 px-4 py-2">Tsawassen</td>
          <td class="border border-gray-300 px-4 py-2">T2F 8M4</td>
          <td class="border border-gray-300 px-4 py-2">Canada</td>
        </tr>
      </tbody>
    </table>

        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">AND Example</h2>
        <p className="mb-4">The following SQL statement selects all fields from "Customers" where country is "Germany" AND city is "Berlin":</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
WHERE Country = 'Germany' AND City = 'Berlin';
              `}
            </code>
          </pre>
        </div>

      </section>

      {/* Text Paragraphs Section */}
      <section className="mb-8">
      <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">OR Example</h2>
        <p className="mb-4">The following SQL statement selects all fields from "Customers" where city is "Berlin" OR "Stuttgart":</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
WHERE City = 'Berlin' OR City = 'Stuttgart';
              `}
            </code>
          </pre>
        </div>


        <p className="mb-4 mt-4">The following SQL statement selects all fields from "Customers" where country is "Germany" OR "Spain":</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
WHERE Country = 'Germany' OR Country = 'Spain';
              `}
            </code>
          </pre>
        </div>
      </section>

      
      <section>
      <hr className='mb-4'></hr>
      <h2 className="text-xl font-bold mb-4">NOT Example</h2>
        <p className="mb-4">The following SQL statement selects all fields from "Customers" where country is NOT "Germany":</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
WHERE NOT Country = 'Germany';
              `}
            </code>
          </pre>
        </div>


        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">Combining AND, OR and NOT</h2>
        <p className="mb-4">You can also combine the AND, OR and NOT operators.</p>
        <p className="mb-4">The following SQL statement selects all fields from "Customers" where country is "Germany" AND city must be "Berlin" OR "Stuttgart" (use parenthesis to form complex expressions):</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'Stuttgart');
              `}
            </code>
          </pre>
        </div>
        <p className="mb-4">The following SQL statement selects all fields from "Customers" where country is NOT "Germany" and NOT "USA":</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
WHERE NOT Country = 'Germany' AND NOT Country = 'USA';
              `}
            </code>
          </pre>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ContentPage4;
