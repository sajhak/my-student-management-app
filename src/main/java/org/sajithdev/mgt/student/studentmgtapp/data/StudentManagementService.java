package org.sajithdev.mgt.student.studentmgtapp.data;

import java.util.ArrayList;
import java.util.List;

import org.sajithdev.mgt.student.studentmgtapp.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentManagementService {

	@Autowired
	private StudentRepository studentRepository;
	

	public void addStudent(Student student) {
		studentRepository.save(student);
	}
	
	public List<Student> getAllStudents() {
		List<Student> studentList = new ArrayList<>();
		studentRepository.findAll().forEach(studentList::add);
		return studentList;
	}
	
	public Student getStudent(Integer id) {
		return studentRepository.findOne(id);
	}
	
	
	public void updateStudent(Student student) {
		studentRepository.save(student);
	}
	
	public void deleteStudent(Integer id) {
		studentRepository.delete(id);
	}
	
	
}
