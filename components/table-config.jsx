"use client"
// table-config.js
import { IconCircleCheckFilled, IconLoader } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { IconDotsVertical } from "@tabler/icons-react"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TableCellViewer } from "./data-table"

export const generateColumns = [
 
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => row.original.date,
    enableHiding: false,
  },
  {
    accessorKey: "property",
    header: "Property",
    cell: ({ row }) => <TableCellViewer item={row.original} />,
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.type}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.status === "Done" ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconLoader />
        )}
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div >Amount</div>,
    cell: ({ row }) => (
      <form onSubmit={(e) => {
        e.preventDefault()
        toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
          loading: `Saving ${row.original.header}`,
          success: "Done",
          error: "Error",
        })
      }}>
        <Label htmlFor={`${row.original.id}-target`} className="sr-only">Amount</Label>
        <Input
          defaultValue={row.original.amount}
          id={`${row.original.id}-amount`}
          className="h-8 w-16 bg-transparent text-right shadow-none border-transparent"
        />
      </form>
    ),
  },
  // {
  //   accessorKey: "limit",
  //   header: () => <div className="text-right">Limit</div>,
  //   cell: ({ row }) => (
  //     <form onSubmit={(e) => {
  //       e.preventDefault()
  //       toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
  //         loading: `Saving ${row.original.header}`,
  //         success: "Done",
  //         error: "Error",
  //       })
  //     }}>
  //       <Label htmlFor={`${row.original.id}-limit`} className="sr-only">Limit</Label>
  //       <Input
  //         defaultValue={row.original.limit}
  //         id={`${row.original.id}-limit`}
  //         className="h-8 w-16 bg-transparent text-right shadow-none border-transparent"
  //       />
  //     </form>
  //   ),
  // },
  {
    accessorKey: "paid by",
    header: "Paid by",
    cell: ({ row }) => (
      row.original['paid by'] !== "Assign reviewer" ? (
        row.original['paid by']
      ) : (
        <Select defaultValue="">
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Assign reviewer" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
            <SelectItem value="Jamik Tashpulatov">Jamik Tashpulatov</SelectItem>
            <SelectItem value="Emily Whalen">Emily Whalen</SelectItem>
          </SelectContent>
        </Select>
      )
    ),
  },
  {
    accessorKey: "period",
    header: "Period",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.period}
      </Badge>
    ),
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-muted-foreground size-8" size="icon">
            <IconDotsVertical />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]
