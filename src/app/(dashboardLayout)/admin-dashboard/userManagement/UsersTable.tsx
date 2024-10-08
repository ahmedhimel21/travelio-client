"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableColumnsType, TableProps } from "antd";

import React from "react";
import { Table } from "antd";
import { Button } from "@nextui-org/button";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const UserTable = ({ users }: { users: any }) => {
  const tableData = users?.data?.map(
    ({
      _id,
      name,
      email,
      role,
    }: {
      _id: string;
      name: string;
      email: string;
      role: string;
    }) => ({
      key: _id,
      name,
      email,
      role,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <div>
            <Button
              className={`${
                item?.role === "admin" ? "opacity-40" : "opacity-100"
              }`}
              color="primary"
            >
              Make Admin
            </Button>
          </div>
        );
      },
    },
  ];

  //   const handleUserRoleUpdate = async (id: string) => {
  //     const toastId = toast.loading("Updating user role...");
  //     try {
  //       const res = await updateUserRole(id);
  //       if (res?.data?.success) {
  //         toast.success("User role update successfully", { id: toastId });
  //       }
  //     } catch (err) {
  //       toast.error("Something went wrong", { id: toastId });
  //     }
  //   };

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table
        dataSource={tableData}
        showSorterTooltip={{ target: "sorter-icon" }}
        onChange={onChange}
        pagination={false}
        loading={!users?.data?.length}
        columns={columns}
      />
    </div>
  );
};

export default UserTable;
