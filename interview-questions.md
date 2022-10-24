# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?
 
Your answer: You can just add a foriegn key by generating another migration. And when that is migrated, you would go into the new migration file and there you can add a new column. The name of the forieng key can be cohort_id and it will be apart of the Student model.

Researched answer: After you forgot, you can actually use $rails db:rollback to go back and undo the most recent one that you just did, and redo it again but this time adding cohort_id.

2. Which RESTful routes must always be passed params? Why?

Your answer: I think the restful routes that must always have params are the ones that deal with specific data such as show, edit, update, and destroy. I believe it is this because all of these need a specific param to use .find in order locate the specific data in order to show it, edit it, update it, and delete it. 

Researched answer: Get, put, and delete 

3. Name three rails generator commands. What is created by each?

Your answer: 
rails g rspec:install - this installs spec files
rails g model - this installs the model with whatever names you want to name and the data type for example: rails g model Food name:string price:integer
rails g controller - generates the controller example rails g controller Food


Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
(index - gets all of the data inside of the database)

action: "POST" location: /students
(create - allows user to submit a new object in the database)

action: "GET" location: /students/new
(new - allows user to add information but it wont be submitted till you use create)

action: "GET" location: /students/2
(show - renders a specific data from the database that you want)

action: "GET" location: /students/2/edit
(edit - this edits pre-existing data)

action: "PATCH" location: /students/2
(update - submits the edit to the pre-existing data)

action: "DELETE" location: /students/2
(destroy - deletes specific data)

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

Has a model for To do list with the following information: title and content and due date

As a user, I can view the homepage with a title and under it will show "log in" or "create an account"
As a user, I can see a list of all the items of my todo list from the ones that need to be completed first sorted by the closest date.
As a user, I can click on each item and be taken to the content describing what needs to be done. 
As a user, I can return to the home page.
As a user, I can click on a done button and it will mark it as completed.
As a user, I can click on an edit button that will edit an item on the to-do list as well as its description.
As a user, I can delete an item. 
As a user, I can see a motivational qoute 
As a user, I can click on the next button to get the next qoute.
As a user, I can log out with all information saved.
