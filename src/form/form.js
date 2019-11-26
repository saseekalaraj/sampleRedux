import React, { Component } from 'react'
import { create } from './formAction'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    data: state
})
const mapDispatchToProps = {
    create
}
class form extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.create(this.state)
    }
    render() {
        //  console.log(this.props.data);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    <button type="submit">submit</button>
                </form>
                {this.props.data.map((data, index) => {
                    return (
                        <div key={index}>
                            <p>Name : {data.name}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(form)