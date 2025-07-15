"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentRoomType = exports.StatusTypes = exports.DealTypes = exports.PropertyTypes = void 0;
// Export all interfaces from the package
__exportStar(require("./interfaces/IApartment"), exports);
__exportStar(require("./interfaces/ICatalog"), exports);
__exportStar(require("./interfaces/IMessageData"), exports);
__exportStar(require("./interfaces/IEstateBuilding"), exports);
__exportStar(require("./interfaces/IEstate"), exports);
__exportStar(require("./interfaces/IUser"), exports);
// Export constants
var property_types_1 = require("./constants/property-types");
Object.defineProperty(exports, "PropertyTypes", { enumerable: true, get: function () { return property_types_1.PropertyTypes; } });
Object.defineProperty(exports, "DealTypes", { enumerable: true, get: function () { return property_types_1.DealTypes; } });
Object.defineProperty(exports, "StatusTypes", { enumerable: true, get: function () { return property_types_1.StatusTypes; } });
var property_types_2 = require("./constants/property-types");
Object.defineProperty(exports, "ApartmentRoomType", { enumerable: true, get: function () { return property_types_2.RoomTypes; } });
