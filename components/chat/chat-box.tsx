"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { CircleEllipsis, Edit, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MarkdownPreview from '@uiw/react-markdown-preview/esm/index'

interface ChatBoxProps {
    index: number
    msg: { tag: string, text: string }
    editMsg: boolean
    clearMessage: (index: any) => void
}

const ChatBox: React.FC<ChatBoxProps> = ({ index, msg, editMsg, clearMessage }) => {
    const [editHoverArray, setEditHoverArray] = React.useState(Array.from({ length: 0 }, () => false))
    // 不同消息样式处理
    const messageClass = (msg: { tag: string }) => {
        let className = `flex`
        if (msg.tag.startsWith('[user]')) {
            className += ` justify-end`
        } else {
            className += ` justify-start`
        }
        return className
    }
    const catalogButtonClass = (msg: { tag: string }) => {
        let className = `absolute top-0 transform -translate-y-1/2`
        if (msg.tag.startsWith('[user]')) {
            className += ` left-0 -translate-x-1/2`
        } else {
            className += ` right-0 translate-x-1/2 `
        }
        return className
    }
    // 消息菜单打开状态
    const [isCatalogOpen, setIsCatalogOpen] = React.useState(false)
    // 改变菜单按钮显示
    const changeCatalogButtonShow = () => {
        let newArray = [...editHoverArray];
        newArray[index] = !newArray[index];
        setEditHoverArray(newArray);
    }
    // 是否展示菜单按钮
    const isShowCatalogButton = () => {
        return editMsg && (editHoverArray[index] || isCatalogOpen);
    }
    return (
        <div key={index} className={messageClass(msg)}>
            <Card className="mt-4 mb-2 max-w-3xl relative"
                onMouseEnter={() => changeCatalogButtonShow()}
                onMouseLeave={() => changeCatalogButtonShow()}>
                <div className={catalogButtonClass(msg)}>
                    {isShowCatalogButton() && (
                        <DropdownMenu onOpenChange={(open: boolean) => { setIsCatalogOpen(open) }}>
                            <DropdownMenuTrigger>
                                <Button className="p-0" size="sm" variant="ghost">
                                    <CircleEllipsis fill='white' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>More</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onSelect={() => clearMessage(index)}>
                                        <Edit className='pr-2' /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => clearMessage(index)}>
                                        <Trash2 className='pr-2' /> Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
                <CardContent className="break-words p-3">
                    <MarkdownPreview source={msg.text} />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChatBox;