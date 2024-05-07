import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContentPage7 = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      {/* Code Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">MySQL Joining Tables</h2>
        <p className="mb-4">A JOIN clause is used to combine rows from two or more tables, based on a related column between them.</p>
        <p className="mb-4">Let's look at a selection from the "Orders" table:</p>
        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">OrderID</th>
      <th class="border px-4 py-2">CustomerID</th>
      <th class="border px-4 py-2">OrderDate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">10308</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">1996-09-18</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10309</td>
      <td class="border px-4 py-2">37</td>
      <td class="border px-4 py-2">1996-09-19</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10310</td>
      <td class="border px-4 py-2">77</td>
      <td class="border px-4 py-2">1996-09-20</td>
    </tr>
  </tbody>
</table>

<p className="mb-4">Let's look at a selection from the "Orders" table:</p>

<table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">CustomerID</th>
      <th class="border px-4 py-2">CustomerName</th>
      <th class="border px-4 py-2">ContactName</th>
      <th class="border px-4 py-2">Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">Alfreds Futterkiste</td>
      <td class="border px-4 py-2">Maria Anders</td>
      <td class="border px-4 py-2">Germany</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">Ana Trujillo Emparedados y helados</td>
      <td class="border px-4 py-2">Ana Trujillo</td>
      <td class="border px-4 py-2">Mexico</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">Antonio Moreno Taquería</td>
      <td class="border px-4 py-2">Antonio Moreno</td>
      <td class="border px-4 py-2">Mexico</td>
    </tr>
  </tbody>
</table>

<p className="mb-4 mt-4">Notice that the "CustomerID" column in the "Orders" table refers to the "CustomerID" in the "Customers" table. The relationship between the two tables above is the "CustomerID" column.</p>
<p className="mb-4">Then, we can create the following SQL statement (that contains an INNER JOIN), that selects records that have matching values in both tables:</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
              `}
            </code>
          </pre>
        </div>

        <p className="mb-4 mt-4">and it will produce something like this:</p>

        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">OrderID</th>
      <th class="border px-4 py-2">CustomerName</th>
      <th class="border px-4 py-2">OrderDate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">10308</td>
      <td class="border px-4 py-2">Ana Trujillo Emparedados y helados</td>
      <td class="border px-4 py-2">9/18/1996</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10365</td>
      <td class="border px-4 py-2">Antonio Moreno Taquería</td>
      <td class="border px-4 py-2">11/27/1996</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10383</td>
      <td class="border px-4 py-2">Around the Horn</td>
      <td class="border px-4 py-2">12/16/1996</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10355</td>
      <td class="border px-4 py-2">Around the Horn</td>
      <td class="border px-4 py-2">11/15/1996</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10278</td>
      <td class="border px-4 py-2">Berglunds snabbköp</td>
      <td class="border px-4 py-2">8/12/1996</td>
    </tr>
  </tbody>
</table>




        <hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">Supported Types of Joins in MySQL</h2>

        <ul className="list-disc pl-4">
          <li className="mb-2">INNER JOIN: Returns records that have matching values in both tables</li>
          <li className="mb-2">LEFT JOIN: Returns all records from the left table, and the matched records from the right table</li>
          <li className="mb-2">RIGHT JOIN: Returns all records from the right table, and the matched records from the left table</li>
          <li className="mb-2">FULL JOIN: Returns all records from both tables</li>
        </ul>  

      </section>

      
      <section className="mb-8">
      <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">MySQL INNER JOIN Keyword</h2>
        <p className="mb-4">The INNER JOIN keyword selects records that have matching values in both tables.</p>
        <h2 lassName="text-xl font-bold mb-4">INNER JOIN Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
              `}
            </code>
          </pre>
        </div>
        <hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">Demo Database</h2>
        <p className="mb-4">In this tutorial we will use the well-known Northwind sample database.</p>
        <p className="mb-4">Below is a selection from the "Orders" table</p>
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
      <td class="border px-4 py-2">10308</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">7</td>
      <td class="border px-4 py-2">1996-09-18</td>
      <td class="border px-4 py-2">3</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10309</td>
      <td class="border px-4 py-2">37</td>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">1996-09-19</td>
      <td class="border px-4 py-2">1</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10310</td>
      <td class="border px-4 py-2">77</td>
      <td class="border px-4 py-2">8</td>
      <td class="border px-4 py-2">1996-09-20</td>
      <td class="border px-4 py-2">2</td>
    </tr>
  </tbody>
</table>

<p className="mb-4 mt-4">And a selection from the "Customers" table:</p>
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
  </tbody>
</table>

<hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">MySQL INNER JOIN Example</h2>
        <p className="mb-4">The following SQL statement selects all orders with customer information:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

              `}
            </code>
          </pre>
        </div>

        
        <p className="mb-4 mt-4">Note: The INNER JOIN keyword selects all rows from both tables as long as there is a 
        match between the columns. If there are records in the "Orders" table that do not have matches in "Customers", 
        these orders will not be shown!</p>
        <hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">JOIN Three Tables</h2>
        <p className="mb-4">The following SQL statement selects all orders with customer and shipper information:</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);

              `}
            </code>
          </pre>
        </div>

        <hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">MySQL LEFT JOIN Keyword</h2>
        <p className="mb-4">The LEFT JOIN keyword returns all records from the left table (table1), and the matching records (if any) from the right table (table2).</p>
        <h2 className="text-xl font-bold mb-4 mt-4">LEFT JOIN Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

              `}
            </code>
          </pre>
        </div>


        <hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">Demo Database</h2>
        <p className="mb-4">In this tutorial we will use the well-known Northwind sample database.</p>
        <p className="mb-4">Below is a selection from the "Customers" table:</p>
        <table class="table-auto border border-collapse">
  <thead class="bg-gray-200">
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
  </tbody>
</table>

<p className="mb-4 mt-4">And a selection from the "Orders" table:</p>

<table class="table-auto border border-collapse">
  <thead class="bg-gray-200">
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
      <td class="border px-4 py-2">10308</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">7</td>
      <td class="border px-4 py-2">1996-09-18</td>
      <td class="border px-4 py-2">3</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10309</td>
      <td class="border px-4 py-2">37</td>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">1996-09-19</td>
      <td class="border px-4 py-2">1</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10310</td>
      <td class="border px-4 py-2">77</td>
      <td class="border px-4 py-2">8</td>
      <td class="border px-4 py-2">1996-09-20</td>
      <td class="border px-4 py-2">2</td>
    </tr>
  </tbody>
</table>

<hr className="mb-4 mt-4"></hr>

<h2 className="text-xl font-bold mb-4">MySQL LEFT JOIN Example</h2>
<p className="mb-4">The following SQL statement will select all customers, and any orders they might have:</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;

              `}
            </code>
          </pre>
        </div>
        <p className="mb-4">Note: The LEFT JOIN keyword returns all records from the left table (Customers), even if there are no matches in the right table (Orders).</p>
        <hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">MySQL RIGHT JOIN Keyword</h2>
        <p className="mb-4">The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records (if any) from the left table (table1).</p>
        <h2>RIGHT JOIN Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                        {/* Code Block */}
                <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-javascript">
                    {`
       SELECT column_name(s)
       FROM table1
       RIGHT JOIN table2
       ON table1.column_name = table2.column_name;

                    `}
                    </code>
                </pre>
                </div>

                <hr className='mb-4 mt-4'></hr>

        <h2 className="text-xl font-bold mb-4">Demo Database</h2>
        <p className="mb-4">In this tutorial we will use the well-known Northwind sample database.</p>
        <p className="mb-4">Below is a selection from the "Orders" table:</p>
        <table class="table-auto border border-collapse">
  <thead class="bg-gray-200">
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
      <td class="border px-4 py-2">10308</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">7</td>
      <td class="border px-4 py-2">1996-09-18</td>
      <td class="border px-4 py-2">3</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10309</td>
      <td class="border px-4 py-2">37</td>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">1996-09-19</td>
      <td class="border px-4 py-2">1</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10310</td>
      <td class="border px-4 py-2">77</td>
      <td class="border px-4 py-2">8</td>
      <td class="border px-4 py-2">1996-09-20</td>
      <td class="border px-4 py-2">2</td>
    </tr>
  </tbody>
