import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});
        

class HomeFragment extends Component {
    constructor() {
        super();
        this.state = {
            render: '',
            open: false,
            home: true,
        }
        // this.handleHotelClick = this.handleHotelClick.bind(this);    
    }
     
    render() {
        
       
       
        return (
            //className={classes.root}
            <div style={{marginLeft:"200px", marginTop:"120px"}}>
                <h1>
                    Hello Dashboard
                </h1>
            </div>

        );
      
        
    
    }
   
}
export default withStyles(useStyles)(HomeFragment)
