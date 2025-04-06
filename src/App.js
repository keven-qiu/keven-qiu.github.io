import React from 'react';
import './App.css';
import Research from './Research';
import Presentation from './Presentation';
import CourseNotes from './CourseNotes';

function App() {
  return (
    <div className="App">
    <header>
        <title>Keven Qiu</title>
    </header>
    <body>
        <div className="intro">
            <h1>Keven Qiu</h1>
            <a href="https://www.linkedin.com/in/keven-qiu/">LinkedIn</a> <a href="https://github.com/keven-qiu">GitHub</a>
            <p>
                I am a recent graduate double majoring in Computer Science and Combinatorics & Optimization, from the University of Waterloo. I will be joining the Algorithmics group at the University of Alberta for Masters Fall 2025, cosupervised by <a href="https://webdocs.cs.ualberta.ca/~mreza/">Mohammad R. Salavatipour</a> and <a href="https://friggstad.github.io/">Zachary Friggstad</a>.
                <br />
                <br />
                My main academic interests are in algorithms, discrete mathematics, and optimization. I am focused on the design and analysis of approximation algorithms.
                <br />
                <br />
                Email: keven.qiu@uwaterloo.ca
            </p>
        </div>
        <div className="work">
            <h2>Previous Experience</h2>
            <ul>
                <li>Undergraduate Research Assistant at University of Waterloo, Department of Combinatorics & Optimization, under Dr. Joseph Cheriyan. <a href="https://github.com/keven-qiu/PrimalDualSmallCuts">[Github]</a></li>
                <li>Software Development Intern at <a href="https://www.calian.com/service-lines/advanced-technologies/">Calian, Advanced Technologies</a> (Spring 2024)</li>
                <li>Software Engineering Intern at <a href="https://www.augmenta.ai/">Augmenta AI</a> (Fall 2023)</li>
                <li>Undergraduate Research Assistant at University of Calgary, <a href="https://mccaig.ucalgary.ca/">McCaig Institute of Bone and Joint Health</a>, under Dr. Sarah Manske (Winter 2023)</li>
                <li>Software Development Intern at <a href="https://www.calian.com/service-lines/advanced-technologies/">Calian, Advanced Technologies</a> [Inmarsat GX6] (Spring 2022)</li>
                <li>Software Development Intern at <a href="https://www.calian.com/service-lines/advanced-technologies/">Calian, Advanced Technologies</a> [Inmarsat GX5] (Fall 2021)</li>
                <li>Mathematics Tutor at <a href="https://www.kumon.com/ca-en/">Kumon, North America</a></li>
            </ul>
        </div>
        <div className="research">
            <Research />
        </div>
        <div className="presentations">
            <Presentation />
        </div>
        <div className="notes">
            <CourseNotes />
        </div>
    </body>
    </div>
  );
}

export default App;
