package org.sajithdev.mgt.student.studentmgtapp.controller;

import java.util.List;

import org.sajithdev.mgt.student.studentmgtapp.data.StudentManagementService;
import org.sajithdev.mgt.student.studentmgtapp.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

	@Autowired
	private StudentManagementService studentManagementService;
	
	@RequestMapping(value="/students", method=RequestMethod.GET)
	public List<Student> getAllStudents() {
		return studentManagementService.getAllStudents();
	}
	
	@RequestMapping(value="/students", method=RequestMethod.POST)
	public void addStudent(@RequestBody Student student) {		
		studentManagementService.addStudent(student);		
	}
	
	
}
