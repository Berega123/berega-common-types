"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSources = exports.ApartmentSources = exports.ViewTypes = exports.BuildingTypes = exports.AmenitiesOptions = exports.TagOptions = exports.RenovationTypes = exports.BathroomTypes = exports.RoomTypes = exports.StatusTypes = exports.DealTypes = exports.PropertyTypes = void 0;
exports.PropertyTypes = [
    'apartment',
    'house',
    'villa',
    'penthouse',
    'commercial',
    'restaurant',
    'office',
    'warehouse',
    'hotel',
    'shop',
    'land',
    'industrial',
    'other',
    'newbuild'
];
// Deal types
exports.DealTypes = ['sale', 'rent', 'investment'];
// Status types
exports.StatusTypes = [
    'active',
    'pending',
    'draft',
    'sold',
    'reserved',
    'archived',
    'deleted',
    'under_moderation',
    'completed'
];
// Room types for apartments
exports.RoomTypes = [
    '1+1',
    'studio',
    '2+1',
    '3+1',
    '4+1',
    '4+',
    '5+',
    'more',
];
// Bathroom types
exports.BathroomTypes = [
    'splited',
    'split',
    'combined',
    'none'
];
// Renovation types
exports.RenovationTypes = [
    'shell_condition',
    'white_box',
    'green_box',
    'standard',
    'turnkey',
];
// Tag options
exports.TagOptions = [
    'sea_view',
    'mountain_view',
    'city_view',
    'garden_view',
    'pool',
    'gym',
    'sauna',
    'balcony',
    'terrace',
    'parking',
    'garage',
    'elevator',
    'security',
    'furnished',
    'pets_allowed',
    'smoking_allowed',
    'internet',
    'air_conditioning',
    'heating',
    'fireplace',
    'dishwasher',
    'washing_machine',
    'new_building',
    'historic_building'
];
// Amenities options
exports.AmenitiesOptions = [
    'pool',
    'gym',
    'spa',
    'sauna',
    'tennis_court',
    'basketball_court',
    'playground',
    'garden',
    'rooftop',
    'concierge',
    'security',
    'parking',
    'garage',
    'elevator',
    'laundry',
    'storage',
    'bike_storage',
    'conference_room',
    'coworking_space',
    'restaurant',
    'bar',
    'shop',
    'pharmacy',
    'medical_center'
];
// Building types
exports.BuildingTypes = [
    'residential',
    'commercial',
    'mixed',
    'apartment',
    'monolithic',
    'brick',
    'panel',
    'block',
];
// View types
exports.ViewTypes = [
    'seaview',
    'mountainview',
    'parkview',
    'cityview',
    'unknown'
];
// Apartment sources
exports.ApartmentSources = [
    'telegram',
    'korter',
    'ss',
    'myhome',
    'facebook',
    '', // other (empty string)
];
// User sources
exports.UserSources = [
    'korter',
    'ss',
    'myhome',
    'telegram',
    'unknown',
];
