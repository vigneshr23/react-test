import React, { Fragment, useCallback, useState } from 'react'
import styles from "./employee.css";
import { employeeCtx } from '../../context/employeeCtx';
import employeeList from "../../mock/employee.json"
import { AddEmployee } from './AddEmployee';

const Employee = () => {
    const [employees, setEmployees] = useState([employeeList])
    const [addView, setAddView] = useState(false)
    const [employee, setEditableEmployee] = useState({})

    const handleViewToggle = useCallback((isAddView) => {
        setAddView(isAddView || true)
    }, [])

    const handleEmployeeAdd = (empDetails) => {
        const { firstName,
            lastName,
            dob,
            designation,
            avatar,
            experience } = empDetails

        setEmployees([...employees, { firstName, lastName, dob, designation, avatar, experience }])
    }

    const handleDelete = (idx) => {
        const newEmp = [...employees]
        newEmp.splice(idx, 1)
        setEmployees(newEmp)
    }

    const handleEdit = (idx) => {
        const employee = employees[idx]
        setEditableEmployee(employee)
        handleViewToggle(true)
    }

    const renderEmployees = () => {
        return (
            employees.map(({ firstName, lastName, designation }, idx) => (
                <Fragment key={idx}>
                    <div><label>First Name: </label>{firstName}</div>
                    <div><label>Last Name: </label>{lastName}</div>
                    <div><label>Designation: </label>{designation}</div>
                    <div className='btn btn-default' onClick={() => handleEdit(idx)}>Edit</div>
                    <div className='btn btn-danger' onClick={(idx) => handleDelete(idx)}>Del</div>
                </Fragment>
            ))
        )
    }

    return (
        <div className='container employee-container'>
            <h2>Employee page</h2>
            <nav>
                <ul></ul>
            </nav>
            {addView ? <AddEmployee handleAdd={handleEmployeeAdd} handleViewToggle={handleViewToggle} employee={employee} /> : (
                <div className='container'>
                    <div className='row flex'>{renderEmployees()}</div>
                    <div className="container actions">
                        <div className='btn btn-primary' onClick={handleViewToggle}>Add Employee</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Employee