import { connect } from 'react-redux';
import Counter from './Counter';



// map Redux state to component Props 

function mapStateToProps(state) {
    return  {
        countValue : state.count
    };
}


// map Redux Action to component Props


var increaseAction = { type :'increase'};
var decreseAction  = { type :'decrease' };

function mapDispatchToProps(dispatch) {

    return  { 
        increaseCount : function() {
            dispatch(increaseAction);
        },
        decreaseCount: function() {
            dispatch(decreseAction);
        }
    };
}

// HOC 

var connectedComponent  = connect(mapStateToProps,
    mapDispatchToProps)(Counter);

export default connectedComponent;

/*
End Result look slike this 

<Connect>
  <Counter increaseCount={increaseCount}
           decreaseCount={decreaseCount}
           countValue={countValue}/>
</Connect>



*/

