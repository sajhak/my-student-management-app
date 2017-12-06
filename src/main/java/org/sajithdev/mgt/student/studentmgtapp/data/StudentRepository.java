package org.sajithdev.mgt.student.studentmgtapp.data;

import org.sajithdev.mgt.student.studentmgtapp.model.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Integer> {

}
