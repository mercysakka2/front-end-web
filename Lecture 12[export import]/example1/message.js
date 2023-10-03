// arrow function
const message = () => {
  const header = "<div style='text-align: center;'><h1>Personal Information</h1></div>";
  const name = "Mercy Yuliana Sakka";
  const age = 20;
  const status = "Student";
  const major = "Informatic";
  const faculty = "Computer Science";
  const address = "Jasmine 1 Dormitory";
  const interest = "AI";
  return header +' <hr> <strong> Name: </strong>' + name + ' <br> <strong>Age: </strong>' + age + ' <br> <strong> Status: </strong>' + status + ' <br> <strong>Major: </strong>' + major + ' <br> <strong>Faculty: </strong>' + faculty + ' <br> <strong>Addres: </strong>' + address + '<br> <strong>Interest: </strong>' + interest;
};

export default message;