import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../commen/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

class ProfileStatus extends React.Componentt{

    state = {
        editMode: false,
        status:this.props.status

    }

    activateEditMode = () => {
        this.setState ({
            editMode = true

        });
        
    }
    deactivateEditMode = () => {
        this.setState ({
            editMode = false

        });
        this.props.updateStatus(this.state.status);

        
    }
    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value

        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.status !== this.props.status) {
this.setState({
    status:this.props.status
})
    } 
}
    
    render () {
    
    return (
        <div>
            {!this.state.editMode &&
        <div>
            <span onDoubleClick={this.activateEditMode }>{this.props.status}</span>
        </div>
    }
    {this.state.editMode &&
        <div>
            <input onChange={this.onStatusChange} autoFocus={true} unBlur={this.deactivateEditMode } value={this.state.status}
        </div>
    }
        </div>

    );
    }
}

export default ProfileStatus;

