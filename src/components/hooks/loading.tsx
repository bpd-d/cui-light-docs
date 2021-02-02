import * as React from "react";

export function useIsLoading() {
    const [isLoading, setIsLoading] = React.useState(false);
    return [isLoading, setIsLoading];
}