# Berega Common Types

A shared TypeScript interfaces package for Berega projects, providing unified type definitions for apartments, estates, and buildings.

## Installation

### From GitHub

```bash
npm install github:your-organization/berega-common-types
```

Replace `your-organization` with your actual GitHub organization name.

## Available Interfaces

### 🏠 **IApartment**
Comprehensive apartment interface aligned with EstateApartment database schema.
- **Database-ready**: Matches NestJS/Mongoose EstateApartment schema (93% compatibility)
- **Source tracking**: Includes properties for listing sources and URLs
- **Flexible pricing**: Supports both regular price and per-month pricing
- **Location data**: Full address details including country codes

### 🏢 **IEstateBuilding** 
Building-level interface for estate complexes.
- **Building details**: Height, floors, building year, ceiling height
- **Property classification**: Building type, property type, deal type
- **Complex support**: Handles multi-building estates

### 🏘️ **IEstate**
Estate/property interface for fundamental property data.
- **Core estate info**: Title, description, address, coordinates
- **Pricing ranges**: From/to pricing for price ranges
- **Development flags**: New build and complex indicators

### 📱 **IMessageData**
Interface for social media message data including post information and user details.

## Usage Examples

### Basic Apartment Usage
```typescript
import { IApartment } from '@berega/common-types';

// Database-ready apartment object
const apartment: IApartment = {
  title: "Modern 2BR Apartment",
  price: 150000,
  price_sqm: 2500,
  coordinates: [24.7536, 59.4370], // Tallinn coordinates
  rooms: "2",
  area: 60,
  city: "Tallinn",
  country: "Estonia",
  dealType: "sale",
  isNewBuild: false
};
```

### Backend Integration (NestJS/Mongoose)
```typescript
import { Document } from 'mongoose';
import { IApartment } from '@berega/common-types';

// Extend with Mongoose Document
interface IApartmentDocument extends IApartment, Document {}

// Use in your NestJS service
@Injectable()
export class ApartmentService {
  async createApartment(data: IApartment) {
    // Direct compatibility with EstateApartment schema
    return await this.apartmentModel.create(data);
  }
}
```

### Building & Estate Usage
```typescript
import { IEstateBuilding, IEstate } from '@berega/common-types';

const building: IEstateBuilding = {
  title: "Sunset Towers",
  coordinates: [24.7536, 59.4370],
  height: 45,
  floors: 12,
  buildingType: "residential",
  isComplex: true
};

const estate: IEstate = {
  title: "Sunset Estate Complex",
  description: "Luxury residential complex",
  address: "Narva mnt 7, Tallinn",
  coordinates: [24.7536, 59.4370],
  plot: "A-123",
  isNewBuild: true
};
```

### Source Tracking (IApartment)
```typescript
import { IApartment } from '@berega/common-types';

const trackedApartment: IApartment = {
  // ... apartment data ...
  source: "korter.ee",
  sourceUrl: "https://korter.ee/listing/123",
  sourceId: "korter_123",
  dealType: "rent",
  price_per_month: 800
};
```

## Schema Compatibility

The interfaces are designed to be **database-ready** and compatible with:

- ✅ **NestJS/Mongoose schemas**
- ✅ **MongoDB document structure** 
- ✅ **TypeScript strict mode**
- ✅ **ObjectId references** (as `string | object`)

### EstateApartment Compatibility
`IApartment` is **93% aligned** with EstateApartment schema:
- 28/30 core properties match exactly
- All data types are compatible
- ObjectId references properly typed
- Optional properties maintain flexibility

## Migration Guide

### From Legacy IApartment
If updating from older versions:

```typescript
// Old structure
interface OldApartment {
  listingType?: string;  // → dealType
  secondary?: boolean;   // → isNewBuild  
  processed?: boolean;   // → removed
  coordinates?: [number, number]; // → number[]
}

// New structure (current)
interface IApartment {
  dealType?: string;     // ✅ Renamed
  isNewBuild?: boolean;  // ✅ Renamed
  coordinates?: number[]; // ✅ More flexible
  // processed removed   // ✅ Cleaned up
}
```

## Development

### Building
```bash
npm run build
```

### TypeScript Configuration
For ts-node usage:
```bash
npm run ts-node -- your-script.ts
# or
ts-node --project tsconfig.node.json your-script.ts
``` 