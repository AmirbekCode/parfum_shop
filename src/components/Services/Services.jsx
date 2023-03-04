import React from 'react';
import './services.css'
import serviceData from '../../assets/data/serviceData'
function Services(props) {
    return ( 
    <div className='Services'>
        {
            serviceData.map((item,index)=>(
                <div className="service-item" style={{ background:`${item.bg}`}}>
                    <span>
                        <i className={item.icon}></i>
                    </span>
                    <div>
                        <h3 className='Servicetitle'>{item.title}</h3>
                        <p className="Servicesubtitle">{item.subtitle}</p>
                    </div>
                </div>
            ))
        }
    </div>
    
    );
}

export default Services;