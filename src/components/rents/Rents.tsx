import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rents = [
  {
    flatNo: "A101",
    tenantName: "Khushi Begum",
    totalMembers: 4,
    rentAmount: "$4000",
    dueAmount: "$50.00",
    rentStatus: "Paid",
    rentPaidDate: "2024-11-01",
    electricityBill: "$60.00",
    gasBill: "$30.00",
    waterBill: "$20.00",
    status: "On Hold",
  },
  {
    flatNo: "A102",
    tenantName: "Khushi Begum",
    totalMembers: 3,
    rentAmount: "$600.00",
    dueAmount: "$100.00",
    rentStatus: "Pending",
    rentPaidDate: "-",
    electricityBill: "$50.00",
    gasBill: "$25.00",
    waterBill: "$15.00",
    status: "On Hold",
  },
  {
    flatNo: "B203",
    tenantName: "Korban Ali",
    totalMembers: 5,
    rentAmount: "$700.00",
    dueAmount: "$0.00",
    rentStatus: "Paid",
    rentPaidDate: "2024-10-28",
    electricityBill: "$75.00",
    gasBill: "$35.00",
    waterBill: "$25.00",
    status: "On Hold",
  },
  {
    flatNo: "C101",
    tenantName: "Afroza Begum",
    totalMembers: 2,
    rentAmount: "$450.00",
    dueAmount: "$150.00",
    rentStatus: "Pending",
    rentPaidDate: "-",
    electricityBill: "$40.00",
    gasBill: "$20.00",
    waterBill: "$10.00",
    status: "On Hold",
  },
  {
    flatNo: "C102",
    tenantName: "Afroza Begum",
    totalMembers: 1,
    rentAmount: "$300.00",
    dueAmount: "$0.00",
    rentStatus: "Paid",
    rentPaidDate: "2024-11-05",
    electricityBill: "$30.00",
    gasBill: "$15.00",
    waterBill: "$10.00",
    status: "On Hold",
  },
  {
    flatNo: "D301",
    tenantName: "Shah Alom",
    totalMembers: 6,
    rentAmount: "$800.00",
    dueAmount: "$0.00",
    rentStatus: "Paid",
    rentPaidDate: "2024-10-25",
    electricityBill: "$100.00",
    gasBill: "$50.00",
    waterBill: "$40.00",
    status: "On Hold",
  },
];

export function Rents() {
  return (
    <div className="w-full py-12">
      <Table className="xs:overflow-x-auto">
        <TableCaption>A list of your recent rents.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Flat No</TableHead>
            <TableHead>Tenant Name</TableHead>
            <TableHead>Total Members</TableHead>
            <TableHead>Rent Amount</TableHead>
            <TableHead>Due Amount</TableHead>
            <TableHead>Rent Status</TableHead>
            <TableHead>Rent Paid Date</TableHead>
            <TableHead>Electricity Bill</TableHead>
            <TableHead>Gas Bill</TableHead>
            <TableHead>Water Bill</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rents.map((rent) => (
            <TableRow key={rent.flatNo}>
              <TableCell className="font-medium">{rent.flatNo}</TableCell>
              <TableCell>{rent.tenantName}</TableCell>
              <TableCell>{rent.totalMembers}</TableCell>
              <TableCell>{rent.rentAmount}</TableCell>
              <TableCell>{rent.dueAmount}</TableCell>
              <TableCell>{rent.rentStatus}</TableCell>
              <TableCell>{rent.rentPaidDate}</TableCell>
              <TableCell>{rent.electricityBill}</TableCell>
              <TableCell>{rent.gasBill}</TableCell>
              <TableCell>{rent.waterBill}</TableCell>
              <TableCell>{rent.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={11}>End of Data</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
