import React, { useEffect, useState } from 'react';
import './Tab.scss';


export default function Tab (props) {

        const [tabActive, setTabActive] = useState(0);

        useEffect(() => console.log('Se ha cargado el componente'),[]);
        useEffect(() => console.log('El tab ' + tabActive + ' está activo'),[tabActive]);

        return (
            <div className="c-tab">
                {props.tabs.map((tab, index) => 
                    <div key={index}>
                        <h3 className={tabActive === index ? 'c-tab__tab c-tab__tab--active': 'c-tab__tab'} onClick={() => setTabActive(index)}>{tab.title}</h3>
                        {tabActive === index && <p>{tab.content}</p>}
                    </div>
                )}
            </div>
                
        )
}