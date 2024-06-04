import { renderHook } from "@testing-library/react-native";
import { useAuthSignIn } from "../useAuthSignIn";
import { ReactQueryProvider } from "@/test/utils";

describe("useAuthSignIn", () => {
    test("should save credentials if success", () => {
        const {result} = renderHook(() => useAuthSignIn(), {wrapper: ReactQueryProvider});
    });

    test("should call onError if failed", () => {
        const {result} = renderHook(() => useAuthSignIn(), {wrapper: ReactQueryProvider});

    });
});