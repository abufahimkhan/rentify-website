import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const tenants = [
  {
    tenantName: "Khushi Begum",
    familyMembers: 4,
    contactNumber: "01234-567890",
    documents: ["National ID", "Rental Agreement"],
  },
  {
    tenantName: "Korban Ali",
    familyMembers: 5,
    contactNumber: "98765-432101",
    documents: ["Passport", "Utility Bills"],
  },
  {
    tenantName: "Afroza Begum",
    familyMembers: 2,
    contactNumber: "12345-678901",
    documents: ["Driving License"],
  },
  {
    tenantName: "Shah Alom",
    familyMembers: 6,
    contactNumber: "55555-000000",
    documents: ["National ID", "Rental Agreement", "Employment Letter"],
  },
];

export function TenantsTable() {
  return (
    <div className="w-full py-12 lg:px-12 xs:px-5">
      <Table className="xs:overflow-x-auto text-center lg:text-md text-sm">
        <TableCaption>Details of Tenants</TableCaption>
        <TableHeader>
          <TableRow className="bg-black *:text-white font-mono font-extrabold *:border ">
            <TableHead>Tenant Name</TableHead>
            <TableHead>Family Members</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Documents</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((tenant, index) => (
            <TableRow
              key={index}
              className="*:border *:border-slate-300 font-medium  font-mono"
            >
              <TableCell>{tenant.tenantName}</TableCell>
              <TableCell>{tenant.familyMembers}</TableCell>
              <TableCell>{tenant.contactNumber}</TableCell>
              <TableCell>
                {tenant.documents.map((doc, idx) => (
                  <span key={idx} className="block">
                    {doc}
                  </span>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
