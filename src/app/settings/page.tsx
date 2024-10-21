/** @format */
'use client'

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {}

export type Settings = {
    category: string;
    value: string | number | boolean;
} 
export const data: Settings[] = [
    {
        category: "Account",
        value: true,
    },
    {
        category: "Notification",
        value: false,
    },
    {
        category: "Language",
        value: "English"
    },
    {
        category: "Theme",
        value: "Dark",
    },
]
export const columns: ColumnDef<Settings>[] = [
    {
      accessorKey: "category",
      header: "Category",
    },
    {
        accessorKey: "value",
        header: "Value",
    },
]

export default function SettingsPage({}: Props) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Settings" />
            <DataTable columns={columns} data={data} />
        </div>
    );
}