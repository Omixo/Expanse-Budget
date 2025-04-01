import React from 'react'

import Header from './component/Header'
import Displaybudegt from './component/Displaybudegt'
import Budegtcard from './common/Budegtcard'
import CalculateExpenseContainers from './component/CalculateExpenseContainers'
import DeleteExpense from './component/DeleteExpense'
import ExpenseMainApp from './component/ExpenseMain'
import ButtonCards from './common/ButtonCards'
const App = () => {
  return (
    <>
    <Header/>
   <CalculateExpenseContainers/>
   <DeleteExpense/>
   <ExpenseMain/>
   <ButtonCards/>
    <Budegtcard/>

      
    </>
  )
}

export default App
