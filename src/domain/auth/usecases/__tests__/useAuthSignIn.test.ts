import { waitFor } from "@testing-library/react-native";
import { useAuthSignIn } from "../useAuthSignIn";
import { customRenderHook } from "@/test/utils";
import { authService } from "../../authService";

const mockedAuthCredentials = {
    token: "token",
    tokenExpiresAt: "tokenExpiresAt",
    refreshToken: "refreshToken",
   user: {
       id: 1,
       email: "email",
       firstName: "user",
       lastName: "doe",
       username: "userdoe",
       profileUrl: "https://example.com",
       isOnline: false,
       fullName: "user doe"
   }
}

const mockedSaveCredentials = jest.fn();

jest.mock("@/presentation/providers", () => {
    const originalModule = jest.requireActual("@/presentation/providers");
    return {
        ...originalModule,
        useAuthCredentials: () =>({
            saveCredentials:mockedSaveCredentials
        })
    }
})

describe("useAuthSignIn", () => {
    test("should save credentials if success", async () => {
        const mockedOnSuccess = jest.fn();
        jest.spyOn(authService, "signIn").mockResolvedValueOnce(mockedAuthCredentials);
        const {result} = customRenderHook(() => useAuthSignIn({onSuccess: mockedOnSuccess}));
        result.current.signIn({email: "email", password: "password"});
        await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
        expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
        expect(mockedOnSuccess).toHaveBeenCalledWith(mockedAuthCredentials);
    });

    test("should call onError if failed", async () => {
        const mockedOnError = jest.fn();
        jest.spyOn(authService, "signIn").mockRejectedValueOnce(new Error("error"));
        const {result} = customRenderHook(() => useAuthSignIn({
            onError:mockedOnError
        }));
        result.current.signIn({email: "email", password: "password"});
        await waitFor(() => expect(result.current.isError).toBeTruthy());
        expect(mockedOnError).toHaveBeenCalledWith("error");
    });
});