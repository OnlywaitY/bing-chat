"use client"
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChatModels, ChatSettings } from '@/types/chat'

interface ChatModelsTabsProps {
    chatSetting: ChatSettings;
    setChatSetting: (setting: ChatSettings) => void;
}

interface ChatModelTriggerProps {
    chatMode: string
    chatSetting: ChatSettings;
    setChatSetting: (setting: ChatSettings) => void;
}

const ChatModelTrigger: React.FC<ChatModelTriggerProps> = ({ chatMode, chatSetting, setChatSetting }) => {
    return (
        <TabsTrigger className="w-[12rem]" value={chatMode}
            onClick={() => {
                setChatSetting({
                    ...chatSetting,
                    chatMode: chatMode
                })
            }}>
            {chatMode}
        </TabsTrigger>
    )
}

const ChatModelsTabs: React.FC<ChatModelsTabsProps> = ({ chatSetting, setChatSetting }) => {
    return (
        <Tabs className="" defaultValue={chatSetting.chatMode}>
            <TabsList>
                <ChatModelTrigger chatMode={ChatModels.creative} chatSetting={chatSetting} setChatSetting={setChatSetting} />
                <ChatModelTrigger chatMode={ChatModels.balanced} chatSetting={chatSetting} setChatSetting={setChatSetting} />
                <ChatModelTrigger chatMode={ChatModels.precise} chatSetting={chatSetting} setChatSetting={setChatSetting} />
            </TabsList>
        </Tabs>
    );
};

export default ChatModelsTabs;