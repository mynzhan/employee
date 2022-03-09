import EmployeeListItem from '../employee-list-item/employee-list-item.js'
import './employee-list.css'


const EmployeeList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item

        return (
            <EmployeeListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })

    return (
        <ul className="list-group app-list">
            {elements}
        </ul>
    )
}

export default EmployeeList;