import React, {useState} from 'react'
import {Transition, animated} from 'react-spring/renderprops'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'


const Animation = () => {

    const [showComp3, setShowComp3] = useState(false);
    return (
        <div className="animations">
            <Component1 />
            <Component2 toggle={showComp3} setToggle={setShowComp3} />
            <Transition
                items={showComp3}
                from={{opacity: 0}}
                enter={{opacity: 1}}
                leave={{opacity: 0}}
            >
                {showComp3 => showComp3 && (
                    props => (
                        <animated.div style={props}>
                            <Component3 />
                        </animated.div>
                    )
                )}
            </Transition>
        </div>
    )
}

export default Animation
