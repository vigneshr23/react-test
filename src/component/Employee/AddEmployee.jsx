import React, { useState } from 'react'
import styles from "./addEmployee.css"
import { Button } from '../common/button'

const initialState = { firstName: '', lastName: '', dob: '', designation: '', avatar: '', experience: '' }

export const AddEmployee = ({ handleAdd, handleViewToggle, employee }) => {
    const [formState, setFormState] = useState(() => {
        if (Object.keys(employee).length > 0) {
            return employee
        }
        return initialState
    })
    const handleChange = (e) => {
        console.log(e.target.value)
        const nextState = { ...formState, [e.target.name]: e.target.value }
        setFormState(nextState)
    }

    const handleFormSubmit = () => {
        handleAdd(formState)
        handleViewToggle(false)
    }
    return (
        <div className='container employee-add-view'>
            <h3>Add Employee</h3>
            <form>
                <div class="mb-3">
                    <label for="firstname" class="form-label">First Name</label>
                    <input onChange={handleChange} type="text" class="form-control" id="firstname" name='firstName' placeholder="Example input placeholder" value={formState['firstName']} />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input onChange={handleChange} type="text" class="form-control" id="lastName" name='lastName' placeholder="Another input placeholder" value={formState['lastName']} />
                </div>
                <div class="mb-3">
                    <label for="dob" class="form-label">Date Of Birth</label>
                    <input onChange={handleChange} type="text" class="form-control" id="dob" name='dob' placeholder="Another input placeholder" value={formState['dob']} />
                </div>
                <div class="mb-3">
                    <label for="designation" class="form-label">designation</label>
                    <input onChange={handleChange} type="text" class="form-control" id="designation" name='designation' placeholder="Another input placeholder" value={formState['designation']} />
                </div>
                <div class="mb-3">
                    <label for="avatar" class="form-label">Picture/Avatar</label>
                    <input onChange={handleChange} type="text" class="form-control" id="avatar" name='avatar' placeholder="Another input placeholder" value={formState['avatar']} />
                </div>
                <div class="mb-3">
                    <label for="experience" class="form-label">Experience (in years)</label>
                    <input onChange={handleChange} type="text" class="form-control" id="experience" name='experience' placeholder="Another input placeholder" value={formState['experience']} />
                </div>
            </form>
            <div className='btn-group'>
                <Button label={'Submit'} btnColor="primary" events={{ onClick: () => handleFormSubmit() }} />
                <Button label={'Cancel'} btnColor="default" events={{ onClick: () => handleViewToggle(false) }} />
            </div>
        </div>
    )
}