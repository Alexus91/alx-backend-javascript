export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    // the studtents  by city and return the result
    return students.filter((student) => student.location === city);
  }
  // If students is not an array
  return [];
}
