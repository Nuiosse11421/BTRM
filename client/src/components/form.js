import React from 'react';

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;