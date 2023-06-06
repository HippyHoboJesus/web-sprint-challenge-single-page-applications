import React from "react"



function Pizzaform(props) {
    const {name, size, pepperoni, sausage, olives, mushrooms, special} = props.values
    const {change, submit, errors} = props

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        const newVal = type === 'checkbox' ? checked : value
        change(name, newVal)

    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>
            <p>{errors.name}</p>
        <form id= "pizza-form" onSubmit={onSubmit}>
            <label> Name
                <input
                id="name-input"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                />
            </label>
            <label> Size Selection
                <select value={size} name="size" id="size-dropdown" onChange={onChange}>
                    <option value="">Select a Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>
            <label> Pepperoni
                <input
                type="checkbox"
                name="pepperoni"
                checked={pepperoni}
                onChange={onChange}
                />
            </label>
            <label> Sausage
                <input
                type="checkbox"
                name="sausage"
                checked={sausage}
                onChange={onChange}
                />
            </label>
            <label> Olives
                <input
                type="checkbox"
                name="olives"
                checked={olives}
                onChange={onChange}
                />
            </label>
            <label> Mushrooms
                <input
                type="checkbox"
                name="mushrooms"
                checked={mushrooms}
                onChange={onChange}
                />
            </label>
            <label> Special Instructions
                <input
                id="special-text"
                type="text"
                name="special"
                value={special}
                onChange={onChange}
                />
            </label>
            <input id="order-button" type="submit" value="Add to Order"/>
        </form>
        </div>
    )
}

export default Pizzaform
