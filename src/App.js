import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items =[
    {
        title: "Title One",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        title: "Title two",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Title three",
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    }
]


const options =[
    {
        label: "The Colour Red",
        value: "red"
    },
    {
        label: "The Colour Blue",
        value: "blue"
    },
    {
        label: "The Colour Green",
        value: "green"
    }
]

export default () => {

    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                label="Select a colour"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}