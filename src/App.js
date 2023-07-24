import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentResult from "./components/InvestmentResult";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["expected-duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />

      {!userInput && (
        <p style={{ textAlign: "center" }}>No Investment Calculated Yet.</p>
      )}
      {userInput && (
        <InvestmentResult
          data={yearlyData}
          inital={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
