// Test for Category component
import { render } from "@testing-library/react";
import Category from "./Category";

test("Category component renders correctly", () => {
    interface CategoryProps {
        categoryName: string;
        categoryId: number;
    }
    const { getByText } = render(<Category categoryId={9} categoryName={"TestCategory"} />);
    expect(getByText("TestCategory")).toBeInTheDocument();
    }
);