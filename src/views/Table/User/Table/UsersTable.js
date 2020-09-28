import React, { Component } from "react";
import TableRows from "../../../../components/Table/TableRows";

export class UsersTable extends Component {
  render() {
    const rows = [
      {
        // *** column
        rowId: "1",
        sName: "name 1",
        nAge: 10,
        sAddress: "BNK",
        // *** group
        date: "12-12-2020",
        time: "15:00",
      },
      {
        rowId: "2",
        sName: "name 2",
        nAge: 20,
        sAddress: "JPN",
        date: "12-12-2020",
        time: "15:00",
      },
    ];
    const columns = [
      {
        title: "Code",
        dataIndex: "sName",
        key: "sName",
        align: "left",
        search: true,
        width: "35%",
      },
      {
        title: "group column",
        align: "center",
        width: "25%",
        group: true,
        columnGroups: [
          {
            title: "Date",
            dataIndex: "date",
            key: "date",
            align: "center",
          },
          {
            title: "Time",
            dataIndex: "time",
            key: "time",
            align: "center",
          },
        ],
      },
      {
        title: "Code",
        dataIndex: "nAge",
        key: "nAge",
        align: "center",
        search: true,
        width: "20%",
      },
      {
        title: "Code",
        dataIndex: "sAddress",
        key: "sAddress",
        align: "center",
        search: true,
        width: "20%",
      },
    ];
    return (
      <div>
        <TableRows
          className={"none"} // when don't have className | table switch background color
          columns={columns}
          rows={rows ? rows : []}
          rowKey={"rowId"}
        />
      </div>
    );
  }
}

export default UsersTable;
