function processStudents(students) {

  const filtered = students.filter(student => student.marks > 60);

  const sorted = filtered.sort((a, b) => b.marks - a.marks);

  const names = sorted.map(student => student.name);

  return names;
}

const data = [
  { name: "Harsha", marks: 58 },
  { name: "Bharani", marks: 85 },
  { name: "Chams", marks: 92 },
  { name: "Durga", marks: 45 },
  { name: "Esha", marks: 76 },
  { name: "Funny", marks: 63 },
  { name: "Gunny", marks: 89 },
  { name: "Harshi", marks: 95 },
  { name: "Ishu", marks: 54 },
  { name: "Jhanvi", marks: 79 },
  { name: "Kiyara", marks: 67 },
  { name: "Laxmi", marks: 88 },
  { name: "Mahi", marks: 91 },
  { name: "Naga", marks: 72 },
  { name: "Olive", marks: 82 }
];

console.log(processStudents(data));
