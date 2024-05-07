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
        <h2 className="text-xl font-bold mb-4">MySQL MIN() and MAX() Functions</h2>
        <p className="mb-4">The MIN() function returns the smallest value of the selected column.</p>
        <p className="mb-4">The MAX() function returns the largest value of the selected column.</p>
        <hr className='mb-4'></hr>
        <h2 className="text-xl font-bold mb-4">MIN() Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT MIN(column_name)
FROM table_name
WHERE condition;
              `}
            </code>
          </pre>
        </div>
        <h2 className="text-xl font-bold mb-4 mt-4">MAX() Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT MAX(column_name)
FROM table_name
WHERE condition;
              `}
            </code>
          </pre>
        </div>
        <hr></hr>

        <h2 className="text-xl font-bold mb-4 mt-4">Demo Database</h2>
        <p className="mb-4">Below is a selection from the "Products" table in the Northwind sample database:</p>

        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">ProductID</th>
      <th class="border px-4 py-2">ProductName</th>
      <th class="border px-4 py-2">SupplierID</th>
      <th class="border px-4 py-2">CategoryID</th>
      <th class="border px-4 py-2">Unit</th>
      <th class="border px-4 py-2">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">Chais</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">10 boxes x 20 bags</td>
      <td class="border px-4 py-2">18</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">Chang</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">24 - 12 oz bottles</td>
      <td class="border px-4 py-2">19</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">Aniseed Syrup</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">12 - 550 ml bottles</td>
      <td class="border px-4 py-2">10</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">4</td>
      <td class="border px-4 py-2">Chef Anton's Cajun Seasoning</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">48 - 6 oz jars</td>
      <td class="border px-4 py-2">22</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">5</td>
      <td class="border px-4 py-2">Chef Anton's Gumbo Mix</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">36 boxes</td>
      <td class="border px-4 py-2">21.35</td>
    </tr>
  </tbody>
</table>
<hr></hr>

  
      <h2 className="text-xl font-bold mb-4 mt-4">MIN() Example</h2>
        <p className="mb-4">The following SQL statement finds the price of the cheapest product:</p>
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT MIN(Price) AS SmallestPrice
FROM Products;
              `}
            </code>
          </pre>
        </div>

        <hr></hr>
        <h2 className="text-xl font-bold mb-4 mt-4">MAX() Example</h2>
        <p className="mb-4">The following SQL statement finds the price of the cheapest product:</p>
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT MAX(Price) AS LargestPrice
FROM Products;
              `}
            </code>
          </pre>
        </div>
         
      </section>
      <hr></hr>

      

      {/* List Section */}
      <section>
      <hr className='mb-4'></hr>
      <h2 className="text-xl font-bold mb-4 mt-4">MySQL COUNT(), AVG() and SUM() Functions</h2>
      <p className="mb-4">The COUNT() function returns the number of rows that matches a specified criterion.</p>
      <h2 className="text-xl font-bold mb-4">COUNT() Syntax</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
              `}
            </code>
          </pre>
        </div>

      <p className="mb-4 mt-4">The AVG() function returns the average value of a numeric column. </p>
      <h2 className="text-xl font-bold mb-4">AVG() Syntax</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT AVG(column_name)
FROM table_name
WHERE condition;
              `}
            </code>
          </pre>
        </div>

        <p className="mb-4 mt-4">The SUM() function returns the total sum of a numeric column. </p>
      <h2 className="text-xl font-bold mb-4">SUM() Syntax</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT SUM(column_name)
FROM table_name
WHERE condition;
              `}
            </code>
          </pre>
        </div>


        <hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">Demo Database</h2>
        <p className='mb-4'>Below is a selection from the "Products" table in the Northwind sample database:</p>

        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">ProductID</th>
      <th class="border px-4 py-2">ProductName</th>
      <th class="border px-4 py-2">SupplierID</th>
      <th class="border px-4 py-2">CategoryID</th>
      <th class="border px-4 py-2">Unit</th>
      <th class="border px-4 py-2">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">Chais</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">10 boxes x 20 bags</td>
      <td class="border px-4 py-2">18</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">Chang</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">24 - 12 oz bottles</td>
      <td class="border px-4 py-2">19</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">Aniseed Syrup</td>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">12 - 550 ml bottles</td>
      <td class="border px-4 py-2">10</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">4</td>
      <td class="border px-4 py-2">Chef Anton's Cajun Seasoning</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">48 - 6 oz jars</td>
      <td class="border px-4 py-2">22</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">5</td>
      <td class="border px-4 py-2">Chef Anton's Gumbo Mix</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">36 boxes</td>
      <td class="border px-4 py-2">21.35</td>
    </tr>
  </tbody>
</table>

<hr className='mb-4 mt-4'></hr>

<h2 className="text-xl font-bold mb-4">COUNT() Example</h2>
<p className='mb-4'>The following SQL statement finds the number of products:</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT COUNT(ProductID)
FROM Products;
              `}
            </code>
          </pre>
        </div>
        
        <p className='mb-4'>Note: NULL values are not counted.</p>


        <hr></hr>
        <h2 className="text-xl font-bold mb-4 mt-4">AVG() Example</h2>
<p className='mb-4'>The following SQL statement finds the average price of all products:</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT AVG(Price)
FROM Products;
              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>Note: NULL values are not counted.</p>
        <hr></hr>

        <h2 className="text-xl font-bold mb-4">Demo Database</h2>
        <p className='mb-4'>Below is a selection from the "OrderDetails" table in the Northwind sample database:</p>

        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">OrderDetailID</th>
      <th class="border px-4 py-2">OrderID</th>
      <th class="border px-4 py-2">ProductID</th>
      <th class="border px-4 py-2">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">10248</td>
      <td class="border px-4 py-2">11</td>
      <td class="border px-4 py-2">12</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">2</td>
      <td class="border px-4 py-2">10248</td>
      <td class="border px-4 py-2">42</td>
      <td class="border px-4 py-2">10</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">3</td>
      <td class="border px-4 py-2">10248</td>
      <td class="border px-4 py-2">72</td>
      <td class="border px-4 py-2">5</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">4</td>
      <td class="border px-4 py-2">10249</td>
      <td class="border px-4 py-2">14</td>
      <td class="border px-4 py-2">9</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">5</td>
      <td class="border px-4 py-2">10249</td>
      <td class="border px-4 py-2">51</td>
      <td class="border px-4 py-2">40</td>
    </tr>
  </tbody>
</table>

<hr className='mb-4 mt-4'></hr>

<h2 className="text-xl font-bold mb-4 mt-4">SUM() Example</h2>
<p className='mb-4'>The following SQL statement finds the sum of the "Quantity" fields in the "OrderDetails" table:</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
SELECT SUM(Quantity)
FROM OrderDetails;
              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>Note: NULL values are not counted.</p>





      </section>
    </div>
    <Footer />
    </>
  );
};

export default ContentPage;
