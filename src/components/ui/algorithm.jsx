import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Algorithm({ algorithm, setAlgorithm }) {
  return (
    <div className="flex flex-row justify-start gap-2 items-center">
      <p className="text-start">Select Algorithm</p>
      <Select value={algorithm} onValueChange={(value) => setAlgorithm(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Enter an algorithm" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="AES">AES</SelectItem>  
        </SelectContent>
      </Select>
    </div>
  );
}
