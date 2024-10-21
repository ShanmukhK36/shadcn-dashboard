/** @format */
'use client'

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {}

export type Payment = {
    name: string
    email: string
    lastorder: string
    method: string
} 
export const data: Payment[] = [
    {
        name: "John Doe",
        email: "john.doe@email.com",
        lastorder: "2023-01-01",
        method: "Credit Card",
    },
    {
        name: "Alice Smith",
        email: "alice.smith@email.com",
        lastorder: "2023-02-15",
        method: "Paypal",
    },
    {
        name: "Bob Johnson",
        email: "bob.johnson@email.com",
        lastorder: "2023-03-20",
        method: "Stripe",
    },
    {
        name: "Emma Brown",
        email: "emma.brown@email.com",
        lastorder: "2023-04-10",
        method: "Venmo",
    },
    {
        name: "Michael Davis",
        email: "michael.davis@email.com",
        lastorder: "2023-05-05",
        method: "Cash",
    },
    {
        name: "Sophia Wilson",
        email: "sophia.wilson@email.com",
        lastorder: "2023-06-18",
        method: "Bank Transfer",
    },
    {
        name: "Liam Garcia",
        email: "liam.garcia@email.com",
        lastorder: "2023-07-22",
        method: "Payoneer",
    },
    {
        name: "Olivia Martinez",
        email: "olivia.martinez@email.com",
        lastorder: "2023-08-30",
        method: "Apple Pay",
    },
    {
        name: "Noah Radriguez",
        email: "noah.radriguez@email.com",
        lastorder: "2023-09-12",
        method: "Google Pay",
    },
    {
        name: "Ava Lopez",
        email: "ava.lopez@email.com",
        lastorder: "2023-10-25",
        method: "Cryptocurrency",
    },
    {
        name: "Ava Lopez",
        email: "ava.lopez@email.com",
        lastorder: "2023-10-25",
        method: "Cryptocurrency",
    },
    {
        name: "Ava Lopez",
        email: "ava.lopez@email.com",
        lastorder: "2023-10-25",
        method: "Cryptocurrency",
    },
    {
        name: "Ava Lopez",
        email: "ava.lopez@email.com",
        lastorder: "2023-10-25",
        method: "Cryptocurrency",
    },
]
export const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({row}) => {
        return (
            <div className="flex gap-2 items-center"> 
                <img
                    className="h-10 w-10"
                    src={'https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}'}
                    alt="user-image"
                />
                <p>{row.getValue("name")}</p>
            </div>
        ); 
      }
    },
    {
      accessorKey: "email",
      header: "Email",
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

export default function UsersPage({}: Props) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Users" />
            <DataTable columns={columns} data={data} />
        </div>
    );
}