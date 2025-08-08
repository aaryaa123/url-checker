/**
 * Simulates an asynchronous server request to check
 * if a URL exists and whether it is a file or folder.
 */
export declare function mockCheckUrl(url: string): Promise<{
    exists: boolean;
    type: "file" | "folder" | null;
}>;
//# sourceMappingURL=mockServer.d.ts.map