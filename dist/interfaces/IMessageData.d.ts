/**
 * Message data interface for social media messages
 */
export interface IMessageData {
    data_post: string;
    data_view?: string;
    user_url: string;
    user_photo?: string;
    user_name: string;
    message_url: string;
    message_text: string;
    message_photo: string[];
    message_video: string[];
    views?: string;
    datetime: string;
    groupedId?: string;
    id?: number;
    isAlbum?: boolean;
    isProcessed?: boolean;
    channelName: string;
    importedAt: Date;
}
