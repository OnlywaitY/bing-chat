"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
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
    return (
        <div key={index} className={messageClass(msg)}
            onMouseEnter={() => {
                let newArray = Array.from({ length: editHoverArray.length }, () => false);
                newArray[index] = true;
                setEditHoverArray(newArray);
            }}
            onMouseLeave={() => {
                let newArray = [...editHoverArray];
                newArray[index] = false;
                setEditHoverArray(newArray);
            }}>
            {editMsg && editHoverArray[index] && msg.tag.startsWith('[user]') && (
                <Button className="mt-4 px-2" variant="ghost" onClick={() => clearMessage(index)}><XCircle /></Button>
            )}
            <Card className="mt-2 mb-2 max-w-3xl">
                <CardContent className="break-words p-3">
                    <MarkdownPreview source={msg.text} />
                </CardContent>
            </Card>
            {editMsg && editHoverArray[index] && !msg.tag.startsWith('[user]') && (
                <Button className="mt-4 px-2" variant="ghost" onClick={() => clearMessage(index)}><XCircle /></Button>
            )}
        </div>
    );
};

export default ChatBox;