import Header from "../Header/Header";
import MealsSummary from "../Meals/MealsSummary";
import AvailableMeals from "../Meals/AvailableMeals";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-12">
        <MealsSummary />
        <AvailableMeals />
      </main>
      <div id="modal"></div>
    </>
  );
};

export default Layout;
