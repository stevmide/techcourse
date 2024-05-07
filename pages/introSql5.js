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
        <h2 className="text-xl font-bold mb-4">The MySQL GROUP BY Statement</h2>
        <p className="mb-4">The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country".</p>
        <p className="mb-4">The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns..</p>
        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">GROUP BY Syntax</h2>

        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
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

        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">CustomerID</th>
      <th class="border px-4 py-2">CustomerName</th>
      <th class="border px-4 py-2">ContactName</th>
      <th class="border px-4 py-2">Address</th>
      <th class="border px-4 py-2">City</th>
      <th class="border px-4 py-2">PostalCode</th>
      <th class="border px-4 py-2">Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">Alfreds Futterkiste</td>
      <td class="border px-4 py-2">Maria Anders</td>
      <td class="border px-4 py-2">Obere Str. 57</td>
      <td class="border px-4 py-2">Berlin</td>
      <td class="border px-4 py-2">12209</td>
      <td class="border px-4 py-2">Germany</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">Ana Trujillo Emparedados y helados</td>
      <td class="border px-4 py-2">Ana Trujillo</td>
      <td class="border px-4 py-2">Avda. de la Constitución 2222</td>
      <td class="border px-4 py-2">México D.F.</td>
      <td class="border px-4 py-2">05021</td>
      <td class="border px-4 py-2">Mexico</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">Antonio Moreno Taquería</td>
      <td class="border px-4 py-2">Antonio Moreno</td>
      <td class="border px-4 py-2">Mataderos 2312</td>
      <td class="border px-4 py-2">México D.F.</td>
      <td class="border px-4 py-2">05023</td>
      <td class="border px-4 py-2">Mexico</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">4</td>
      <td class="border px-4 py-2">Around the Horn</td>
      <td class="border px-4 py-2">Thomas Hardy</td>
      <td class="border px-4 py-2">120 Hanover Sq.</td>
      <td class="border px-4 py-2">London</td>
      <td class="border px-4 py-2">WA1 1DP</td>
      <td class="border px-4 py-2">UK</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">5</td>
      <td class="border px-4 py-2">Berglunds snabbköp</td>
      <td class="border px-4 py-2">Christina Berglund</td>
      <td class="border px-4 py-2">Berguvsvägen 8</td>
      <td class="border px-4 py-2">Luleå</td>
      <td class="border px-4 py-2">S-958 22</td>
      <td class="border px-4 py-2">Sweden</td>
    </tr>
  </tbody>
</table>
 <hr></hr>

<h2 className="text-xl font-bold mb-4 mt-4">MySQL GROUP BY Examples</h2>

        <p className="mb-4">The following SQL statement lists the number of customers in each country:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
              `}
            </code>
          </pre>
        </div>
        <p className="mb-4">The following SQL statement lists the number of customers in each country, sorted high to low:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
              `}
            </code>
          </pre>
        </div>
      </section>

      {/* List Section */}
      <section>
      <hr className='mb-4'></hr>
      <h2 className="text-xl font-bold mb-4 mt-4">Demo Database</h2>
        <p className="mb-4">Below is a selection from the "Orders" table in the Northwind sample database:</p>
        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">OrderID</th>
      <th class="border px-4 py-2">CustomerID</th>
      <th class="border px-4 py-2">EmployeeID</th>
      <th class="border px-4 py-2">OrderDate</th>
      <th class="border px-4 py-2">ShipperID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">10248</td>
      <td class="border px-4 py-2">90</td>
      <td class="border px-4 py-2">5</td>
      <td class="border px-4 py-2">1996-07-04</td>
      <td class="border px-4 py-2">3</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10249</td>
      <td class="border px-4 py-2">81</td>
      <td class="border px-4 py-2">6</td>
      <td class="border px-4 py-2">1996-07-05</td>
      <td class="border px-4 py-2">1</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10250</td>
      <td class="border px-4 py-2">34</td>
      <td class="border px-4 py-2">4</td>
      <td class="border px-4 py-2">1996-07-08</td>
      <td class="border px-4 py-2">2</td>
    </tr>
  </tbody>
