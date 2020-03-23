/**
 * @author Uvindu Sanjana
 */

import {useSpring} from "react-spring";

const Bounce = (open, duration, origin) => {

    const {x} = useSpring({from: {x: 0}, x: open ? 1 : 0, config: {duration: duration}});

    return {
        transformOrigin: origin,
        transform: x
            .interpolate({
                range: [0, 0.45, 1],
                output: [1, 1.1, 1]
            })
            .interpolate(x => `scale(${x})`)
    };

};

export default Bounce;