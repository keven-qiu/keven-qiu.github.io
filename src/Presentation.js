import React from 'react';

const Presentation = () => {
    return (
        <>
            <h2>Presentations</h2>
            <ul>
                <li>Augmenta Reading Group - Combinatorial Optimization.</li>
                <li>End of Undergraduate Research Term at UCalgary - BMD Measurement with Cone Beam, Weight-Bearing CT and Reconstruction Algorithms. <a href={process.env.PUBLIC_URL + '/presentations/End of Term Presentation.pptx'}>[PPTX]</a></li>
            </ul>
        </>
    )
}

export default Presentation;
