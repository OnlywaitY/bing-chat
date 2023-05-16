"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function copyCode(self: string) {
  console.log(self)
}

export function ChatBox() {

  return (
    
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <div>

          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" >Cancel</Button>
          <Button onClick={() => copyCode("light")}>Deploy</Button>
        </CardFooter>
      </Card>
    
  )
}
