import React, { Component } from 'react'

class AddItemForm extends Component {

    state= {
        name: '',
        description: '',
        image: '',
        price: null
    }

    render() {
        return (
            <div>
                <h2>New Grocery Item Form</h2>
                <form onSubmit={()=>console.log("hook something up here")}>
                    <input 
                        placeholder='name' 
                        name='name' 
                        value={this.state.name} 
                        onChange={()=>console.log("hook something up here")}>    
                    </input>
                    <input 
                        placeholder='description' 
                        name='description'
                        value={this.state.description} 
                        onChange={()=>console.log("hook something up here")}>
                    </input>
                    <input 
                        placeholder='image URL' 
                        name='image' 
                        value={this.state.image} 
                        onChange={()=>console.log("hook something up here")}>
                    </input>
                    <input 
                        type='number' 
                        placeholder='price' 
                        name='price' 
                        value={this.state.price} 
                        onChange={()=>console.log("hook something up here")}>
                    </input>
                    <button type='submit'>Add Grocery Item</button>
                </form>
            </div>
        )
    }
}

export default AddItemForm
