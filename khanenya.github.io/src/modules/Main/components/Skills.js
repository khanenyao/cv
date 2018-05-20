import React from 'react';

const Skills = ({ children }) => (
    <div>
        {React.Children.map(children ,(skillCategory, index) => React.cloneElement(skillCategory, { key: index }))}
    </div>
);

export default Skills;