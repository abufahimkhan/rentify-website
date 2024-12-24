"use client"
import {
  addFlat
} from "@/components/redux/features/flatsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function FlatsTable() {
  const dispatch = useDispatch();
  const flats = useSelector((state: RootState) => state.flats.flats);

  const handleAddFlat = () => {
    dispatch(
      addFlat({
        flatNo: "D401",
        size: "1100 sqft",
        meterNo: "MTR-202350",
        status: "Available",
      })
    );
  };

  return (
    <div className="w-full py-12 lg:px-12 xs:px-5">
      <button
        onClick={handleAddFlat}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Flat
      </button>
      <Table className="xs:overflow-x-auto text-center lg:text-md text-sm">
        <TableCaption>Details of Flats</TableCaption>
        <TableHeader>
          <TableRow className="bg-black text-white font-mono font-extrabold">
            <TableHead>Flat Number</TableHead>
            <TableHead>Flat Size</TableHead>
            <TableHead>Meter Number</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {flats.map((flat) => (
            <TableRow
              key={flat.flatNo}
              className="border border-slate-300 font-medium font-mono"
            >
              <TableCell>{flat.flatNo}</TableCell>
              <TableCell>{flat.size}</TableCell>
              <TableCell>{flat.meterNo}</TableCell>
              <TableCell>{flat.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
