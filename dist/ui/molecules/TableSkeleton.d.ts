export type TableSkeletonColumn = {
    width: string;
    header: string;
    skeletonWidth?: string;
    align?: "left" | "center" | "right";
    isBadge?: boolean;
};
export type TableSkeletonProps = {
    columns: TableSkeletonColumn[];
    rowCount?: number;
};
export declare function TableSkeleton({ columns, rowCount }: TableSkeletonProps): import("react/jsx-runtime").JSX.Element;
