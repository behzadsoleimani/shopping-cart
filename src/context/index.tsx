import React, { ReactNode } from "react";
import { StateProvider } from "./state";

export default ({ children }: { children: ReactNode }) => (
    <StateProvider>
        {children}
    </StateProvider>
);
