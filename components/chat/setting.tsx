"use client"
import React from 'react'
import { Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ChatSettings } from '@/types/chat'

interface SettingProps {
    chatSetting: ChatSettings;
    setChatSetting: (setting: ChatSettings) => void;
}

interface SettingPropsProps {
    title: string,
    description: string
    chatSetting: ChatSettings;
    setChatSetting: (setting: ChatSettings) => void;
}

const Setting: React.FC<SettingProps> = ({ chatSetting, setChatSetting }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-10 rounded-full p-0">
                    <Settings2 className="h-4 w-4" />
                    <span className="sr-only">Open popover</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Setting</h4>
                    </div>
                    <div className="grid gap-6">
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="enSearch" className="flex flex-col space-y-1">
                                <span>English Search</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    Tell Bing to use English for searching.
                                </span>
                            </Label>
                            <Switch id="enSearch" defaultChecked checked={chatSetting.enSearch}
                                onCheckedChange={(checked) => setChatSetting({
                                    ...chatSetting,
                                    enSearch: !chatSetting.enSearch
                                })} />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="editMsg" className="flex flex-col space-y-1">
                                <span>Message Editable</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    You can edit, delete and resend messages.
                                </span>
                            </Label>
                            <Switch id="editMsg" checked={chatSetting.editMsg}
                                onCheckedChange={(checked) => setChatSetting({
                                    ...chatSetting,
                                    editMsg: !chatSetting.editMsg
                                })} />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default Setting;