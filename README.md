Sample Student Management Application
=====================================

**
Technologies Used : Spring Boot, Spring Data JPA, Apache Derby in-memory DB, Angular2
**

**
Functionalities provided
**
1. Add a new Student
2. Update details of a Student
3. Delete a Student
4. Display all the Students

**
How to build, setup and run
**

1. $ git clone https://github.com/sajhak/my-student-management-app.git
2. $ cd my-student-management-app
3. $ mvn clean install
4. $ java -jar target/studentmgtapp-0.0.1-SNAPSHOT.jar

Now the server is up and running in port 8080. Next, 

5. $ cd my-student-management-app/student-mgt-ui
6. $ npm start


***********
Student API
***********
- createStudent() POST 
      - sample request 
{
"firstName":"Sajith",
"lastName":"Kariyawasam",
"address":"Colombo Pannipitiya",
"email":"sajhak@gmail.com",
"telephone":"987798977",
"notes":"I like to learn Spring Boot and Hibernate"
}

- getAllStudents  GET

- getStudent GET

- deleteStudent DELETE

}
