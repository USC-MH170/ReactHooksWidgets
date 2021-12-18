//The {useState} below is the hook from the react library. It gives us access to state in a function component
import React, {useState} from "react";

/* 
Conversion from Classbased state to hook state

Initialization:
state = {activeIndex: 0}   |   useState(0)
Reference:
this.state.activeIndex    |    {activeIndex}
Updates:
this.setState({activeIndex: 10})    |    setActiveIndex(10)

*/

const Accordion = ({items}) => {

    //first value is the state, second value is the new state value, the value in useState() is the initial value.
    const [activeIndex, setActiveIndex] = useState(null)

    //when triggered sets the activeIndex to the index value
    const onTitleClick = (index) => {
        setActiveIndex(index);
    }
    
    //returns the contents of the accordion which an event listener attached to the title. Title triggeres the onTitleClick() function.
    const renderItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';



        return ( 
        <React.Fragment key={item.title}>
            <div 
            className={`title ${active}`}
            onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    )
})
    //renders the accordion container and its contents
    return (
    <div className="ui styled accordion">
        {renderItems} 
    </div>
    )
}

export default Accordion;