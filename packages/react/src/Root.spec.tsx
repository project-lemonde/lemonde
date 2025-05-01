import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Root } from "./Root";

test("Root test", async () => {
    const result = render(<Root />);
    expect(result).toBeTruthy();
});
