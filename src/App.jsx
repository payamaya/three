// import './App.css'
// import Ball from './components/Ball'
// import Chair from './components/Chair'
import Test from './components/Test'
// import Works from './components/Works'
import './App.css'

import Chair from './components/Chair'
function App() {
  return (
    <div className='canvasWrapper'>
      {/* <Works />
        <Ball /> */}

      <Test />
      <section className='wrapper'>
        <div className='left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad,
          aspernatur ut ea placeat obcaecati eveniet cum incidunt quidem alias
          voluptas facilis ratione laborum, iure unde veritatis cumque
          voluptatem tenetur.
        </div>
        <div className='right'>
          <Chair />
        </div>
      </section>

      {/* <Chair /> */}
    </div>
  )
}
export default App
