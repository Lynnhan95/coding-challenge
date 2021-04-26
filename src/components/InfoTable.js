import React, {Component} from 'react' 

class InfoTable extends Component {

    render() {
        return (
            <div className="InfoTableWrapper">
            <h4>Info Table</h4>
            {this.props.data ? 
            <div className="InfoTableWrapper second">
                <p>First Name: {this.props.data.name}</p>
                <p>Age: {this.props.data.age}</p>
                <p>Weight: {this.props.data.weight}</p>
                <p>Height: {this.props.data.height}</p>
                <p>Second Name: {this.props.data.secondname}</p>
                <p>Country: {this.props.data.country}</p>
                <p>Hobby: {this.props.data.hobby}</p>
            </div> : ''}
            </div>
        )
    }
}

export default InfoTable;