</table>

<p className='mb-4 mt-4'>And a selection from the "Employees" table:</p>

<table class="table-auto border border-collapse">
  <thead class="bg-gray-200">
    <tr>
      <th class="border px-4 py-2">EmployeeID</th>
      <th class="border px-4 py-2">LastName</th>
      <th class="border px-4 py-2">FirstName</th>
      <th class="border px-4 py-2">BirthDate</th>
      <th class="border px-4 py-2">Photo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">Davolio</td>
      <td class="border px-4 py-2">Nancy</td>
      <td class="border px-4 py-2">12/8/1968</td>
      <td class="border px-4 py-2">EmpID1.pic</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">Fuller</td>
      <td class="border px-4 py-2">Andrew</td>
      <td class="border px-4 py-2">2/19/1952</td>
      <td class="border px-4 py-2">EmpID2.pic</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">Leverling</td>
      <td class="border px-4 py-2">Janet</td>
      <td class="border px-4 py-2">8/30/1963</td>
      <td class="border px-4 py-2">EmpID3.pic</td>
    </tr>
  </tbody>
</table>

<hr className='mb-4 mt-4'></hr>

<h2 className="text-xl font-bold mb-4">MySQL RIGHT JOIN Example</h2>
<p className="mb-4">The following SQL statement will return all employees, and any orders they might have placed:</p>
<div className="bg-gray-100 p-4 rounded-lg">
                        {/* Code Block */}
                <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-javascript">
                    {`
     SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
     FROM Orders
     RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
     ORDER BY Orders.OrderID;

                    `}
                    </code>
                </pre>
                </div>

