import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddRecord } from "./add-record"

export const AddRecordPopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="record rounded-full bg-blue-500 px-2.5 py-[2px] font-roboto text-white text-sm"
        >
          + Add Record
        </Button>
      </DialogTrigger>
      {/* <DialogContent className="sm:max-w-[725px]"> */}
      <DialogContent className="sm:max-w-[100%]">
        <AddRecord />
      </DialogContent>
    </Dialog>
  )
}
