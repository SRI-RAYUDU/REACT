import { useState } from 'react';
import TodosViewer from './todos';

const UseCallbackExample = () => {
  const [todos, setTodos] = useState(['9am class timings']);

  const [salary, setSalary] = useState(['9am class timings']);
  const addTodofn = () => {
    setTodos([...todos, '1pm lunch time']);
  };
  const salaryIncrement = () => {
    setSalary(salary + 1000);
  };

  return (
    <>
    <Heading title={"salary details"}/>
      <h3>{salary}</h3>
      <button onclick={salaryIncrement}>increment salary</button>
      <Heading title={"Todo details"}/>
      <TodosViewer todos={todos} addTodofn={addTodofn} />
      
    </>
  );
};
export default UseCallbackExample;
