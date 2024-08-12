// import {
//   ChevronLeft,
//   ChevronRight,
//   Copy,
//   CreditCard,
//   MoreVertical,
//   Truck,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Separator } from "@/components/ui/separator";
// import Markdown from "./markdown";

// type Props = {
//   role?: string;
//   content?: string;
// };
// const MessageBox = ({ role, content }: Props) => {
//   return (
//     <Card className="overflow-hidden">
//       <CardContent className="p-6 text-sm">
//         <Markdown text={content as string} />
//       </CardContent>
//       {role !== "user" && (
//         <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
//           <div className="text-xs text-muted-foreground">
//             <span>Disclaimer:</span> The medical advice and recommendations provided by this
//             application are for informational purposes only and should not
//             replace professional medical diagnosis, treatment, or advice.
//           </div>
//         </CardFooter>
//       )}
//     </Card>
//   );
// };
// export default MessageBox;

import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import Markdown from './markdown'

type Props = {
  role: string,
  content: string
}

const MessageBox = ({ role, content }: Props) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 text-sm">
        {/* {content} */}
        <Markdown text={content} />
      </CardContent>
      {role !== "user" && (
        <CardFooter className="border-t bg-muted/50 px-6 py-3 text-xs text-muted-foreground">
          Disclaimer: The medical advice and recommendations provided by this
          application are for informational purposes only and should not
          replace professional medical diagnosis, treatment, or advice.
        </CardFooter>
      )}
    </Card>
  )
}

export default MessageBox