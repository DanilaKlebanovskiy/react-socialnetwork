import React from 'react'


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editmode: false,
            status : this.props.status

         };
        this.activeEditMode = () => {
            this.setState({
                editmode: true
            })

        }

        this.onStatusChange = (e) => {

            this.setState({status:e.target.value})

        }

    }



    deactiveEditMode() {
        this.setState({
            editmode: false
        })
        this.props.updateStatus(this.state.status)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status!== this.props.status ) {
            this.setState({status:this.props.status} )
        }
    }

    render() {
        return <>
            {this.state.editmode ? <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode.bind(this)} value={this.state.status}/></div> :
                <div><span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status || "net statusa"}</span></div>}
        </>
    }

}

export default ProfileStatus