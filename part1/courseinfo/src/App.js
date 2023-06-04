
const Header = (props) =>{
  // console.log(props)
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) =>{
  // console.log(props)
  return(
    <div>
       <p><strong>Course Name:</strong> {props.courseName} <strong>Number of Exercises:</strong> {props.numberExercises}</p>
    </div>
  )
}

const Content = (props) =>{
  // console.log(props)
  return(
    <div>
      <Part courseName = {props.parts[0].name} numberExercises = {props.parts[0].exercises}/>
      <Part courseName = {props.parts[1].name} numberExercises = {props.parts[1].exercises}/>
      <Part courseName = {props.parts[2].name} numberExercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) =>{
  // console.log(props.parts[0])

  let courseOneTotal = props.parts[0].exercises
  let courseTwoTotal = props.parts[1].exercises
  let courseThreeTotal = props.parts[2].exercises

  let totalExercises = courseOneTotal + courseTwoTotal + courseThreeTotal

  return(
    <div>
      <h2>Total Exercises</h2>
      <p>{totalExercises}</p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  // console.log(course.parts[0].name)
  // console.log(course.parts)

  return (
    <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

export default App