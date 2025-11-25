function processStudents(students) {

  // 1. Filter students scoring above 60
  const filtered = students.filter(student => student.marks > 60);

  // 2. Sort the filtered students in descending order of marks
  const sorted = filtered.sort((a, b) => b.marks - a.marks);

  // 3. Map to extract only names
  const names = sorted.map(student => student.name);

  // 4. Return the result
  return names;
}
