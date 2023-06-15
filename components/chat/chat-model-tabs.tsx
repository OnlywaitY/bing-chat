"use client"
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChatModels } from '@/types/chat'

interface ChatModelsTabsProps {
    chatModel: string;
    setChatMode: (mode: string) => void;
}

const ChatModelsTabs: React.FC<ChatModelsTabsProps> = ({ chatModel, setChatMode }) => {
    return (
        <Tabs className="" defaultValue={chatModel}>
            <TabsList>
                <TabsTrigger className="w-[12rem]" value={ChatModels.creative} onClick={() => setChatMode(ChatModels.creative)}>
                    {ChatModels.creative}
                </TabsTrigger>
                <TabsTrigger className="w-[12rem]" value={ChatModels.balanced} onClick={() => setChatMode(ChatModels.balanced)}>
                    {ChatModels.balanced}
                </TabsTrigger>
                <TabsTrigger className="w-[12rem]" value={ChatModels.precise} onClick={() => setChatMode(ChatModels.precise)}>
                    {ChatModels.precise}
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default ChatModelsTabs;