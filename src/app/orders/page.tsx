/** @format */
'use client'

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {}

export type Payment = {
    order: string
    status: string
    lastorder: string
    method: string
} 
export const data: Payment[] = [
    {
        order: "ORD001",
        status: "Pending",
        lastorder: "2023-01-01",
        method: "Credit Card",
    },
    {
        order: "ORD002",
        status: "Completed",
        lastorder: "2023-01-10",
        method: "Cryptocurrency",
    },
    {
        order: "ORD003",
        status: "Processing",
        lastorder: "2023-01-17",
        method: "PayPal",
    },
    {
        order: "ORD004",
        status: "Completed",
        lastorder: "2023-02-01",
        method: "Apple Pay",
    },
    {
        order: "ORD005",
        status: "Pending",
        lastorder: "2023-02-22",
        method: "Google Pay",
    },
    {
        order: "ORD006",
        status: "Processing",
        lastorder: "2023-03-15",
        method: "Google Pay",
    },
    {
        order: "ORD007",
        status: "Processing",
        lastorder: "2023-03-29",
        method: "PayPal",
    },
    {
        order: "ORD008",
        status: "Completed",
        lastorder: "2023-04-05",
        method: "Credit Card",
    },
    {
        order: "ORD009",
        status: "Pending",
        lastorder: "2023-05-18",
        method: "Cryptocurrency",
    },
    {
        order: "ORD010",
        status: "Completed",
        lastorder: "2023-05-31",
        method: "Apple Pay",
    },
    {
        order: "ORD011",
        status: "Completed",
        lastorder: "2023-06-11",
        method: "Google Pay",
    },
]
export const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "order",
      header: "Order",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({row}) => {
        return (
            <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
                "bg-red-200": row.getValue("status") === "Pending",
                "bg-orange-200": row.getValue("status") === "Processing",
                "bg-green-200": row.getValue("status") === "Completed",
            })}>
                {row.getValue('status')}
            </div>
        );
      }
    },
    {
      accessorKey: "lastorder",
      header: "Last Order",
    },
    {
        accessorKey: "method",
        header: "Method",
    },
]

export default function OrdersPage({}: Props) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Orders" />
            <DataTable columns={columns} data={data} />
        </div>
    );
}