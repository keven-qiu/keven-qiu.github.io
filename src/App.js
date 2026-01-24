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
            <p>
                I am a first year CS MSc student in the Algorithmics group at the University of Alberta, where I am cosupervised by <a href="https://webdocs.cs.ualberta.ca/~mreza/">Mohammad R. Salavatipour</a> and <a href="https://friggstad.github.io/">Zachary Friggstad</a>. Previously, I was an undergraduate at the University of Waterloo, double majoring in Computer Science and Combinatorics & Optimization. I was fortunate enough to be supervised by <a href="https://www.math.uwaterloo.ca/~jcheriya/">Joseph Cheriyan</a> during my time there.
                <br />
                <br />
                My research involves the design and analysis of approximation algorithms for NP-hard combinatorial problems.
                <br />
                <br />
                Email: [first] [dot] [last] [at] ualberta [dot] ca
            </p>
        </div>
        <div className="work">
            <h2>Previous Experience</h2>
            <ul>
                <li>Graduate Teaching Assistant at Department of Computing Science, University of Alberta.</li>
                <li>Undergraduate Research Assistant at Department of Combinatorics & Optimization, University of Waterloo, advised by <a href="https://www.math.uwaterloo.ca/~jcheriya/">Joseph Cheriyan</a>.</li>
                <li>Software Engineering Intern at <a href="https://www.augmenta.ai/">Augmenta AI</a> (Fall 2023).</li>
                <li>Undergraduate Research Assistant at McCaig Institute of Bone and Joint Health, University of Calgary, advised by <a href="https://cumming.ucalgary.ca/departments/radiology/profiles/sarah-manske">Sarah Manske</a> (Winter 2023).</li>
                <li>Software Development Intern at <a href="https://www.calian.com/service-lines/advanced-technologies/">Calian, Advanced Technologies</a> (Fall 2021, Spring 2022, Spring 2024).</li>
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
        <div>
            <a href="https://www.linkedin.com/in/keven-qiu/" class="contacts">LinkedIn</a> <a href="https://github.com/keven-qiu" class="contacts">GitHub</a>
        </div>
    </body>
    </div>
  );
}

export default App;
