import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContentProg = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      {/* Code Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex item-center justify-center">Arithmetic and Variables</h2>
        <p className="mb-8 flex item-center justify-center">Make calculations, and define and modify variables.</p>
        <p className="mb-4 ">Welcome to the Intro to Programming course! This course 
        is for you if you have never written a single line of code, and you are interested 
        in learning data science and machine learning. (If you do have programming experience 
        and are just new to the Python language, the Python course is a better fit to get started.)</p>
        <p className="mb-4">In this course, you will learn how to use code to get a 
        computer to perform certain tasks for you. Python is one of the most popular 
        programming languages for data science, and it's the language you'll learn in 
        this course. Once you complete this course, you'll be fully prepared to progress 
        to the Python course, followed by the Intro to Machine Learning course.</p>
        <p className="mb-8">In this tutorial, you'll see several examples of Python code. 
        You'll get a chance to write your own code in the exercise. (If you'd like to 
        preview the exercise, feel free to take a look now. We also provide a link to the 
        exercise at the end of this tutorial.)</p>

        <h2 className="text-xl font-bold mb-4 flex item-center justify-center">Printing</h2>
        <p className="mb-4">One of the simplest (and most important!) tasks you can ask a 
        computer to do is to print a message.</p>
        <p className="mb-4">In Python, we ask a computer to print a message for us by writing 
        print() and putting the message inside the parentheses and enclosed in quotation marks. 
        Below, we ask the computer to print the message Hello, world!.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
print("Hello, world!")
              `}
            </code>
          </pre>
        </div>
        <p>Hello, world!</p>

        <p className='mt-8 mb-4'>The code is inside the box (known as a code cell), and the computer's response (called the output 
            of the code) is shown below the box. As you can see, the computer printed the message that we wanted.</p>
        <h2 className="text-xl font-bold mb-4 flex item-center justify-center">Arithmetic</h2>    
        <p className='mb-4'>We can also print the value of some arithmetic operation (such as addition, subtraction, multiplication, 
            or division).</p>
        <p className='mb-4'>For instance, in the next code cell, the computer adds 2 to 1 and then prints the result, which is 3. 
            Note that unlike when we were simply printing text, we don't use any quotation marks.</p>    
            <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
print(1 + 2)
              `}
            </code>
          </pre>
        </div>
        <p>3</p>
        <p className='mt-4 mb4'>We can also do subtraction in python. The next code cell subtracts 5 from 9 and prints 
        the result, which is 4.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
print(9 - 5)
              `}
            </code>
          </pre>
        </div>
        <p>4</p>

        <p className='mt-4'>You can actually do a lot of calculations with python! See the table below for some examples.</p>
        <table class="table-auto border border-collapse">
  <thead>
    <tr>
      <th class="border px-4 py-2">Operation</th>
      <th class="border px-4 py-2">Symbol</th>
      <th class="border px-4 py-2">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">Addition</td>
      <td class="border px-4 py-2">+</td>
      <td class="border px-4 py-2">1 + 2 = 3</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">Subtraction</td>
      <td class="border px-4 py-2">-</td>
      <td class="border px-4 py-2">5 - 4 = 1</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">Multiplication</td>
      <td class="border px-4 py-2">*</td>
      <td class="border px-4 py-2">2 * 4 = 8</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">Division</td>
      <td class="border px-4 py-2">/</td>
      <td class="border px-4 py-2">6 / 3 = 2</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">Exponent</td>
      <td class="border px-4 py-2">**</td>
      <td class="border px-4 py-2">3 ** 2 = 9</td>
    </tr>
  </tbody>
</table>

<p className='mb-4 mt-4'>You can control the order of operations in long calculations with parentheses.</p>
<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
print(((1 + 3) * (9 - 2) / 2) ** 2)
              `}
            </code>
          </pre>
        </div>
        <p>196.0</p>

        <p className='mb-4 mt-4'>In general, Python follows the PEMDAS rule when deciding the order of operations.</p>
        <h2 className="text-xl font-bold mb-4 flex item-center justify-center">Comments</h2>
        <p>We use comments to annotate what code is doing. They help other people to understand your code, and they can 
            also be helpful if you haven't looked at your own code in a while. So far, the code that we have written is 
            very short, but annotations become more important when you have written a lot of code.</p>
        <p>For instance, in the next code cell, we multiply 3 by 2. We also add a comment (# Multiply 3 by 2) above the 
            code to describe what the code is doing.</p>    

            <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
# Multiply 3 by 2
print(3 * 2)
              `}
            </code>
          </pre>
        </div>
        <p>6</p>

        <p className='mb-4 mt-4'>To indicate to Python that a line is comment (and not Python code), you need to write a pound sign (#) as 
            the very first character.</p>
        <p className='mb-4'>Once Python sees the pound sign and recognizes that the line is a comment, it is completely ignored by the 
            computer. This is important, because just like English or Hindi (or any other language!), Python is a 
            language with very strict rules that need to be followed. Python is stricter than a human listener, though, 
            and will just error if it can't understand the code.</p>
        <p className='mb-4'>We can see an example of this, in the code cell below. Python errors if we remove the pound sign, because the text in the 
            comment is not valid Python code, so it can't be interpreted properly</p>  

         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
Multiply 3 by 2
              `}
            </code>
          </pre>
        </div>   
        <p>File "/tmp/ipykernel_18/3750420471.py", line 1 <br></br>
    Multiply 3 by 2<br></br>
             ^
SyntaxError: invalid syntax</p>    

<h2 className="text-xl font-bold mb-4 flex item-center justify-center mb-4 mt-4">Variables</h2>
<p className='mb-4'>So far, you have used code to make a calculation and print the result, and the result 
    isn't saved anywhere. However, you can imagine that you might want to save the result 
    to work with it later. For this, you'll need to use variables.</p>
<h2 className="text-xl font-bold mb-4 flex item-center justify-center">Creating variables</h2>  
<p className='mb-4'>The next code cell creates a variable named test_var and assigns it the value that we get when we add 5 to 4.</p> 
<p>We then print the value that is assigned to the variable, which is 9.</p> 

<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
# Create a variable called test_var and give it a value of 4+5
test_var = 4 + 5

# Print the value of test_var
print(test_var)
              `}
            </code>
          </pre>
        </div> 
        <>9</>  

        <p className='mb-4 mt-8'>In general, to work with a variable, you need to begin by selecting the name you
             want to use. Variable names are ideally short and descriptive. They also need to 
             satisfy several requirements:</p>
        <ul>
            <il>
            They can't have spaces (e.g., test var is not allowed)
            </il>
            <il>
            They can only include letters, numbers, and underscores (e.g., test_var! is not allowed)
            </il>
            <il>
            They have to start with a letter or underscore (e.g., 1_var is not allowed)
            </il>
        
        </ul>   

        <p className='mb-4 mt-4'>Then, to create the variable, you need to use = to assign the value 
        that you want it to have.</p>  
        <p className='mb-4'>You can always take a look at the value assigned to the variable by using 
        print() and putting the name of the variable in parentheses.</p>
        <p className='mb-4'>Over time, you'll learn how to select good names for Python variables. It's completely fine 
            for it to feel uncomfortable now, and the best way to learn is just by viewing a lot of Python code!</p>
        <h2 className='mb-4 mt-8'>Manipulating variables</h2>    
        <p className='mb-4'>You can always change the value assigned to a variable by overriding the previous value.</p>
        <p className='mb-4'>In the code cell below, we change the value of my_var from 3 to 100.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
# Set the value of a new variable to 3
my_var = 3

# Print the value assigned to my_var
print(my_var)

# Change the value of the variable to 100
my_var = 100

# Print the new value assigned to my_var
print(my_var)
              `}
            </code>
          </pre>
        </div> 
        <p className='mb-4'>3</p>
        <p className='mb-4'>100</p>
        <p className='mb-4 mt-4'>Note that in general, whenever you define a variable in a code cell, all of the 
        code cells that follow also have access to the variable. For instance, we use the next code cell to access
         the values of my_var (from the code cell above) and test_var (from earlier in this tutorial).</p>
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
print(my_var)
print(test_var)
              `}
            </code>
          </pre>
        </div> 
        <p className='mb-4'>100</p>
        <p className='mb-4'>9</p>

        <p className='mb-4'>The next code cell tells Python to increase the current value of my_var by 3.</p>
        <p className='mb4'>To do this, we still need to use my_var = like before. And also just like before, the new value we
             want to assign to the variable is to the right of the = sign.</p>

             <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
# Increase the value by 3
my_var = my_var + 3

# Print the value assigned to my_var
print(my_var)
              `}
            </code>
          </pre>
        </div> 

        <p className='mb-4'>103</p>  

        <h2 className="text-xl font-bold mb-4">Using multiple variables</h2>
        <p className='mb-4'>It's common for code to use multiple variables. This is especially
             useful when we have to do a long calculation with multiple inputs.</p>   
        <p className='mb-4'>In the next code cell, we calculate the number of seconds in four years.
         This calculation uses five inputs.</p>     
         <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`
# Create variables
num_years = 4
days_per_year = 365 
hours_per_day = 24
mins_per_hour = 60
secs_per_min = 60

# Calculate number of seconds in four years
total_secs = secs_per_min * mins_per_hour * hours_per_day * days_per_year * num_years
print(total_secs)
              `}
            </code>
          </pre>
        </div> 
        <p className='mb-4'>126144000</p>
        <p className='mb-4'>As calculated above, there are 126144000 seconds in four years.

Note it is possible to do this calculation without variables as just 60 * 60 * 24 * 365 * 4, 
but it is much harder to check that the calculation without variables does not have some error, 
because it is not as readable. When we use variables (such as num_years, days_per_year, etc), we 
can better keep track of each part of the calculation and more easily check for and correct any mistakes.</p>

<p className='mb-4'>Note that it is particularly useful to use variables when the values of the inputs can change.
For instance, say we want to slightly improve our estimate by updating the value of the number of days in a year 
from 365 to 365.25, to account for leap years. Then we can change the value assigned to days_per_year without 
changing any of the other variables and redo the calculation.</p>

<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`

# Update to include leap years
days_per_year = 365.25

# Calculate number of seconds in four years
total_secs = secs_per_min * mins_per_hour * hours_per_day * days_per_year * num_years
print(total_secs)


              `}
            </code>
          </pre>
        </div>
        <p className='mb-4'>126230400.0</p> 

        <p className='mb -4'>Note: You might have noticed the .0 added at the end of the number, which might
        look unnecessary. This is caused by the fact that in the second calculation, we used a number with a 
        fractional part (365.25), whereas the first calculation multipled just numbers with no fractional part.
        You'll learn more about this in Lesson 3, when we cover data types.</p>

        <h2 className="text-xl font-bold mb-4">Debugging</h2>
        <p className='mb-4'>One common error when working with variables is to accidentally introduce typos. For instance, if
            we spell hours_per_day as hours_per_dy, Python will error with message NameError: name 'hours_per_dy' 
            is not defined.</p>

            <div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`

print(hours_per_dy)
              `}
            </code>
          </pre>
        </div>    
        <p className='mb-4'>---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
/tmp/ipykernel_18/142450907.py in module 1 print(hours_per_dy)

NameError: name 'hours_per_dy' is not defined</p>

<p className='mb-4'>When you see NameError like this, it's an indication that you should check how you have 
spelled the variable that it references as "not defined". Then, to fix the error, you need only correct the 
spelling.</p>

<div className="bg-gray-100 p-4 rounded-lg">
                  {/* Code Block */}
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="language-javascript">
              {`

print(hours_per_day)
              `}
            </code>
          </pre>
        </div>    
        <p className='mb-4'>24</p>
      </section>

     


    </div>
    <Footer />
    </>
  );
};

export default ContentProg;
