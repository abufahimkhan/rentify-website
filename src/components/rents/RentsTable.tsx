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
import CustomBadge from "../common/CustomBadge";

const rents = [
  {
    flatNo: "A101",
    tenantName: "Khushi Begum",
    totalMembers: 4,
    rentAmount: 4000, // Changed to a number for easier calculations
    dueAmount: 50.0,
    rentStatus: "Paid",
    rentPaidDate: "2024-11-01",
    electricityBill: 60.0,
    gasBill: 30.0,
    waterBill: 20.0,
    status: "To Let",
  },
  {
    flatNo: "A102",
    tenantName: "Khushi Begum",
    totalMembers: 3,
    rentAmount: 600.0,
    dueAmount: 100.0,
    rentStatus: "Pending",
    rentPaidDate: "-",
    electricityBill: 50.0,
    gasBill: 25.0,
    waterBill: 15.0,
    status: "To Let",
  },
  {
    flatNo: "B203",
    tenantName: "Korban Ali",
    totalMembers: 5,
    rentAmount: 700.0,
    dueAmount: 0.0,
    rentStatus: "Paid",
    rentPaidDate: "2024-10-28",
    electricityBill: 75.0,
    gasBill: 35.0,
    waterBill: 25.0,
    status: "To Let",
  },
  {
    flatNo: "C101",
    tenantName: "Afroza Begum",
    totalMembers: 2,
    rentAmount: 450.0,
    dueAmount: 150.0,
    rentStatus: "Pending",
    rentPaidDate: "-",
    electricityBill: 40.0,
    gasBill: 20.0,
    waterBill: 10.0,
    status: "To Let",
  },
  {
    flatNo: "C102",
    tenantName: "Afroza Begum",
    totalMembers: 1,
    rentAmount: 300.0,
    dueAmount: 0.0,
    rentStatus: "Paid",
    rentPaidDate: "2024-11-05",
    electricityBill: 30.0,
    gasBill: 15.0,
    waterBill: 10.0,
    status: "To Let",
  },
  {
    flatNo: "D301",
    tenantName: "Shah Alom",
    totalMembers: 6,
    rentAmount: 800.0,
    dueAmount: 0.0,
    rentStatus: "Paid",
    rentPaidDate: "2024-10-25",
    electricityBill: 100.0,
    gasBill: 50.0,
    waterBill: 40.0,
    status: "To Let",
  },
];

export function RentsTable() {
  // Calculate totals
  const totalRentAmount = rents.reduce(
    (accumulator, rent) => accumulator + rent.rentAmount,
    0
  );
  const totalDueAmount = rents.reduce(
    (accumulator, rent) => accumulator + rent.dueAmount,
    0
  );
  const totalTenants = rents.reduce(
    (accumulator, rent) => accumulator + rent.totalMembers,
    0
  );

  return (
    <div className="w-full py-12 lg:px-12 xs:px-5">
      <Table className="xs:overflow-x-auto text-center lg:text-md text-sm">
        <TableCaption>A list of your recent rents.</TableCaption>
        <TableHeader>
          <TableRow className="bg-black *:text-white font-mono font-extrabold *:border ">
            <TableHead>Rent Paid Date</TableHead>
            <TableHead>Flat No</TableHead>
            <TableHead>Tenant Name</TableHead>
            <TableHead>Total Members</TableHead>
            <TableHead>Rent Amount</TableHead>
            <TableHead>Due Amount</TableHead>
            <TableHead>Electricity Bill</TableHead>
            <TableHead>Gas Bill</TableHead>
            <TableHead>Water Bill</TableHead>
            <TableHead>Rent Status</TableHead>
            <TableHead>Flat Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rents.map((rent) => (
            <TableRow
              key={rent.flatNo}
              className="*:border *:border-slate-300 font-medium  font-mono"
            >
              <TableCell>{rent.rentPaidDate}</TableCell>

              <TableCell>{rent.flatNo}</TableCell>
              <TableCell>{rent.tenantName}</TableCell>
              <TableCell>{rent.totalMembers}</TableCell>
              <TableCell>${rent.rentAmount.toFixed(2)}</TableCell>
              <TableCell>${rent.dueAmount.toFixed(2)}</TableCell>
              <TableCell>${rent.electricityBill.toFixed(2)}</TableCell>
              <TableCell>${rent.gasBill.toFixed(2)}</TableCell>
              <TableCell>${rent.waterBill.toFixed(2)}</TableCell>
              <TableCell>{rent.rentStatus}</TableCell>

              <TableCell>
                <CustomBadge defaultStatus={rent.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-slate-500 text-white text-left ">
          <TableRow>
            <TableCell colSpan={3} className="font-bold">
              **Total Tenants:
            </TableCell>
            <TableCell colSpan={8}>{totalTenants}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className="font-bold">
              **Total Rent Amount:
            </TableCell>
            <TableCell colSpan={8}>${totalRentAmount.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className="font-bold">
              **Total Due Amount:
            </TableCell>
            <TableCell colSpan={8}>${totalDueAmount.toFixed(2)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
