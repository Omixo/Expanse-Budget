import React, { useContext, useState } from "react";
import budget from budget


const ExpenseMain = () => {
  
  return (
    <>
      <div className="main-container">
        <h1 className="user text-gray-900 font-bold text-5xl px-5 py-8">
          Hello Omkar, here
        </h1>
        <div className="budget-container  flex flex-row gap-5 px-10">
          <BudgetCards
            title={"Total Budget"}
            budget={budget}
            image={budgetImage}
          />
          <BudgetCards
            title={"Total Expense"}
            budget={expense}
            image={expenseImage}
          />
          <BudgetCards
            title={"Remaining Budget"}
            budget={budget - expense}
            image={coinstack}
          />
        </div>
        

      </div>
    </>
  );
};

export default ExpenseMain;
