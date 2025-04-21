import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import mealsData from "../../data/meals.json";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading from an API
    const timer = setTimeout(() => {
      try {
        setMeals(mealsData); // Use the imported data
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }, 1000); // Small delay to simulate network request

    return () => clearTimeout(timer);
  }, []);

  // ... rest of the component remains the same
  if (isLoading) {
    return (
      <section className="text-center py-8">
        <p className="text-xl">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="text-center py-8">
        <p className="text-xl text-red-500">{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="max-w-3xl w-full mx-auto my-8">
      <Card className="p-4">
        <ul className="space-y-4">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
