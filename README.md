# Berega Common Types

A shared TypeScript interfaces package for Berega projects.

## Installation

### From GitHub

```bash
npm install github:your-organization/berega-common-types
```

Replace `your-organization` with your actual GitHub organization name.

## Usage

```typescript
// Import the interfaces you need
import { IApartment, FrontendApartment, IMessageData } from '@berega/common-types';

// For backend applications (using object coordinates)
import { Document, Schema, model } from 'mongoose';
import { IApartment } from '@berega/common-types';

// Extend with Mongoose Document for backend use
interface IApartmentDocument extends IApartment, Document {}

const apartmentSchema = new Schema<IApartmentDocument>({
  // Define your schema using IApartment properties
});

// For frontend applications (using array coordinates)
import { FrontendApartment } from '@berega/common-types';

interface MapComponentProps {
  apartment: FrontendApartment;
}

// Accessing frontend coordinates (array format)
const showOnMap = (apt: FrontendApartment) => {
  if (apt.coordinates) {
    const [longitude, latitude] = apt.coordinates;
    // Use with map libraries
  }
};

// Use the NewApartment type for creation operations
import { NewApartment } from '@berega/common-types';

function createApartment(data: NewApartment) {
  // Implementation
}
```

## Available Types

- `IApartment`: The main apartment interface with object coordinates `{latitude, longitude}`
- `FrontendApartment`: Extension with array coordinates `[longitude, latitude]` for map libraries
- `NewApartment`: Type for creating new apartments (without ID)
- `IMessageData`: Interface for social media message data including post information, user details, and message content

## Using with ts-node

If you're using ts-node to run your TypeScript files directly, you might encounter module resolution issues. To fix this, use the provided ts-node configuration:

```bash
# Install the required dependencies
npm install --save-dev ts-node tsconfig-paths

# Run your scripts with the custom configuration
npm run ts-node -- your-script.ts
```

Or directly with ts-node:

```bash
ts-node --project tsconfig.node.json your-script.ts
``` 