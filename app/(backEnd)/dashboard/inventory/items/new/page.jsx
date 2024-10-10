import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";

//Parallel data fetching
export default async function NewItem() {
  const categoriesData = getData("categories");
  const unitsData = getData("units");
  const warehousesData = getData("warehouses");
  const brandsData = getData("brands");
  const suppliersData = getData("suppliers");

  const [categories, units, warehouses, brands, suppliers] = await Promise.all([
    categoriesData,
    unitsData,
    warehousesData,
    brandsData,
    suppliersData,
  ]);

  return (
    <div>
      {/* Header pass props to FormHeader component */}
      <FormHeader title="New Item" href="/dashboard/inventory" />

      {/* Form */}
      <CreateItemForm
        categories={categories}
        units={units}
        brands={brands}
        warehouses={warehouses}
        suppliers={suppliers}
      />
    </div>
  );
}
