import React from 'react';

const Presentation = () => {
    return (
        <>
            <h2>Presentations</h2>
            <ul>
                <li>End of Undergraduate Research Term at UCalgary - BMD Measurement with Cone Beam, Weight-Bearing CT and Reconstruction Algorithms. <a href={process.env.PUBLIC_URL + '/presentations/End of Term Presentation.pptx'}>[slides]</a></li>
                <li>Largest Eigenvalue of Sparase Random Graphs <a href={process.env.PUBLIC_URL + '/presentations/LargestEigenvalue.pdf'}>[slides]</a></li>
                <li>Augmenta Reading Group - Combinatorial Optimization.</li>
            </ul>
        </>
    )
}

export default Presentation;
