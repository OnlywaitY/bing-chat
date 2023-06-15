"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { CircleEllipsis, Edit, Trash2, RefreshCcw, RotateCw, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import MarkdownPreview from '@uiw/react-markdown-preview/esm/index'
import { Tag, Message } from '@/types/chat'

interface ChatBoxProps {
    index: number
    msg: Message
    editMsg: boolean
    clearMessage: (index: any) => void
    resendMessage: (index: any) => void
}

const ChatBox: React.FC<ChatBoxProps> = ({ index, msg, editMsg, clearMessage, resendMessage }) => {
    const [editHoverArray, setEditHoverArray] = React.useState(Array.from({ length: 0 }, () => false))
    // 不同消息样式处理
    const messageClass = (msg: Message) => {
        let className = `flex`
        if (msg.tag === Tag.user_msg) {
            className += ` justify-end`
        } else {
            className += ` justify-start`
        }
        return className
    }
    const catalogButtonClass = (msg: Message) => {
        let className = `absolute top-0 transform -translate-y-1/2`
        if (msg.tag === Tag.user_msg) {
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
    // 更改消息发送失败与重发按钮的显示
    const [failResendArray, setFailResendArray] = React.useState(Array.from({ length: 0 }, () => false));
    return (
        <div key={index} className={messageClass(msg)}>
            {msg.tag === Tag.user_msg && msg.error &&
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button className="p-2 my-auto" size="sm" variant="ghost"
                                onClick={() => resendMessage(index)}
                                onMouseEnter={() => {
                                    let newArray = Array.from({ length: failResendArray.length }, () => false);
                                    newArray[index] = true;
                                    setFailResendArray(newArray);
                                }}
                                onMouseLeave={() => {
                                    let newArray = [...failResendArray];
                                    newArray[index] = false;
                                    setFailResendArray(newArray);
                                }}>
                                {failResendArray[index] ? <RotateCw className="hover:animate-spin" color='red' /> : <AlertCircle color='red' />}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>resend the message</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            }
            <Card className="mt-2 mb-2 max-w-3xl relative"
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
                                <DropdownMenuItem onSelect={() => resendMessage(index)}>
                                    <RefreshCcw className='pr-2' /> Resend
                                </DropdownMenuItem>
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
                    <MarkdownPreview className="bg-primary text-primary-foreground" source={msg.text} />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChatBox;