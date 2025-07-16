export declare const PropertyTypes: readonly ["apartment", "house", "villa", "penthouse", "commercial", "restaurant", "office", "warehouse", "hotel", "shop", "land", "industrial", "other"];
export type PropertyType = typeof PropertyTypes[number];
export declare const DealTypes: readonly ["sale", "rent", "investment"];
export type DealType = typeof DealTypes[number];
export declare const StatusTypes: readonly ["active", "pending", "draft", "sold", "reserved", "archived", "deleted", "under_moderation", "completed"];
export type StatusType = typeof StatusTypes[number];
export declare const RoomTypes: readonly ["1+1", "studio", "2+1", "3+1", "4+1", "4+", "5+", "more"];
export type RoomTypes = typeof RoomTypes[number];
