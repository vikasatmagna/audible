import Button from './Button'



const clickCon = () => {
    console.log('123');
    }

const Task = ({title}) => {
    return (
        <div className="taskManager" style={{ width: 500, minHeight: 200, margin: 'auto' }}>
            <p>{title} </p>
            <Button onClick={clickCon}
             backgroundColor="blue"
              color="#fff"
               text="Add" />
        </div>


    );
}



Task.defaultProps = {
    title: "Task Manager",
}





export default Task;