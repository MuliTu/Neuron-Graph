export const createEdge = (parents, parentProp, children, childrenProp) => {
  const connections = [];
  for (const par of parents) {
    for (const chi of children) {
      if (
        par[parentProp].some(
          prop => prop.toString() === chi[childrenProp].toString()
        )
      ) {
        connections.push({
          from: par.id,
          to: chi.id
        });
      }
    }
  }
  return connections;
};

export const indexData = (teachers, students, curses) => {
  const list = [...teachers, ...students, ...curses];
  const temp = list.map((value, idx) => ({ id: idx, ...value }));
  const newTeachers = temp
    .slice(0, teachers.length)
    .map(data => ({
      ...data,
      label: data.full_name,
      color: "red",
      shape: "dot",
      size: 13,
      borderWidth: 2.5,
      borderWidthSelected: 20
    }));
  const newStudents = temp
    .slice(teachers.length, students.length)
    .map(data => ({
      ...data,
      label: data.first_name + " " + data.last_name,
      color: "orange",
      shape: "dot",
      size: 4,
      borderWidth: 2.5,
      borderWidthSelected: 20
    }));
  const newCurses = temp
    .slice(students.length + teachers.length, temp.length + 1)
    .map(data => ({
      ...data,
      label: "Curses",
      color: "green",
      shape: "dot",
      size: 13,
      borderWidth: 2.5,
      borderWidthSelected: 20
    }));
  console.log(newCurses);
  return [newTeachers, newStudents, newCurses];
};
