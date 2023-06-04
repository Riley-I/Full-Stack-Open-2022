
const Header = (props) =>{
  // console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) =>{
  console.log(props)
  return(
    <div>
       <p><strong>Course Name:</strong> {props.courseName} <strong>Number of Exercises:</strong> {props.numberExercises}</p>
    </div>
  )
}

const Content = (courses) =>{
  // console.log(courses)

  return(
    <div>
      <Part courseName = {courses.name0} numberExercises = {courses.exercises0}/>
      <Part courseName = {courses.name1} numberExercises = {courses.exercises1}/>
      <Part courseName = {courses.name2} numberExercises = {courses.exercises2}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courses = [
    { name: part1, exercises: exercises1},
    { name: part2, exercises: exercises2},
    { name: part3, exercises: exercises3},
  ]

  return (
    <div>
        <Header course={course} />
        <Content 
            name0 = {courses[0].name} exercises0 = {courses[0].exercises}
            name1 = {courses[1].name} exercises1 = {courses[1].exercises}
            name2 = {courses[2].name} exercises2 = {courses[2].exercises}
        />
    </div>
  )
}

export default App