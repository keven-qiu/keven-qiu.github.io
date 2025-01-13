import React from 'react';

const CourseNotes = () => {
    return (
        <>
            <h2>Personal Course Notes</h2>
            <h3>General Math/Statistics</h3>
            <ul>
                <li><a href={process.env.PUBLIC_URL + '/notes/MATH235.pdf'}>MATH 235: Linear Algebra 2 for Honours Mathematics</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/MATH237.pdf'}>MATH 237: Calculus 3 for Honours Mathematics</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/MATH239.pdf'}>MATH 239: Introduction to Combinatorics</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/STAT231.pdf'}>STAT 231: Statistics</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/PMATH336.pdf'}>PMATH 336: Introduction to Group Theory</a></li>
            </ul>
            <h3>Computer Science</h3>
            <ul>
                <li><a href={process.env.PUBLIC_URL + '/notes/CS341.pdf'}>CS 341: Algorithms</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CS350.pdf'}>CS 350: Operating Systems</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CS365.pdf'}>CS 365: Models of Computation (Advanced)</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CS370.pdf'}>CS 370: Numerical Computation</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CS466_666.pdf'}>CS 466/666: Algorithm Design and Analysis</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CS480_680.pdf'}>CS 480/680: Introduction to Machine Learning</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CS487_687.pdf'}>CS 480/680: Introduction to Symbolic Computation</a></li>
            </ul>
            <h3>Combinatorics & Optimization</h3>
            <ul>
                <li><a href={process.env.PUBLIC_URL + '/notes/CO250.pdf'}>CO 250: Introduction to Optimization</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CO330.pdf'}>CO 330: Combinatorial Enumeration</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CO342.pdf'}>CO 342: Introduction to Graph Theory</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CO351.pdf'}>CO 351: Network Flow Theory</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CO444_644.pdf'}>CO 444/644: Algebraic Graph Theory</a></li>
                <li><a href={process.env.PUBLIC_URL + '/notes/CO450_650.pdf'}>CO 450/650: Combinatorial Optimization</a></li>
            </ul>
            <h3>Electives</h3>
            <ul>
                <li><a href={process.env.PUBLIC_URL + '/notes/ECON102.pdf'}>ECON 102: Introduction to Macroeconomics</a></li>
            </ul>
        </>
    )
}

export default CourseNotes;