<p className="mb-4">Note: The RIGHT JOIN keyword returns all records from the right table (Employees), even if there 
are no matches in the left table (Orders).</p>            

<hr className='mb-4 mt-4'></hr>

<h2 className="text-xl font-bold mb-4">MySQL FULL JOIN Keyword</h2>
<p className="mb-4">The FULL JOIN keyword returns all records from both tables (table1 and table2).</p>
<div className="bg-gray-100 p-4 rounded-lg">
                        {/* Code Block */}
                <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-javascript">
                    {`
 SELECT column_name(s)
 FROM table1
 FULL JOIN table2;

                    `}
                    </code>
                </pre>
                </div>
<p>Note: FULL JOIN can potentially return very large result-sets!</p>

<hr className='mb-4 mt-4'></hr>

<h2 className="text-xl font-bold mb-4">Demo Database</h2>
<p className="mb-4">Below is a selection from the "Customers" table:</p>
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
  </tbody>
</table>

<p className='mb-4 mt-4'>And a selection from the "Orders" table:</p>

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
      <td class="border px-4 py-2">10308</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">7</td>
      <td class="border px-4 py-2">1996-09-18</td>
      <td class="border px-4 py-2">3</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10309</td>
      <td class="border px-4 py-2">37</td>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">1996-09-19</td>
      <td class="border px-4 py-2">1</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10310</td>
      <td class="border px-4 py-2">77</td>
      <td class="border px-4 py-2">8</td>
      <td class="border px-4 py-2">1996-09-20</td>
      <td class="border px-4 py-2">2</td>
    </tr>
  </tbody>
</table>
<hr className='mb-4 mt-4'></hr>
<h2 className="text-xl font-bold mb-4">MySQL FULL JOIN Example</h2>
<p className="mb-4">The following SQL statement selects all customers, and all orders:</p>

<div className="bg-gray-100 p-4 rounded-lg">
                        {/* Code Block */}
                <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-javascript">
                    {`
 SELECT Customers.CustomerName, Orders.OrderID
 FROM Customers
 FULL JOIN Orders;

                    `}
                    </code>
                </pre>
                </div>

<p className='mb-4 mt-4'>Note: The FULL JOIN keyword returns all matching records 
from both tables whether the other table matches or not. So, if there are rows in "Customers" 
that do not have matches in "Orders", or if there are rows in "Orders" that do not have matches in "Customers", 
those rows will be listed as well.</p>           

<p className='mb-4 mt-4'>If you add a WHERE clause (if table1 and table2 has a relationship), the FULL JOIN will produce the same result 
    as the INNER JOIN clause:</p>

    <div className="bg-gray-100 p-4 rounded-lg">
                        {/* Code Block */}
                <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-javascript">
                    {`
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL JOIN Orders
WHERE Customers.CustomerID=Orders.CustomerID;

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

export default ContentPage7;
