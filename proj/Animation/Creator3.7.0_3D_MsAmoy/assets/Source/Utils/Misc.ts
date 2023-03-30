
export function waitFor(duration: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration * 1000.0);
    });
}