</table>



        
        <p className="mb-4">And a selection from the "Shippers" table:</p>

        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">ShipperID</th>
      <th class="border px-4 py-2">ShipperName</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">Speedy Express</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">United Package</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">Federal Shipping</td>
    </tr>
  </tbody>
</table>

        <hr></hr>

        <h2 className="text-xl font-bold mb-4 mt-4">The MySQL ORDER BY Keyword</h2>
        <p className="mb-4">The ORDER BY keyword is used to sort the result-set in ascending or descending order.</p>
        <p className="mb-4">The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.</p>
        <h2 className="text-xl font-bold mb-4">ORDER BY Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
              `}
            </code>
          </pre>
        </div>

        <hr></hr>
        <h2 className="text-xl font-bold mb-4 mt-4">Demo Database</h2>
        <p className="mb-4">Below is a selection from the "Customers" table in the Northwind sample database:</p>
        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">CustomerID</th>
      <th class="border px-4 py-2">CustomerName</th>
      <th class="border px-4 py-2">ContactName</th>
      <th class="border px-4 py-2">Address</th>
      <th class="border px-4 py-2">City</th>
      <th class="border px-4 py-2">PostalCode</th>
      <th class="border px-4 py-2">Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">Alfreds Futterkiste</td>
      <td class="border px-4 py-2">Maria Anders</td>
      <td class="border px-4 py-2">Obere Str. 57</td>
      <td class="border px-4 py-2">Berlin</td>
      <td class="border px-4 py-2">12209</td>
      <td class="border px-4 py-2">Germany</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">Ana Trujillo Emparedados y helados</td>
      <td class="border px-4 py-2">Ana Trujillo</td>
      <td class="border px-4 py-2">Avda. de la Constitución 2222</td>
      <td class="border px-4 py-2">México D.F.</td>
      <td class="border px-4 py-2">05021</td>
      <td class="border px-4 py-2">Mexico</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">Antonio Moreno Taquería</td>
      <td class="border px-4 py-2">Antonio Moreno</td>
      <td class="border px-4 py-2">Mataderos 2312</td>
      <td class="border px-4 py-2">México D.F.</td>
      <td class="border px-4 py-2">05023</td>
      <td class="border px-4 py-2">Mexico</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">4</td>
      <td class="border px-4 py-2">Around the Horn</td>
      <td class="border px-4 py-2">Thomas Hardy</td>
      <td class="border px-4 py-2">120 Hanover Sq.</td>
      <td class="border px-4 py-2">London</td>
      <td class="border px-4 py-2">WA1 1DP</td>
      <td class="border px-4 py-2">UK</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">5</td>
      <td class="border px-4 py-2">Berglunds snabbköp</td>
      <td class="border px-4 py-2">Christina Berglund</td>
      <td class="border px-4 py-2">Berguvsvägen 8</td>
      <td class="border px-4 py-2">Luleå</td>
      <td class="border px-4 py-2">S-958 22</td>
      <td class="border px-4 py-2">Sweden</td>
    </tr>
  </tbody>
</table>

<hr></hr>

<h2 className="text-xl font-bold mb-4 mt-4">ORDER BY Example</h2>
<p className="mb-4">The following SQL statement selects all customers from the "Customers" table, sorted by the "Country" column:</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
ORDER BY Country;
              `}
            </code>
          </pre>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-4">ORDER BY DESC Example</h2>
<p className="mb-4">The following SQL statement selects all customers from the "Customers" table, sorted DESCENDING by the "Country" column:</p>

<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
ORDER BY Country DESC;
              `}
            </code>
          </pre>
        </div>
        
        <hr></hr>

        <h2 className="text-xl font-bold mb-4 mt-4">ORDER BY Several Columns Example</h2>
<p className="mb-4">The following SQL statement selects all customers from the "Customers" table, sorted by the "Country" and the "CustomerName" column. This means that it orders by Country, but if some rows have the same Country, it orders them by CustomerName:</p>

<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
ORDER BY Country, CustomerName;
              `}
            </code>
          </pre>
        </div>
<hr></hr>

<h2 className="text-xl font-bold mb-4 mt-4">ORDER BY Several Columns Example 2</h2>
<p className="mb-4">The following SQL statement selects all customers from the "Customers" table, sorted ascending by the "Country" and descending by the "CustomerName" column:</p>

<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;
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

export default ContentPage;
