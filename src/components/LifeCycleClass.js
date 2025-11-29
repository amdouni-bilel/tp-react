import React from "react";

class LifeCycleClass extends React.Component {

  
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called');
        return null;
    }
    componentDidMount() {
        console.log('componentDidMount called');
    }

    render() {
        console.log('render called');
        return (
            <div>
                <h2>LifeCycleClass Component</h2>
            </div>
        );
    }
      constructor(props) {
        super(props);
        console.log('Constructor called');
        this.state = {
            count: 0
        };
    }
}
export default LifeCycleClass;
