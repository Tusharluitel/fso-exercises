const Header = ({ course }) => {
  return (
    <>
      <h1>Course</h1>
    </>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <>
      {part} {exercises}
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <div>
            <Part key={part.name} part={part.name} exercises={part.exercises} />
          </div>
        );
      })}
    </div>
  );
};

const Total = ({ total }) => {
  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
