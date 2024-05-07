import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContentProg3 = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      {/* Code Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex item-center justify-center">Data Types</h2>
        <p className="mb-8 flex item-center justify-center">Explore integers, floats, booleans, and strings.</p>
        <hr className='mb-4 mt-4'></hr>
        <h2 className="text-xl font-bold mb-4">Introduction</h2>
        <p className="mb-4 ">Whenever you create a variable in Python, it has a value 
        with a corresponding data type. There are many different data types, such as integers, 
        floats, booleans, and strings, all of which we'll cover in this lesson. (This is 
        just a small subset of the available data types -- there are also dictionaries, 
        sets, lists, tuples, and much more.)</p>
        <p className="mb-4">Data types are important, because they determine what kinds 
        of actions you can do with them. For instance, you can divide two floats, but you 
        cannot divide two strings. For instance, 12.0/2.0 makes sense, but "cat"/"dog" does not.</p>
        <p className="mb-4">In this tutorial, you'll see several examples of Python code. 
        You'll get a chance to write your own code in the exercise. (If you'd like to 
        preview the exercise, feel free to take a look now. We also provide a link to the 
        exercise at the end of this tutorial.)</p>

        <p className='mb-8'>To avoid errors, we need to make sure that the actions match the data types that we have.</p>

        <h2 className="text-xl font-bold mb-4 flex item-center justify-center">Integers</h2>
        <p className="mb-4">Integers are numbers without any fractional part and can be positive 
        (1, 2, 3, ...), negative (-1, -2, -3, ...), or zero (0).</p>
        <p className="mb-4">In the code cell below, we set a variable x to an integer. We then verify the data type 
        with type(), and need only pass the variable name into the parentheses.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
x = 14
print(x)
print(type(x))
              `}
            </code>
          </pre>
        </div>
        <p>Hello, world!</p>

        <p className='mb-8'>14</p>
        <h2 className="text-xl font-bold mb-4 ">Floats</h2>    
        <p className='mb-4'>Floats are numbers with fractional parts. They can have many numbers after decimal.</p>

        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
nearly_pi = 3.141592653589793238462643383279502884197169399375105820974944
print(nearly_pi)
print(type(nearly_pi))
              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>3.141592653589793</p>


        <p className='mb-4'>We can also specify a float with a fraction.</p>    
            <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
almost_pi = 22/7
print(almost_pi)
print(type(almost_pi))
              `}
            </code>
          </pre>
        </div>
        <p>3</p>
        <p className='mt-4 mb4'>3.142857142857143</p>
        <p>One function that is particularly useful for fractions is the round() function. It lets you round a number 
            to a specified number of decimal places.</p>      
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
# Round to 5 decimal places
rounded_pi = round(almost_pi, 5)
print(rounded_pi)
print(type(rounded_pi))
              `}
            </code>
          </pre>
        </div>
        <p>4</p>

        <p>3.14286</p>
        
  
<p className='mb-4 mt-4'>Whenever you write an number with a decimal point, Python recognizes it as a float data type.</p>
<p>For instance, 1. (or 1.0, 1.00, etc) will be recognized as a float. This is the case, even though these numbers technically have no fractional part!</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
y_float = 1.
print(y_float)
print(type(y_float))
              `}
            </code>
          </pre>
        </div>
        <p>1.0</p>

        
        <h2 className="text-xl font-bold mb-4">Booleans</h2>
        <p className='mb-4 mt-4'>Booleans represent one of two values: True or False. In the code cell below, z_one is set to a boolean with value True.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
z_one = True
print(z_one)
print(type(z_one))
              `}
            </code>
          </pre>
        </div>
        
        <p className='mb-4'>True</p>
        <p className='mb-4'>Next, z_two is set to a boolean with value False.</p>    
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
z_two = False
print(z_two)
print(type(z_two))
              `}
            </code>
          </pre>
        </div>
        <p>6</p>

        <p className='mb-4 mt-4'>False</p>

        <p className='mb-4'>Booleans are used to represent the truth value of an expression. Since 1 greater than 2 is a true statement, z_three takes on a value of True.</p>
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
z_three = (1 < 2)
print(z_three)
print(type(z_three))
              `}
            </code>
          </pre>
        </div>   
        <p>True</p> 

        <p className='mb-4'>Similarly, since 5 is greater than 3 is a false statement, z_four takes on a value of False.</p>   
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
z_four = (5 < 3)
print(z_four)
print(type(z_four))
              `}
            </code>
          </pre>
        </div>   
        <p className='mb-4'>False</p>



<p className='mb-4'>We can switch the value of a boolean by using not. So, not True is equivalent
 to False, and not False becomes True.</p>

<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
z_five = not z_four
print(z_five)
print(type(z_five))
              `}
            </code>
          </pre>
        </div> 
        <>9</>  

        <p className='mb-4 mt-8'>Booleans will be important in the next lesson, when you learn about conditions and conditional statements</p>
        <h2 className="text-xl font-bold mb-4">Strings</h2>

        <p className='mb-4 mt-4'>The string data type is a collection of characters (like alphabet letters, 
        punctuation, numerical digits, or symbols) contained in quotation marks. Strings are commonly used 
        to represent text.</p>  
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
w = "Hello, Python!"
print(w)
print(type(w))
              `}
            </code>
          </pre>
        </div> 

        <p className='mb-4'>Hello, Python!</p>


        <p className='mb-4'>You can get the length of a string with len(). "Hello, Python!" has length 14, because it has
        14 characters, including the space, comma, and exclamation mark. Note that the quotation marks are not included when
        calculating the length.</p> 

        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
print(len(w))
              `}
            </code>
          </pre>
        </div> 
        <p className='mb-4'>14</p>


        <p className='mb-4'>100</p>
        <p className='mb-4 mt-4'>One special type of string is the empty string, which has length zero.</p>
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
shortest_string = ""
print(type(shortest_string))
print(len(shortest_string))
              `}
            </code>
          </pre>
        </div> 
        <p className=''>class str</p>
         <p className='mb-4'>0</p>
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
my_number = "1.12321"
print(my_number)
print(type(my_number))
              `}
            </code>
          </pre>
        </div> 
        <p>1.12321</p>
        <p className='mb-4'>class 'str'</p>

        <p className='mt-4 mb-4'>If we have a string that is convertible to a float, we can use float().</p>
        <p className='mb-4'>This won't always work! For instance, we can convert "10.43430" and "3" to floats, but we cannot convert "Hello, Python!" to a float.</p>

             <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
also_my_number = float(my_number)
print(also_my_number)
print(type(also_my_number))
              `}
            </code>
          </pre>
        </div> 

        <p>1.12321</p> 
        <p className='mb-4'>class 'float</p> 
        <p className='mb-4'>Just like you can add two numbers (floats or integers), you can also add two strings. It results in a longer string that combines the two original strings by concatenating them.</p>     
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
new_string = "abc" + "def"
print(new_string)
print(type(new_string))
              `}
            </code>
          </pre>
        </div> 
        <p className='mb-4'>abcdef</p>
        <p className='mb-4'>class 'str'</p>

<p className='mb-4'>Note that it's not possible to do subtraction or division with two strings. You also can't multiply two strings, but you can multiply a string by an integer. This again results in a string that's just the original string concatenated with itself a specified number of times.</p>

<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`

newest_string = "abc" * 3
print(newest_string)
print(type(newest_string))


              `}
            </code>
          </pre>
        </div>
        <p>abcabcabc</p> 
        <p className='mb-4'>class 'str'</p>

        <p className='mb -4'>Note that you cannot multiply a string by a float! Trying to do so will return an error.</p>

      
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`

will_not_work = "abc" * 3.
              `}
            </code>
          </pre>
        </div>    
        <p className='mb-4'>---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
/tmp/ipykernel_19/2386798361.py in module 1 will_not_work = "abc" * 3.

TypeError: can't multiply sequence by non-int of type 'float'</p>

<p className='mb-4'>In the error, the "sequence" is the string "abc", and the "non-int of type 'float'" is the float (3.). So, the error message can be reworded to say "can't multiply string by float".</p>

 </section>

     


    </div>
    <Footer />
    </>
  );
};

export default ContentProg3;
